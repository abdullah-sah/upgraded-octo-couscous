import { FunctionComponent } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ISignInButtonProps {}

const SignInButton: FunctionComponent<ISignInButtonProps> = () => {
	return (
		<>
			<div className={styles.container}>
				<Link href="/homepage">
					<p className={styles.button}>Sign In</p>
				</Link>
			</div>
		</>
	);
};

export default SignInButton;
