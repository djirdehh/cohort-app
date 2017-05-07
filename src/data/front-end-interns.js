import hassanProfile from '../images/hassan.png';
import hassanCohort from '../images/hd.png';
import aryaProfile from '../images/arya-profile.jpg';
import aryaCohort from '../images/arya-cohort.jpeg';
import jonProfile from '../images/jon-profile.jpg';
import jonCohort from '../images/jon-cohort.jpg';

exports.ALL = [
	{	
		name: 'Hassan Djirdeh', 
		image: hassanProfile, 
		mention: '"Cheers to checking this out!"', 
		emoji: '🔥', 
		github: 'https://github.com/djirdehh',
		personal_website: 'http://www.hassandjirdeh.com/',
		cohort_message: `Thanks for checking this out! I built this with React/Bootstrap/SCSS since I wanted to get this deployed as fast as possible. This probably wouldn't be the final design of the app if I actually continued this but I would employ a lot of the features I created here. Why Game of Throne characters? I thought they would be pretty cool placeholders 😄.`,
		cohort_image: hassanCohort 
	},
	{	
		name: 'Arya Stark', 
		image: aryaProfile, 
		mention: '"Swift as a deer. Quiet as a Shadow. Fear cuts deeper than swords."', 
		emoji: '🔥', 
		github: '',
		personal_website: 'http://awoiaf.westeros.org/index.php/Arya_Stark',
		cohort_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		cohort_image: aryaCohort
	},
	{	
		name: 'Jon Snow', 
		image: jonProfile,
		mention: '"First lesson, stick them with the pointy end."', 
		emoji: '🔥', 
		github: '',
		personal_website: 'http://awoiaf.westeros.org/index.php/Jon_Snow',
		cohort_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		cohort_image: jonCohort
	}
]