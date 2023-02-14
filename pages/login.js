import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const LoginPage = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Heading>Log in to your account</Heading>
          <HStack spacing="2" justify="center">
            <Text>Dont&apos;t have an account?</Text>
            <Button variant="link" colorScheme="facebook">
              Sing up
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
        boxShadow={{ base: "none", sm: useColorModeValue("lg", "dark-lg") }}
        borderRadius={{ base: "none", sm: "xl" }}>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" />
            </FormControl>
          </Stack>
          <HStack justify="space-between">
            <Button variant="link" colorScheme="facebook" size="sm">
              Forgot Password?
            </Button>
          </HStack>
          <Stack>
            <Button colorScheme="teal">Sign In</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
