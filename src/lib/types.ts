export interface Link {
	linkDestination: string;
	linkText: string;
	linkIconClass: string;
	linkId: string; // html id attribute
}

export interface Skill {
	name: string;
	level?: number; // For future use
}

export interface ExperienceItem {
	date: string;
	company: string;
	position: string;
	description: string;
}

export interface Bio {
	name: string;
	position: string;
	description: string;
}

export interface Comic {
	title: string;
	img: string;
	alt: string;
	year: string;
	month: string;
	day: string;
}
