import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Divider,
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  Textarea,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  AvatarBadge,
  Center,
  Menu,
  keyframes,
  MenuButton,
  MenuList,
  Text,
  MenuItem,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
  SmallCloseIcon,
  PhoneIcon
} from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
const size = "96px";
const color = "teal";

const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.800", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text as="b" color="white" fontSize="2xl">
                Anime By Me
              </Text>
            </Box>
          </HStack>
          <Input placeholder="Search" pl={5} width={600} mr={0} ml={60} />
          <IconButton
            colorScheme="yellow"
            aria-label="Search database"
            icon={<SearchIcon />}
            mr={80}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>User Settings</MenuItem>
                <MenuItem>Notifications</MenuItem>
                <MenuDivider />
                <MenuItem>Upcoming</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={0}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              User Profile Edit
            </Heading>
            <Divider />
            <FormControl id="userName">
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    h="150px"
                    w="280px"
                    overflow="hidden"
                    ml={59}
                  >
                    {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
                    <Box
                      as="div"
                      position="relative"
                      w={size}
                      h={size}
                      _before={{
                        content: "''",
                        position: "relative",
                        display: "block",
                        width: "300%",
                        height: "300%",
                        boxSizing: "border-box",
                        marginLeft: "-100%",
                        marginTop: "-100%",
                        borderRadius: "50%",
                        bgColor: color,
                        animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                      }}
                    >
                      <Avatar
                        src="https://i.pravatar.cc/300"
                        size="full"
                        position="absolute"
                        top={0}
                      />
                    </Box>
                  </Flex>
                </Center>
              </Stack>
              <Center w="full">
                <Button w="full">Change Icon</Button>
              </Center>
            </FormControl>
            <FormControl id="userName" isRequired>
              <FormLabel>User name</FormLabel>
              <Input
                placeholder="UserName"
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                _placeholder={{ color: "gray.500" }}
                type="password"
              />
            </FormControl>
            <FormControl id="number" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Edit Bio🌈</FormLabel>
              <Textarea placeholder="Bio" />
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
              >
                Cancel
              </Button>
              <Button
                bg={"yellow.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "yellow.500",
                }}
              >
                Apply Changes
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
