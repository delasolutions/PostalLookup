// Typesscript
// postal-lookup.ts

const fs = require('fs')

const data = fs.readFileSync("Zip_Code_Lookup_Table.csv", "utf-8");
let results:string[] = data.split("\n");

for (var city of results){
    console.log(city);
}

// var OAuth = require('oauth');
// var header = {
//     "X-Yahoo-App-Id": "Oteqhx34"
// };
// var request = new OAuth.OAuth(
//     null,
//     null,
//     'private key',
//     'secreat key',
//     '1.0',
//     null,
//     'HMAC-SHA1',
//     null,
//     header
// );
// request.get(
//     'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
//     null,
//     null,
//     function (err, data, result) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data)
//         }
//     }
// );