import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Flex,
  Icon,
  useColorModeValue,
  HStack,
  VStack,
  Grid,
  GridItem,
  chakra,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBrain, FaRobot, FaNetworkWired, FaLightbulb, FaArrowRight } from 'react-icons/fa';

const glowKeyframes = keyframes`
  0% { box-shadow: 0 0 20px rgba(66, 153, 225, 0.3); }
  50% { box-shadow: 0 0 40px rgba(66, 153, 225, 0.5); }
  100% { box-shadow: 0 0 20px rgba(66, 153, 225, 0.3); }
`;

const floatKeyframes = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseKeyframes = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Feature = ({ icon, title, color }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const glow = `${glowKeyframes} infinite 3s ease-in-out`;
  const float = `${floatKeyframes} infinite 3s ease-in-out`;

  return (
    <VStack
      spacing={4}
      animation={float}
      transition="all 0.3s ease"
      p={6}
      bg={bgColor}
      rounded="xl"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      backdropFilter="blur(10px)"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
      }}>
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        rounded="full"
        bg={useColorModeValue(`${color}.50`, `${color}.900`)}
        color={color}
        animation={glow}>
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Text
        fontSize="lg"
        fontWeight="semibold"
        color={useColorModeValue('gray.700', 'white')}>
        {title}
      </Text>
    </VStack>
  );
};

const Stat = ({ number, label }) => {
  const pulse = `${pulseKeyframes} infinite 4s ease-in-out`;
  return (
    <VStack
      spacing={1}
      align="center"
      p={4}
      rounded="lg"
      bg={useColorModeValue('white', 'gray.800')}
      backdropFilter="blur(10px)"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      animation={pulse}>
      <Text
        fontSize="4xl"
        fontWeight="bold"
        bgGradient="linear(to-r, blue.400, purple.400)"
        bgClip="text">
        {number}
      </Text>
      <Text
        fontSize="sm"
        fontWeight="medium"
        color={useColorModeValue('gray.500', 'gray.400')}>
        {label}
      </Text>
    </VStack>
  );
};

export default function LandingPage() {
  const bgGradient = useColorModeValue(
    'radial-gradient(circle at 50% 50%, rgba(235, 248, 255, 0.97) 0%, rgba(245, 245, 245, 0.98) 100%)',
    'radial-gradient(circle at 50% 50%, rgba(26, 32, 44, 0.97) 0%, rgba(23, 25, 35, 0.98) 100%)'
  );

  return (
    <Box
      h="100vh"
      overflow="hidden"
      bgGradient={bgGradient}
      position="relative">
      {/* Animated Background Elements */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        overflow="hidden"
        pointerEvents="none">
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            w={`${Math.random() * 4 + 1}px`}
            h={`${Math.random() * 4 + 1}px`}
            bgGradient="linear(to-r, blue.400, purple.400)"
            borderRadius="full"
            opacity={0.3}
            animation={`${floatKeyframes} ${Math.random() * 4 + 2}s infinite`}
          />
        ))}
      </Box>

      <Container maxW="8xl" h="full" px={8}>
        <Grid
          h="full"
          templateRows="auto 1fr auto"
          gap={8}
          py={8}>
          
          {/* Header Stats */}
          <GridItem>
            <Flex
              justify="space-between"
              align="center"
              bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.400')}
              backdropFilter="blur(10px)"
              p={4}
              rounded="2xl"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.100', 'gray.700')}>
              <HStack spacing={8}>
                <Stat number="10K+" label="RESEARCHERS" />
                <Stat number="50K+" label="PAPERS" />
                <Stat number="100+" label="UNIVERSITIES" />
              </HStack>
              <Button
                as={RouterLink}
                to="/login"
                size="lg"
                colorScheme="blue"
                rounded="full"
                px={8}
                rightIcon={<Icon as={FaArrowRight} />}
                _hover={{
                  transform: 'translateX(5px)',
                  boxShadow: 'lg',
                }}>
                Join Network
              </Button>
            </Flex>
          </GridItem>

          {/* Main Content */}
          <GridItem>
            <Flex
              h="full"
              direction={{ base: 'column', lg: 'row' }}
              align="center"
              justify="space-between"
              gap={12}>
              
              {/* Left Side - Text */}
              <VStack
                align="flex-start"
                spacing={8}
                maxW="2xl">
                <chakra.h1
                  fontSize={{ base: '4xl', md: '5xl', lg: '7xl' }}
                  fontWeight="bold"
                  lineHeight="shorter">
                  <Text
                    as="span"
                    position="relative"
                    _after={{
                      content: "''",
                      width: 'full',
                      height: '30%',
                      position: 'absolute',
                      bottom: 1,
                      left: 0,
                      bgGradient: "linear(to-r, blue.400, purple.400)",
                      opacity: 0.3,
                      zIndex: -1,
                    }}>
                    AI-Powered
                  </Text>
                  <br />
                  <Text
                    bgGradient="linear(to-r, blue.400, purple.400)"
                    bgClip="text">
                    Research Network
                  </Text>
                  <Text
                    fontSize="3xl"
                    bgGradient="linear(to-r, gray.500, gray.600)"
                    bgClip="text">
                    of Tomorrow
                  </Text>
                </chakra.h1>
                
                <Text
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  color={useColorModeValue('gray.600', 'gray.300')}
                  maxW="xl"
                  lineHeight="tall">
                  Experience the future of academic collaboration powered by cutting-edge AI technology.
                  Connect with researchers worldwide, share insights, and accelerate innovation.
                </Text>

                <HStack spacing={6}>
                  <Button
                    size="lg"
                    colorScheme="blue"
                    rounded="full"
                    px={8}
                    py={7}
                    fontSize="lg"
                    leftIcon={<Icon as={FaRobot} />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}>
                    Start Exploring
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    rounded="full"
                    px={8}
                    py={7}
                    fontSize="lg"
                    leftIcon={<Icon as={FaLightbulb} />}
                    _hover={{
                      transform: 'translateY(-2px)',
                      bg: useColorModeValue('whiteAlpha.800', 'blackAlpha.300'),
                    }}>
                    Watch Demo
                  </Button>
                </HStack>
              </VStack>

              {/* Right Side - Visual */}
              <Box
                w={{ base: 'full', lg: '50%' }}
                h={{ base: '300px', lg: '500px' }}
                position="relative">
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  w="full"
                  h="full"
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="2xl"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgGradient: "linear(to-r, blue.400, purple.400)",
                    opacity: 0.1,
                    zIndex: 1,
                  }}>
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    bgImage="url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1350&q=80')"
                    bgSize="cover"
                    bgPosition="center"
                    filter="saturate(1.2) brightness(0.9)"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'scale(1.05)',
                    }}
                  />
                </Box>
              </Box>
            </Flex>
          </GridItem>

          {/* Footer Features */}
          <GridItem>
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
              gap={6}
              px={{ base: 4, lg: 10 }}>
              <Feature
                icon={FaBrain}
                title="AI Analysis"
                color="blue.400"
              />
              <Feature
                icon={FaNetworkWired}
                title="Smart Networking"
                color="purple.400"
              />
              <Feature
                icon={FaRobot}
                title="Automated Insights"
                color="green.400"
              />
              <Feature
                icon={FaLightbulb}
                title="Innovation Hub"
                color="yellow.400"
              />
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
