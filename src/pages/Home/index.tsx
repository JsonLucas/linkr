import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";

export function Home() {
	return (
		<>
			<Header />
			<Posts />
		</>
	);
}