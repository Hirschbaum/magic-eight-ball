let userName = 'Marvin';
userName ? console.log(`Hello ${userName}`) : console.log('Hello!');
let userQuestion = "Are you happy, JavaScript?";
console.log(`The user asked: ${ userQuestion }`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch(randomNumber){
	case 0:
		eightBall = 'Absolutely not';
	break;
	case 1:
		eightBall = 'Maybe';
	break;
	case 2:
		eightBall = 'Donno, try again';
	break;
	case 3:
		eightBall = "Sorry, I can/'t predict now";
	break;
	case 4:
		eightBall = 'Do not count on it';
	break;
	case 5:
		eightBall = 'My computer says no';
	break;
	case 6:
		eightBall = '42';
	break;
	case 7:
		eightBall = 'Yes of course';
	break;
}

console.log (eightBall);