import { CartContext } from "@/context/CartContext";
import {
  Box,
  CloseButton,
  Flex,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  const slizeDescr = item.descr.slice(0, 60) + "...";
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center">
      <Stack direction={"row"} spacing="5" width="full">
        <Image
          src={`/images${item.img}`}
          alt={item.title}
          width="120px"
          height="120px"
          loading="lazy"
        />
        <Box pt="4">
          <Text fontWeight="medium">{item.title}</Text>
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            {slizeDescr}
          </Text>
        </Box>
      </Stack>
      <Flex width="full" justify="space-between" display="flex">
        <Text
          fontWeight={"medium"}
          fontSize="lg"
          color={useColorModeValue("gray.800", "gray.200")}>
          ${item.price}
        </Text>
        <CloseButton onClick={() => removeFromCart(item.id)} />
      </Flex>
    </Flex>
  );
};

export default CartItem;
