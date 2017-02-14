var moment = require('moment'); 
moment().format();

var firstName = 'Julius'; // String
var lastName = 'Williams'; // String
var fullName = `${firstName} ${lastName}`; // Template 
var email = 'jmichaelcodes@gmail.com'; // String
var grewUpInCity = true; //Boolean
var yearsInCollege = 2; // Number
var numberOfPets = 1; // Number
var averageSleep = 7.5; // Foat
var favoriteGenre = 'Classic Rock'; // String
var favoriteShows = ['Doctor Who', 'Arrested Development', 'Seinfeld']; // Array
var futureJobTitle; // Undefined
var lifeWithoutJS = null; // null
var yearGraduated; // Date
var yearGraduatedMoment; // Date

// Year graduated using Date object
yearGraduated = new Date();
yearGraduated.setFullYear(2007);
yearGraduated = yearGraduated.getFullYear();

// Year graduated using moment.js
yearGraduatedMoment = moment().set('year', 2007);
yearGraduatedMoment = yearGraduatedMoment.get('year');


console.log(`${firstName}, ${lastName}, ${fullName}, ${email}, ${grewUpInCity}, ${yearsInCollege}, ${numberOfPets}, ${averageSleep}, ${favoriteGenre}, ${favoriteShows}, ${futureJobTitle}, ${lifeWithoutJS}, ${yearGraduated}, ${yearGraduatedMoment}`);