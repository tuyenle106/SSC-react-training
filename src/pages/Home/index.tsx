import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement } from '~/store/slices/appSlice';
import Button from '~/components/ui/Button';

import styles from './Home.module.scss';
import { RootState } from '../../store/store';

const HomePage = () => {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.app.count);

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<Button onClick={() => dispatch(increment())}>+</Button>
				<span>{count}</span>
				<Button onClick={() => dispatch(decrement())}>-</Button>
			</div>
		</div>
	);
};

export default HomePage;
