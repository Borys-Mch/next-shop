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
import Link from "next/link";
import React, { useState } from "react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Heading>Create an account</Heading>
          <HStack spacing="2" justify="center">
            <Text>Already have an account?</Text>
            <Link href="/login" passHref>
              <Button variant="link" colorScheme="facebook">
                Sing in
              </Button>
            </Link>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
        boxShadow={{ base: "none", sm: useColorModeValue("lg", "dark-lg") }}
        borderRadius={{ base: "none", sm: "xl" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="name">Full name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </Stack>
            <Stack>
              <Button colorScheme="teal" type="submit">
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default SignupPage;
