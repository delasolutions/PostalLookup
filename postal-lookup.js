// Typesscript
// postal-lookup.ts
var fs = require('fs');
var data = fs.readFileSync("Zip_Code_Lookup_Table.csv", "utf-8");
var results = data.split("\n");
for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
    var city = results_1[_i];
    console.log(city);
}
var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": "Oteqhx34"
};
var request = new OAuth.OAuth(null, null, 'dj0yJmk9WUZrMGxsZVJqaDVvJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTdj', '409839ee9ae96db860b955fb53cf4c5a631ede58', '1.0', null, 'HMAC-SHA1', null, header);
request.get('https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json', null, null, function (err, data, result) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
