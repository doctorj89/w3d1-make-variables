var moment = require('moment'); 
moment().format();

var firstName = 'Julius';
var lastName = 'Williams';
var fullName = `${firstName} ${lastName}`;
var email = 'doctorj89@gmail.com';
var grewUpInCity = true;
var yearsInCollege = 2;
var numberOfPets = 1;
var averageSleep = 7.0;
var favoriteGenre = 'Classic Rock';
var favoriteShows = ['Doctor Who', 'Arrested Development', 'Seinfeld'];
var futureJobTitle;
var lifeWithoutJS = null;
var yearGraduated;
var yearGraduatedMoment;

// yearGraduated with native JS
yearGraduated = new Date();
yearGraduated.setFullYear(2007);
yearGraduated = yearGraduated.getFullYear();

// yearGraduated 
yearGraduatedMoment = moment().set('year', 2007);
yearGraduatedMoment = yearGraduatedMoment.get('year');


console.log(`${firstName}, ${lastName}, ${fullName}, ${email}, ${grewUpInCity}, ${yearsInCollege}, ${numberOfPets}, ${averageSleep}, ${favoriteGenre}, ${favoriteShows}, ${futureJobTitle}, ${lifeWithoutJS}, ${yearGraduated}, ${yearGraduatedMoment}`);