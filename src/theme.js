import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	breakpoints: {
		sm: "280px",
		md: "768px",
		lg: "960px",
		xl: "1100px",
		"2xl": "1536px"
	}
});
export default theme;