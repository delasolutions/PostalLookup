// Typesscript
// postal-lookup.ts

const fs = require('fs')

const file = fs.readFileSync("Zip_Code_Lookup_Table.csv", "utf-8");
let rows:string[] = file.split("\n");

for (var row of rows){
    let columns:string[] = row.split(",");
    var zip = columns[0].toString().trim()
    // console.log(zip);
    var OAuth = require('oauth');
    var header = {
      "X-Yahoo-App-Id": "Oteqhx34"
};
    var request = new OAuth.OAuth(
      null,
      null,
      'private key',
      'secret key',
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      header
);
    request.get(
      'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + zip + '&format=json',
      null,
      null,
      function (err, data, result) {
          if (err) {
              console.log(err);
          } else {
              console.log(data)
          }
      }
  );
}