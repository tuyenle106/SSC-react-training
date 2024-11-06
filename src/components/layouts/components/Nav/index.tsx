import React from 'react';
import { Link } from 'react-router-dom';

import * as constants from '~/constants';

import styles from './Nav.module.scss';

const Nav = () => {
	const NavItems = [
		{
			path: constants.HOME,
			title: 'Home',
		},
		{
			path: constants.PAGE_2,
			title: 'Page 2',
		},
	];
	return (
		<ul className={styles.wrapper}>
			{NavItems.map((item) => (
				<li key={item.path}>
					<Link to={item.path}>{item.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default Nav;
