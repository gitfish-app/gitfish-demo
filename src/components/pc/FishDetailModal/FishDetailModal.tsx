import {
  Box,
  Button,
  Center,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';

const FishDetailModal: FC = () => {
  const { onClose } = useDisclosure();
  return (
    <Modal isOpen onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent bgColor={'#0E2144'} borderRadius={'30px'}>
        <ModalBody p={'50px 92px 20px'}>
          <Box w={'100%'}>
            <Image />
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} mb={'24px'}>
            <Box>
              <Text fontSize={'18px'} color={'#D3EDFB'}>
                Repository Name
              </Text>
              <Text fontSize={'25px'} fontWeight={'bold'} color={'#D3EDFB'}>
                test
              </Text>
            </Box>
            <Box>
              <Text fontSize={'18px'} color={'#D3EDFB'}>
                Commit
              </Text>
              <Text fontSize={'25px'} fontWeight={'bold'} color={'#D3EDFB'}>
                30
              </Text>
            </Box>
            <Box
              as={'button'}
              bgColor={'#152D5B'}
              borderRadius={'10px'}
              w={'50px'}
              h={'50px'}
            ></Box>
          </Box>
          <Box mb={'24px'}>
            <Text mb={'16px'} fontSize={'18px'} color={'#D3EDFB'}>
              Languages
            </Text>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              flexWrap={'wrap'}
            ></Box>
          </Box>
          <Box>
            <Text fontSize={'18px'} color={'#D3EDFB'} mb={'8px'}>
              User Name
            </Text>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#D3EDFB'}>
              Murakamiyasan
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'}></Box>
          <Center>
            <Button onClick={onClose}>close</Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FishDetailModal;
