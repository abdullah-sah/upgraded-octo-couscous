import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import Logo from "../components/Logo";
import SignInButton from "../components/SignInButton";
import Layout from "../components/Layout";
import RegisterBar from "../components/RegisterBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<header className={styles.header}>
					<Logo />
					<SignInButton />
				</header>

				<Layout
					fullWidth={true}
					verticalCenter={true}
					horizontalCenter={true}
					grow={true}
				>
					<div className={styles.content}>
						<h1>Unlimited movies, TV shows, and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<p>
							Ready to watch? Enter your email to create or restart your
							membership
						</p>
					</div>

					<RegisterBar />
				</Layout>
			</div>
		</main>
	);
}
