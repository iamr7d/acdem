import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Avatar,
  AvatarGroup,
  Divider,
  UnorderedList,
  ListItem,
  Tag,
  Link,
  Stack,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaGoogle, FaGithub, FaRobot, FaBook, FaChartLine, FaUsers } from 'react-icons/fa';
import { HiMail, HiLockClosed } from 'react-icons/hi';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.2); }
  50% { box-shadow: 0 0 20px 10px rgba(66, 153, 225, 0.2); }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.2); }
`;

export default function Login() {
  return (
    <Box
      h="100vh"
      bg={useColorModeValue(
        'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        'gray.900'
      )}
      overflow="hidden"
      position="relative">
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          w={`${Math.random() * 3 + 1}px`}
          h={`${Math.random() * 3 + 1}px`}
          bg="blue.400"
          borderRadius="full"
          animation={`${float} ${Math.random() * 3 + 2}s infinite`}
          opacity={0.3}
        />
      ))}

      <Container 
        h="100vh" 
        maxW="7xl" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        p={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          bg={useColorModeValue('whiteAlpha.900', 'gray.800')}
          rounded="3xl"
          overflow="hidden"
          boxShadow="2xl"
          w="full"
          maxH={{ base: "90vh", lg: "85vh" }}
          position="relative"
          backdropFilter="blur(20px)"
          borderWidth="1px"
          borderColor={useColorModeValue('gray.100', 'gray.700')}>
          {/* Left Side - Login Form */}
          <Box
            w={{ base: 'full', lg: '45%' }}
            p={{ base: 8, md: 12 }}
            position="relative"
            zIndex={1}
            bg={useColorModeValue('white', 'gray.800')}
            borderRightWidth={{ base: 0, lg: "1px" }}
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            overflowY="auto"
            css={{
              '&::-webkit-scrollbar': { width: '4px' },
              '&::-webkit-scrollbar-track': { width: '6px' },
              '&::-webkit-scrollbar-thumb': {
                background: useColorModeValue('blue.500', 'gray.700'),
                borderRadius: '24px',
              },
            }}>
            <VStack spacing={8} align="flex-start" w="full">
              <VStack spacing={3} align="flex-start" w="full">
                <Heading
                  fontSize={{ base: '3xl', md: '4xl' }}
                  fontWeight="bold"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                  letterSpacing="tight">
                  Welcome to AI Research Hub
                </Heading>
                <Text 
                  color="gray.500" 
                  fontSize="lg">
                  Your AI-powered gateway to research excellence
                </Text>
              </VStack>

              <VStack spacing={5} w="full">
                <FormControl>
                  <FormLabel color="gray.700">Email</FormLabel>
                  <Flex
                    align="center"
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    rounded="xl"
                    px={4}
                    h={12}
                    borderWidth="2px"
                    borderColor="transparent"
                    transition="all 0.3s"
                    _focusWithin={{
                      borderColor: 'blue.400',
                      bg: 'white',
                      shadow: 'md',
                    }}>
                    <Icon as={HiMail} color="blue.400" boxSize={5} />
                    <Input
                      type="email"
                      placeholder="researcher@university.edu"
                      border="none"
                      _focus={{ boxShadow: 'none' }}
                      pl={3}
                      fontSize="md"
                    />
                  </Flex>
                </FormControl>

                <FormControl>
                  <FormLabel color="gray.700">Password</FormLabel>
                  <Flex
                    align="center"
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    rounded="xl"
                    px={4}
                    h={12}
                    borderWidth="2px"
                    borderColor="transparent"
                    transition="all 0.3s"
                    _focusWithin={{
                      borderColor: 'blue.400',
                      bg: 'white',
                      shadow: 'md',
                    }}>
                    <Icon as={HiLockClosed} color="blue.400" boxSize={5} />
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      border="none"
                      _focus={{ boxShadow: 'none' }}
                      pl={3}
                      fontSize="md"
                    />
                  </Flex>
                </FormControl>

                <Button
                  w="full"
                  h={12}
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  color="white"
                  fontSize="md"
                  fontWeight="semibold"
                  rounded="xl"
                  _hover={{
                    bgGradient: 'linear(to-r, blue.500, purple.600)',
                    transform: 'translateY(-1px)',
                    shadow: 'md',
                  }}>
                  Connect with AI
                </Button>

                <HStack w="full" justify="space-between" px={1}>
                  <Link color="blue.500" fontSize="sm">
                    Forgot password?
                  </Link>
                  <Link color="blue.500" fontSize="sm">
                    Create account
                  </Link>
                </HStack>
              </VStack>

              <VStack w="full" spacing={4}>
                <HStack w="full" justify="center">
                  <Divider borderColor="gray.200" />
                  <Text
                    px={4}
                    color="gray.500"
                    fontSize="sm"
                    whiteSpace="nowrap">
                    or authenticate with
                  </Text>
                  <Divider borderColor="gray.200" />
                </HStack>

                <Button
                  w="full"
                  h={12}
                  variant="outline"
                  colorScheme="blue"
                  fontSize="md"
                  rounded="xl"
                  borderWidth="1px"
                  _hover={{
                    bg: 'gray.50',
                  }}>
                  Sign up for free
                </Button>

                <HStack w="full" spacing={4}>
                  <Button
                    w="full"
                    h={12}
                    variant="outline"
                    leftIcon={<FaGoogle />}
                    rounded="xl"
                    fontSize="md"
                    borderWidth="1px"
                    _hover={{
                      bg: 'gray.50',
                    }}>
                    Google
                  </Button>
                  <Button
                    w="full"
                    h={12}
                    variant="outline"
                    leftIcon={<FaGithub />}
                    rounded="xl"
                    fontSize="md"
                    borderWidth="1px"
                    _hover={{
                      bg: 'gray.50',
                    }}>
                    GitHub
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </Box>

          {/* Right Side - Info */}
          <Box
            w={{ base: 'full', lg: '55%' }}
            bg={useColorModeValue('blue.50', 'gray.700')}
            p={{ base: 8, md: 12 }}
            position="relative"
            zIndex={1}>
            <VStack spacing={8} align="flex-start" h="full">
              <VStack spacing={4} align="flex-start">
                <Heading
                  fontSize={{ base: '4xl', md: '5xl' }}
                  lineHeight="shorter"
                  fontWeight="bold"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text">
                  AI-Powered Research Network
                </Heading>
                <Text 
                  fontSize="xl" 
                  color="gray.600">
                  Connect, collaborate, and innovate with research insights
                </Text>

                <Stack direction={{ base: 'column', md: 'row' }} spacing={3} wrap="wrap" pt={4}>
                  <Tag size="lg" colorScheme="blue" rounded="full" px={6} py={2} fontSize="md">
                    <Icon as={FaRobot} mr={2} />
                    Smart Matching
                  </Tag>
                  <Tag size="lg" colorScheme="purple" rounded="full" px={6} py={2} fontSize="md">
                    <Icon as={FaBook} mr={2} />
                    AI Research Feed
                  </Tag>
                  <Tag size="lg" colorScheme="teal" rounded="full" px={6} py={2} fontSize="md">
                    <Icon as={FaUsers} mr={2} />
                    Smart Network
                  </Tag>
                </Stack>
              </VStack>

              <Box w="full">
                <Text 
                  mb={6} 
                  color="gray.600"
                  fontSize="lg">
                  Trusted by researchers from:
                </Text>
                <AvatarGroup
                  size="lg"
                  max={5}
                  spacing={-4}>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                    border="4px solid"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                  <Avatar
                    name="Kent Dodds"
                    src="https://bit.ly/kent-c-dodds"
                    border="4px solid"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                    border="4px solid"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                    border="4px solid"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                    border="4px solid"
                    borderColor={useColorModeValue('white', 'gray.800')}
                  />
                </AvatarGroup>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
