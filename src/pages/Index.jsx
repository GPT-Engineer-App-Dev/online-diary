import { Container, Text, VStack, Heading, Box, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Personal Website
          </Heading>
          <Text fontSize="lg">
            Hi, I'm [Your Name], a [Your Profession]. This is my personal space on the web where you can learn more about me and my work.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Me
          </Heading>
          <Text>
            [Placeholder for about me section]
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Projects
          </Heading>
          <Text>
            [Placeholder for projects section]
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Contact
          </Heading>
          <Text>
            [Placeholder for contact information]
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;