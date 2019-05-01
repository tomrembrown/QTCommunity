var xpath = require('xpath')
var dom = require('xmldom').DOMParser
var fs = require('fs')
var md5 = require('md5')

var qtFetch = require('../qtfetch.js')
var urls = [
  'http://www.the519.org/calendar/?type=daily#',
  'http://www.the519.org/calendar/?type=upcoming#'
]

const regex1 = /&amp;nbsp;/gm
const regex2 = /\r\n/gm
const regex3 = /[ ]{2,}|\u0007|\t/gm
const regex4 = /background-image: url\('(.*2x.*)'\)/gm

for (var i in urls) {
  console.log('Processing ' + urls[i] + '\n')

  qtFetch.getURL(urls[i]).then(
    function (content) {
      content = content.data

      var document = new dom().parseFromString(content)
      var page_urls = xpath.select(
        '//div[contains(@itemtype, "http://schema.org/Event")]/div[contains(@class, "event")]/a/@href',
        document
      ) // https://johnresig.com/blog/xpath-css-selectors/

      var output = []

      for (var j in page_urls) {
        var page_url = page_urls[j]
          .toString()
          .replace('"', '')
          .replace('"', '')
          .replace('href=', '')
          .trim()

        if (output.indexOf(page_url) === -1) {
          output.push(page_url)

          console.log(
            '\tProcessing ' + page_url + ' : ' + md5(page_url) + ' \n'
          )
          qtFetch.getURL(page_url).then(
            function (page_content) {
              // page_content is in array
              var page_url_local = page_content.url
              var page_content = page_content.data

              var data = qtFetch.parseMicrodata(page_content)

              var page_document = new dom().parseFromString(page_content)
              var description = xpath.select(
                '//*[contains(@class, "program-description")]/*',
                page_document
              )

              var description_output = ''
              for (var j in description) {
                description_output += description[j]
                  .toString()
                  .replace(regex1, ' ')
                  .replace(regex2, '')
              }

              // time data is not complete within microdata - add displayed
              data = data['items'][1]['properties']
              data['time'] = {}

              for (var k in data['startDate']) {
                var timestamp = data['startDate'][k]
                var timestamp_text = xpath
                  .select1(
                    'string(//div[contains(@content, "' + timestamp + '")])',
                    page_document
                  )
                  .toString()
                  .trim()
                  .replace(regex3, '')

                data['time'][timestamp] = timestamp_text
              }

              delete data['startDate']

              // get the image
              var image_div = xpath.select1(
                'string(//article[contains(@id, "event-listing")]/div[contains(@class, "grid full-img-1")]/style)',
                page_document
              )
              let match, matchTextAt

              while ((match = regex4.exec(image_div)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (match.index === regex4.lastIndex) {
                  regex4.lastIndex++
                }

                // The result can be accessed through the `m`-variable.
                match.forEach((matchText, groupIndex) => {
                  matchTextAt = matchText
                })
              }

              data['image'] = 'http://www.the519.org' + matchTextAt

              // flatten the array
              data['url'] = data['url'][0]
              data['location'] = data['location'][0]
              data['name'] = data['name'][0]

              // add custom properties
              data['description'] = description_output
              data['site_url'] = page_url_local

              data = JSON.stringify(data)

              var file_name = 'The519/The519-' + md5(page_url_local) + '.json'
              console.log('\tWriting to ' + file_name + '\n')
              fs.writeFile(file_name, data, function (error) {})
            },
            function () {}
          )
        }
      }
    },
    function () {}
  )
}
