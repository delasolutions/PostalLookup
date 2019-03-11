// Typesscript
// postal-lookup.ts
var fs = require('fs');
var file = fs.readFileSync("Zip_Code_Lookup_Table.csv", "utf-8");
var rows = file.split("\n");
for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
    var row = rows_1[_i];
    var columns = row.split(",");
    var zip = columns[0].toString().trim();
    // console.log(zip);
    var OAuth = require('oauth');
    var header = {
        "X-Yahoo-App-Id": "Oteqhx34"
    };
    var request = new OAuth.OAuth(null, null, 'private key', 'secret key', '1.0', null, 'HMAC-SHA1', null, header);
    request.get('https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + zip + '&format=json', null, null, function (err, data, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
}
