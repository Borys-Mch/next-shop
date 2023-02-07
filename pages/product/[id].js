import React from "react";
import { useRouter } from "next/router";
import { data } from "@/utils/data";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = data.products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Container maxW={"container.xl"} mt={2}>
      <SimpleGrid columns={[1, 2]} spacing={2}>
        <Flex>
          <Image
            src={`/images${product.img}`}
            alt={product.title}
            rounded={"md"}
            fit={"cover"}
            align={"center"}
            height={"100%"}
            w={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }} my={10}>
          <Box as={"header"}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={"xl"}>
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}>{`${product.price} UAH`}</Text>
          </Box>
          <Text color={useColorModeValue("gray.500", "gray.400")}>
            {product.descr}
          </Text>
          <Flex flexGrow={1} alignItems={"end"}>
            <Button
              rounded={"md"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={7}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}>
              Add to cart
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
