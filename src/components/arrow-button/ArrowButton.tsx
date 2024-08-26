import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

export type ArrowButtonProps = {
	setIsOpenArrow: (state: boolean) => void;
	isOpenArrow: boolean;
};

export const ArrowButton = ({
	setIsOpenArrow,
	isOpenArrow,
}: ArrowButtonProps) => {
	const handleClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		setIsOpenArrow(!isOpenArrow);
	};

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={handleClick}
			className={clsx(styles.container, isOpenArrow && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpenArrow && styles.arrow_open)}
			/>
		</div>
	);
};
