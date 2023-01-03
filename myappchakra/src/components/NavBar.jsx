import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Image,
  Tabs,
} from "@chakra-ui/react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { capitalize } from "../../utils/functions";

const NavBar = ({ products, favorites, getFavorite, deleteFavorite }) => {
  const unique = [...new Set(products.map((item) => item.category))];

  return (
    <Flex justify="space-between" background="blackAlpha.900">
      <Link to="/">
        <Box bg="white" py={3} px={5}>
          <FaHome color="teal" />
        </Box>
      </Link>
      <Tabs colorScheme="green" background="blackAlpha.900">
        <TabList color="white">
          {unique.map((category) => {
            return <Tab key={category}>{capitalize(category)}</Tab>;
          })}
        </TabList>
      </Tabs>
      <Flex>
        <Menu>
          <MenuButton
            color="white"
            as={Button}
            size="sm"
            bg="transparent"
            mr={2}
            mt={1.5}
            _hover={{ bg: "teal.700" }}
          >
            Your favorites
          </MenuButton>
          <MenuList>
            {favorites &&
              favorites.map((favorite) => {
                return (
                  <Link key={favorite.id} to={`favorite/${favorite.id}`}>
                    <MenuItem
                      minH="48px"
                      onClick={() => getFavorite(favorite.id)}
                    >
                      <Image
                        boxSize="2rem"
                        borderRadius="full"
                        src={favorite.image}
                        alt={favorite.title}
                        mr="12px"
                      />
                      <span>{favorite.title}</span>
                    </MenuItem>
                  </Link>
                );
              })}
          </MenuList>
        </Menu>
        <Box bg="teal" py={3} px={5}>
          <FaShoppingCart color="white" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
