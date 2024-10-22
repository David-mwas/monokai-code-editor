import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { executeCode } from "../api";

function Output({ editorRef, language }) {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const runCode = async () => {
    setLoading(true);
    const code = editorRef.current.getValue();
    if (!code) {
      toast({
        title: "No code to run",
        description: "Please write some code to run",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }
    try {
      const { run: result } = await executeCode(language, code);
      setOutput(result?.output);
      console.log(result);
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error?.message || "Unable to run the code",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box className="w-full lg:w-[50%]">
      <Text mb={2} fontSize="lg">
        output
      </Text>
      <Button
        onClick={runCode}
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={loading}
      >
        Run Code
      </Button>
      <Box height="75vh" border="1px solid" borderRadius={4} borderColor="#333">
        {output ? output : "click 'Run Code' to dispaly here"}
      </Box>
    </Box>
  );
}

export default Output;
