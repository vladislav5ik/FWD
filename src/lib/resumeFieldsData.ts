import type {Bio, Link, Skill, ExperienceItem} from './types';

export let bio: Bio = {
	name: 'Vladislav Spigin',
	position: 'Python Backend Developer',
	description:
		'I am creative Python Backend developer with 2-year experience creating user-friendly analytical programming software and chat-bots using Flask, PostgreSQL and other technologies. Great team player and always ready to learn new technologies to deliver exceptional customer experience.'
};
export let contactLinks: Link[] = [
	{
		linkDestination: 'https://github.com/vladislav5ik',
		linkText: 'Github',
		linkIconClass: 'fa fa-github',
		linkId: 'gh-link'
	},
	{
		linkDestination: 'https://linkedin.com/in/vladislav-spigin-aa4a671b7',
		linkText: 'LinkedIn',
		linkIconClass: 'fa fa-linkedin',
		linkId: 'in-link'
	},
	{
		linkDestination: 'https://t.me/vladislav5ik',
		linkText: 'Telegram',
		linkIconClass: 'fa fa-telegram',
		linkId: 'tg-link'
	},
	{
		linkDestination: 'mailto:v.spigin@innopolis.university',
		linkText: 'v.spigin@innopolis.university',
		linkIconClass: 'fa fa-envelope',
		linkId: 'email'
	}
];

export let hardSkills: Skill[] = [
	{ name: 'Python' },
	{ name: 'Flask' },
	{ name: 'REST' },
	{ name: 'API' },
	{ name: 'PostgreSQL' },
	{ name: 'SQLite' },
	{ name: 'Linux' },
	{ name: 'Docker' },
	{ name: 'Git' },
	{ name: 'GitHub' },
	{ name: 'GitLab CI/CD' },
	{ name: 'Notion' },
	{ name: 'Trello' }
];

export let softSkills: Skill[] = [
	{ name: 'Teamwork' },
	{ name: 'Problem solving' },
	{ name: 'Self-motivation' },
	{ name: 'Fast-learner' },
	{ name: 'Communication' }
];

export let languageSkills: Skill[] = [{ name: 'English' }, { name: 'Russian' }];

export let experienceItems: ExperienceItem[] = [
	{
		date: '2022',
		company: 'Innopolis University',
		position: 'Project Team Leader',
		description:
			'Managed a team of 10 people to create the software for analyzing bibliometric indicators of the university. I was responsible for communication with the client, delegating tasks to the team members. The project was finished on time and successfully presented to the customer. Efficiency of the analytics department doubled.'
	},
	{
		date: '2022',
		company: 'Innopolis University',
		position: 'Backend Developer',
		description:
			'Developed the software for analyzing information from the financial application, and designed a handy AI chat-bot to help users to easily get the analytical information from the database. Self-learned and applied technologies: Docker, PostgreSQL, SQL Alchemy, Gitlab CI/CD, working with APIs of various services. The software helped simplify the use of the application and attract new users.'
	},
	{
		date: '2021-present',
		company: 'IT School of Innopolis University',
		position: 'Python Tutor',
		description:
			'Spent 150+ hours teaching students. During this time, strongly developed the skill of delivering complex concepts and the skill of code-review. Many of my students have won regional programming contests.'
	},
	{
		date: '2021',
		company: 'Innopolis University',
		position: 'Backend Developer',
		description:
			"Designed and created a telegram bot for the IT School of Innopolis University. Working in a team of 5 people I built problem-solving and teamwork skills as well as technical skills of Git, GitHub, SQLite, Aiogram. All the customer's requirements have been fulfilled."
	}
];
