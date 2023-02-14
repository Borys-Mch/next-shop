import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
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
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginSchema.validate(
        {
          email,
          password,
        },
        {
          abortEarly: false,
        }
      );
    } catch (err) {
      const validationErrors = {};
      if (err instanceof yup.ValidationError) {
        err.inner.forEach(({ path, message }) => {
          validationErrors[path] = message;
        });
      }
      setError(validationErrors);
      return;
    }

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
          <Heading>Log in to your account</Heading>
          <HStack spacing="2" justify="center">
            <Text>Dont&apos;t have an account?</Text>
            <Link href="/signup" passHref>
              <Button variant="link" colorScheme="facebook">
                Sing up
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
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText
                  color={useColorModeValue("red.700", "red.300")}
                  id="email-helper-text">
                  {error.email}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormHelperText
                  color={useColorModeValue("red.700", "red.300")}
                  id="password-helper-text">
                  {error.password}
                </FormHelperText>
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Button variant="link" colorScheme="facebook" size="sm">
                Forgot Password?
              </Button>
            </HStack>
            <Stack>
              <Button colorScheme="teal" type="submit">
                Sign In
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
