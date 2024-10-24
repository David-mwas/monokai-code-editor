import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { executeCode } from "../api";
import { FaPlay } from "react-icons/fa";

function Output({ editorRef, language }) {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
      setOutput(result?.output?.split("\n"));
      result?.stderr ? setIsError(true) : setIsError(false);
      if (!result?.stderr) {
        toast({
          title: "Code executed successfully",
          description: "Code has been executed successfully",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
      }
      if (result?.stderr) {
        toast({
          title: "An error occurred.",
          description: "Unable to run the code",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
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
        className="flex items-center justify-center"
        onClick={runCode}
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={loading}
      >
        <FaPlay />
        <Text className="ml-2"> Run Code</Text>
      </Button>
      <Box
        p={2}
        height="75vh"
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        color={isError ? "red.400" : ""}
      >
        {output
          ? output.map((line, index) => <Text key={index}>{line}</Text>)
          : "click 'Run Code' to dispaly here"}
      </Box>
    </Box>
  );
}

export default Output;
