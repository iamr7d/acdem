import React, { useState } from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Icon,
  useColorModeValue,
  Flex,
  Divider,
  Tag,
  Link,
  AvatarGroup,
  Avatar,
} from '@chakra-ui/react';
import { FaGoogle, FaGithub, FaRobot, FaBook, FaUsers, FaCloudUploadAlt } from 'react-icons/fa';
import { HiMail, HiLockClosed, HiUser } from 'react-icons/hi';

const Signup = () => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Flex minH="100vh" w="full">
      {/* Left Side - Form */}
      <Box
        w={{ base: 'full', lg: '45%' }}
        p={{ base: 8, md: 12 }}
        borderRightWidth={{ base: 0, lg: '1px' }}>
        <VStack spacing={8} align="flex-start" w="full">
          <VStack spacing={3} align="flex-start" w="full">
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              letterSpacing="tight">
              Join AI Research Hub
            </Heading>
            <Text color="gray.500" fontSize="lg">
              Start your journey in AI-powered research networking
            </Text>
          </VStack>

          <VStack spacing={5} w="full">
            <FormControl>
              <FormLabel color="gray.700">Full Name</FormLabel>
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
                <Icon as={HiUser} color="blue.400" boxSize={5} />
                <Input
                  type="text"
                  placeholder="John Doe"
                  border="none"
                  _focus={{ boxShadow: 'none' }}
                  pl={3}
                  fontSize="md"
                />
              </Flex>
            </FormControl>

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
                  placeholder="Create a strong password"
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
              Create Account
            </Button>

            <HStack w="full" justify="center" px={1}>
              <Text color="gray.600" fontSize="sm">
                Already have an account?
              </Text>
              <Link color="blue.500" fontSize="sm">
                Sign in
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
                or sign up with
              </Text>
              <Divider borderColor="gray.200" />
            </HStack>

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

      {/* Right Side - Info & Resume Upload */}
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
              Accelerate Your Research
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Upload your resume to get personalized research recommendations
            </Text>

            {/* Tailwind Resume Upload Section */}
            <Box
              w="full"
              mt={6}
              className={`
                relative
                p-8
                border-2
                border-dashed
                rounded-xl
                transition-all
                ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                ${file ? 'bg-green-50 border-green-500' : ''}
              `}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}>
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
              />
              <VStack spacing={3} align="center">
                <Icon
                  as={FaCloudUploadAlt}
                  className={`
                    text-5xl
                    ${dragActive ? 'text-blue-500' : 'text-gray-400'}
                    ${file ? 'text-green-500' : ''}
                  `}
                />
                <Text
                  className={`
                    text-lg font-medium
                    ${dragActive ? 'text-blue-600' : 'text-gray-600'}
                    ${file ? 'text-green-600' : ''}
                  `}>
                  {file
                    ? `Selected: ${file.name}`
                    : 'Drag & drop your resume or click to browse'}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Supported formats: PDF, DOC, DOCX
                </Text>
              </VStack>
            </Box>
          </VStack>

          <Box w="full" mt="auto">
            <Text mb={6} color="gray.600" fontSize="lg">
              Join researchers from leading institutions:
            </Text>
            <AvatarGroup size="lg" max={5} spacing={-4}>
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
  );
};

export default Signup;
