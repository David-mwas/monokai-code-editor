import { Box } from "@chakra-ui/react";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box className="bg-[#0f0a19] text-gray-500 min-h-screen px-6 py-8">
      <h1 className="font font-extrabold  text-2xl lg:text-4xl mb-6 text-gray-300">Monakai Code Editor</h1>
     <CodeEditor/>
    </Box>
  );
}

export default App;
