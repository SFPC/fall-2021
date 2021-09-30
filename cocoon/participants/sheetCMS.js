//go to the google sheet you want to use, click File -> Publish to Web then choose Tab-Separated-Values and put the link below
//load programs from google sheet, then run a callback function on the data

function loadSheetData(sheetTSVUrl, callback){
  $.get(sheetTSVUrl, function(data) {
    //data enters as TSV string, we convert it into an array of JSON objects then send to callback
    callback(TSVToJSONArray(data))
  });
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