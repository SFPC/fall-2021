const sheetUrl =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJHY7Kbx_Tw-_QzpR2XUmdxZuoMiwFu-chMQDpbhVAL5F8wktHMs3qIt1zLtO938LmMDTTtPbWvm_S/pub?output=tsv"
//load programs from google sheet, then run a callback function on the data

function loadSheetData(callback){
  $.get(sheetUrl, function(data) {
    //data enters as TSV string, we convert it into an array of JSON objects, save it in the variable 'programs' then send to callback
    callback(TSVToJSONArray(data))
  });
}
//This function will add an anchor link that jumps to the program
function addNavigationLink(program){
  return `<li><a href="#${program.urlTitle}"><em>${program.title}</em> by ${program.teacher}${TAstring}</a></li>`
}
//this creates the div html for the program, feel free to change any of the html or class names
//data is pulled from the course object using ${}
function addProgramDiv(program){
  let TAstring = program.teacher2 ? ` with ${program.teacher2}` : ""
  let byline = program.byline ? program.byline : program.teacher+TAstring
  let url = location.pathname.includes("programs") ? `../programs#${program.urlTitle}` : `programs#${program.urlTitle}`
  let titleLink = `<a href="javascript:void(0)" onclick="openPage('${program.urlTitle}')"><span id="title">${program.title}</span></a>`
  if(!program.live) titleLink = `<span id="title">${program.title}</span>`
  return `
    <div class="programDiv" id="${program.urlTitle}">
    <h2>${program.date} ${program.time} · ${program.location} · <span>$${program.price}</span></h2>
    <p>${titleLink} by ${byline}</p>
    </div>
  `
}
//Takes in the google sheet as a TSV and coverts it into an array of JSON objects
function TSVToJSONArray(str, delimiter = "\t") {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header.trim()] = values[index].trim();
      return object;
    }, {});
    return el;
  });


  // return the array
  return JSON.parse(JSON.stringify(arr));
}

function openPage(hash){
  if(location.pathname.includes("programs")){
    location.hash= hash
    findProgramAndLoad(hash)
  }
  else {
    location.hash= ""
    location.href = `/cocoon/programs#${hash}`
  }
}