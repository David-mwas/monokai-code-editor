import { Box, Button, Text } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

function LanguageSelector({ language, onSelect }) {
  const Languages = Object.entries(LANGUAGE_VERSIONS);
  return (
    <Box mb={4} ml={2}>
      <Text fontSize="lg" fontWeight="semibold" color="white" mb={2}>
        Select Language
      </Text>
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<FiChevronDown />}>
          {language}
        </MenuButton>
        <MenuList bg="#110c1b">
          {Languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              onClick={() => onSelect(lang)}
              color={lang === language ? "blue.400" : ""}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                bg: "gray.900",
                color: "blue.400",
              }}
            >
              {lang} &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default LanguageSelector;
