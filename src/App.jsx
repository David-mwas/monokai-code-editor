import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="bg-[#0f0a19] text-gray-500 min-h-screen px-6 py-8">
     <CodeEditor/>
    </Box>
  );
}

export default App;
