import * as constants from '~/constants';

import HomePage from '~/pages/Home';
import ContactPage from '~/pages/Contact';
import TODOPage from '~/pages/Todo';

type RouteItem = {
	key: string;
	path: string;
	component: React.ComponentType;
	layout?: React.ComponentType;
};

const routing: RouteItem[] = [
	{
		key: 'home',
		path: constants.HOME,
		component: HomePage,
	},
	{
		key: 'contact',
		path: constants.CONTACT,
		component: ContactPage,
	},
	{
		key: 'todo',
		path: constants.TODO,
		component: TODOPage,
	},
];

export default routing;