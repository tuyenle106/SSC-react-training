import React from 'react';

import Nav from '../Nav';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.wrapper}>
			<h1>Header</h1>
			<Nav />
		</header>
	);
}

export default Header;
