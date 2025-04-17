import * as constants from '~/constants';

import HomePage from '~/pages/Home';
import ContactPage from '~/pages/Contact';
import TodoPage from '~/pages/Todo';
import PostsPage from '~/pages/Posts';
import PostDetailPage from '~/pages/PostDetail'; 
import UserDetailPage from '~/pages/UserDetail';

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
		component: TodoPage,
	},
	{
		key: 'posts',
		path: constants.POSTS,
		component: PostsPage,
	},
	{
	key: 'post-detail',
	path: constants.POST_DETAIL,
	component: PostDetailPage,
	},
	{
	key: 'user-detail',
	path: constants.USER_DETAIL,
	component: UserDetailPage,
	}
];

export default routing;