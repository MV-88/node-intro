var franc = require('franc');
var langs = require('langs');
var arguments = process.argv[2]
var colors = require('colors');


let francCode = (franc(arguments))
let langCode = langs.where('3', francCode);

if (langCode === 'und') {
    console.log("Sorry, couldn't figure it out! Try again with more sample text");
} else {
    console.log(langCode);
    console.log(franc(arguments)) // => 'sco'
    console.log(`The language you entered is ${langCode.name.rainbow}`);
}

