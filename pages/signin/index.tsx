import { NextPage } from "next";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";

interface IProps {
	props: object;
}

const SignIn: NextPage<IProps> = ({ props }) => {
	return (
		<>
			<Layout>
				<div className={styles.container}></div>
			</Layout>
		</>
	);
};

export default SignIn;
