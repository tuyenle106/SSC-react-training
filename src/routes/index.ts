import * as constants from '~/constants';

import HomePage from '~/pages/Home';
import Page2 from '~/pages/Page2';

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
		key: 'page2',
		path: constants.PAGE_2,
		component: Page2,
	},
];

export default routing;