import { NextPage } from "next";

interface IHomeProps {
	props: {
		random: string;
	};
}

const Home: NextPage<IHomeProps> = ({ props }) => {
	return <div></div>;
};

export default Home;
