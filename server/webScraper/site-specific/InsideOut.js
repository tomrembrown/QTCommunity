var xpath = require('xpath')
var dom = require('xmldom').DOMParser
var fs = require('fs')
var md5 = require('md5')

var qtFetch = require('../qtfetch.js')
var url = 'https://www.insideout.ca/events'

const regex1 = /&amp;nbsp;/gm
const regex2 = /\r\n/gm
const regex3 = /[ ]{2,}|Place:|Website|\t|\n\n/gm

qtFetch.getURL(url).then(function (content) {
  content = content.data

  var document = new dom().parseFromString(content)
  var page_urls = xpath.select('//div[contains(@class, "block event")]/a/@href', document)

  for (var i in page_urls) {
    var page_url = 'https://www.insideout.ca' + (page_urls[i].toString().replace('\"', '').replace('\"', '').replace('href=', '').trim())
    console.log('\tProcessing ' + page_url + ' \n')

    qtFetch.getURL(page_url).then(function (page_content) {
      var page_url_local = page_content.url
      var page_content = page_content.data

      var page_document = new dom().parseFromString(page_content)

      var date = xpath.select('string(//div[contains(@class, "detail")]/div[contains(@class, "meta")]/div[contains(@class, "date")])', page_document)
      var time = xpath.select('string(//div[contains(@class, "detail")]/div[contains(@class, "meta")]/div[contains(@class, "time")])', page_document)
      var website = xpath.select('string(//div[contains(@class, "detail")]/div[contains(@class, "meta")]/div[contains(@class, "place")]//a/@href)', page_document)

      var place = xpath.select('string(//div[contains(@class, "detail")]/div[contains(@class, "meta")]/div[contains(@class, "place")])', page_document)
      place = place.replace(regex3, '')

      var description = xpath.select('//div[contains(@class, "detail")]/div[contains(@class, "description")]/*', page_document)
      var description_output = ''
      for (var j in description) {
        description_output += description[j].toString().replace(regex1, ' ').replace(regex2, '')
      }

      var image = xpath.select('string(//div[contains(@class, "contain")]/img/@src)', page_document)

      var data = {
        'date': date + ' ' + time,
        'place': place,
        'description': description_output,
        'image': 'https://www.insideout.ca' + image,
        'website': website
      }
      data = JSON.stringify(data)

      var file_name = 'InsideOut/InsideOut-' + md5(page_url_local) + '.json'
      console.log('\tWriting to ' + file_name + '\n')
      fs.writeFile(file_name, data, function (error) {})
    }, function () {})
  }
}, function () {})
