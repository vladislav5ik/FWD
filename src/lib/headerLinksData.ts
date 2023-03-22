import type {Link} from './types';
import { base } from '$app/paths';
export let headerLinks: Link[] = [
	{
		linkDestination: base + '/',
		linkText: 'Resume',
		linkIconClass: 'fa fa-home',
		linkId: 'home-link'
	},
	{
		linkDestination: base + '/comic',
		linkText: 'Comic',
		linkIconClass: 'fa fa-comment',
		linkId: 'comic-link'
	}
];