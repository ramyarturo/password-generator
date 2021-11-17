import { ChakraProvider } from "@chakra-ui/react"
import MainPage from "./pages/main/MainPage";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
       <MainPage />
    </ChakraProvider>
  );
}

export default App;
