import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";

interface IProps {
	children?: React.ReactNode;
	title?: string;
	fullWidth?: boolean;
	verticalCenter?: boolean;
	horizontalCenter?: boolean;
	grow?: boolean;
}

const Layout: NextPage<IProps> = ({
	children,
	title,
	fullWidth,
	verticalCenter,
	horizontalCenter,
	grow,
}) => {
	let childrenClasses: string = styles.childrenContainer;
	if (fullWidth) childrenClasses += " " + styles.fullWidth;
	if (horizontalCenter) childrenClasses += " " + styles.horizontalCenter;
	if (verticalCenter) childrenClasses += " " + styles.verticalCenter;
	if (grow) childrenClasses += " " + styles.grow;

	return (
		<div className={styles.container}>
			<Head>
				<title>{title ? title : "Netflix"}</title>
			</Head>
			{/* <Navbar /> */}
			<div className={childrenClasses}>{children}</div>
		</div>
	);
};

export default Layout;
