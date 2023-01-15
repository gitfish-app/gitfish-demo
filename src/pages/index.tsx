import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const Index = () => (
  <Box>
    <Flex flexDirection="column">
      <Button as={Link} href="/mobile">
        go to mobile screen
      </Button>
      <Button as={Link} href="pc">
        go to pc screen
      </Button>
    </Flex>
  </Box>
);

export default Index;
