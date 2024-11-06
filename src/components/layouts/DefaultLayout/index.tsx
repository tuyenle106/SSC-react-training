import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from './Default.module.scss';

interface IDefaultLayoutProps {
	children: React.ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
