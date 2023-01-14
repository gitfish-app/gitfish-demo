import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const Index = () => (
  <Box>
    <Flex flexDirection="column">
      <Button>
        <Link href="mobile">go to mobile screen</Link>
      </Button>
      <Button>
        <Link href="pc">go to pc screen</Link>
      </Button>
    </Flex>
  </Box>
);

export default Index;
