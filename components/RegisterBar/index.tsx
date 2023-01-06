import { NextPage } from "next";
import Image from "next/image";
import styles from "./styles.module.scss";
import arrowRightIcon from "../../public/arrow-right-icon.svg";
import Link from "next/link";

interface IProps {}

const RegisterBar: NextPage<IProps> = () => {
	return (
		<div className={styles.container}>
			<input type="text" className={styles.input} />
			<Link href="/home" className={styles.btnContainer}>
				<p className={styles.btn}>GET STARTED</p>
				<Image
					src={arrowRightIcon}
					alt="arrow pointing to the right"
					width={24}
					height={24}
				/>
			</Link>
		</div>
	);
};

export default RegisterBar;
