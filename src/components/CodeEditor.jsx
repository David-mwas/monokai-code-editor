import { Box, HStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
function CodeEditor() {
  const [val, setVal] = useState("");
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef(null);
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const onSelect = (language) => {
    setLanguage(language);
    setVal(CODE_SNIPPETS[language]);
  };
  return (
    <Box>
      <HStack spacing={4}>
        <div className="flex flex-col lg:flex-row w-full gap-4">
         
          <Box className="w-full lg:w-[70%]">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              theme="vs-dark"
              value={val}
              height={"75vh"}
              onMount={onMount}
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onChange={(value) => setVal(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={language } />
        </div>
      </HStack>
    </Box>
  );
}

export default CodeEditor;
