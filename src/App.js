import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Tokens from "./component/Tokens";

function App() {
  const [data, setData] = useState([]);
  // const { colorMode, toggleColorMode } = useColorMode();
  const url =
    "https://k4jws6x71f.execute-api.ap-northeast-1.amazonaws.com/test";

  useEffect(() => {
    axios.get(`${url}/api/tokens/offset=9&limit=9`).then((response) => {
      setData(response.data.data);
      console.log(response);
    });
  }, []);

  console.log(data);

  return (
    <ChakraProvider>
      <div className="App">
        <Tokens />
      </div>
    </ChakraProvider>
  );
}

export default App;
