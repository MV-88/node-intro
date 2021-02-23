const figlet = require('figlet');
const colors = require('colors');

figlet('J o i n   U s', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});