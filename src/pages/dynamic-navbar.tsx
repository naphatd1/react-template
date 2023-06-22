import { Box, Flex, Spacer, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState } from "react";


export const DynamicNavbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={4}
        bg={colorMode === "light" ? "gray.200" : "gray.700"}
        color={colorMode === "light" ? "black" : "white"}
      >
        <IconButton
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                display={{ sm: "block", md: "none" }}
                onClick={handleToggle} aria-label={""}        />
  
        <Box display={{ sm: isOpen ? "block" : "none", md: "flex" }} width={{ sm: "full", md: "auto" }} alignItems="center">
          {/* Add your dynamic links here */}
          <Link href="#" p={2}>
            Link 1
          </Link>
          <Link href="#" p={2}>
            Link 2
          </Link>
          <Link href="#" p={2}>
            Link 3
          </Link>
        </Box>
  
        <Spacer />
  
        <IconButton
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost" aria-label={""}        />
      </Flex>
    );
  };
  