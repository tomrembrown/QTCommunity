export function convertHeadingToName(heading){
  return  heading.trim().charAt(0).toLowerCase() + 
          heading.trim().slice(1).replace(/ /g,"")
}