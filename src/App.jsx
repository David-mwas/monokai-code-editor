import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box className="bg-[#0f0a19] text-gray-500 min-h-screen px-4 lg:px-8 py-8 italic">
      <h1 className="font font-extrabold  text-3xl lg:text-4xl mb-4 text-gray-300 font-mono italic text-center border-b inline-flex">
        Monakai Code Editor <p className="animate-bounce">🚀</p>
      </h1>
      <CodeEditor />
    </Box>
  );
}

export default App;
