import {
  Box,
  Button,
  Center,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import githubColors from '../../../constant/githubColors';
import { Repository } from '../../../mockdata/repositories';
import LanguageRateBar from '../../mobile/RepositorySelectBottomSheet/LanguageRateBar';
import FishDetailIconButton from './FishDetailIconButton';

type Props = {
  Repository: Repository;
};

const FishDetailModal: FC<Props> = ({ Repository }) => {
  const { onClose } = useDisclosure();
  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="650px" bgColor={'#0E2144'} borderRadius={'30px'}>
        <ModalBody p={'50px 92px 20px'}>
          <Box
            h={'167px'}
            mb={'32px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Image
              src={'/assets/demo-mobile_moving_fish_n0.png'}
              height={'100%'}
            />
          </Box>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={'24px'}
          >
            <Box>
              <Text fontSize={'18px'} color={'#D3EDFB'}>
                Repository Name
              </Text>
              <Text fontSize={'25px'} fontWeight={'bold'} color={'#D3EDFB'}>
                {Repository.name}
              </Text>
            </Box>
            <Box>
              <Text fontSize={'18px'} color={'#D3EDFB'}>
                Commit
              </Text>
              <Text fontSize={'25px'} fontWeight={'bold'} color={'#D3EDFB'}>
                {Repository.commitCount}
              </Text>
            </Box>
            <FishDetailIconButton
              size={'square'}
              icon={'/assets/fish-detail-favorite-icon.svg'}
              bgColor={'#152D5B'}
            />
          </Box>
          <Box mb={'24px'}>
            <Text mb={'16px'} fontSize={'18px'} color={'#D3EDFB'}>
              Languages
            </Text>
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              flexWrap={'wrap'}
              w={'100%'}
              gap={'16px'}
            >
              {Repository.languages.map((language) => (
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  w={'30%'}
                  gap={'8px'}
                >
                  <Box
                    as={'i'}
                    className={`devicon-${language.name.toLowerCase()}-plain colored`}
                    fontSize={'28px'}
                  />
                  <LanguageRateBar
                    languageColor={githubColors[language.name].color}
                    rate={language.rate}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box mb={'36px'}>
            <Text fontSize={'18px'} color={'#D3EDFB'} mb={'8px'}>
              User Name
            </Text>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#D3EDFB'}>
              Murakamiyasan
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'space-between'} mb={'26px'}>
            <FishDetailIconButton
              size={'wide'}
              text={'Visit'}
              icon={'/assets/fish-detail-icon.svg'}
              bgColor={'#006EFB'}
            />
            <FishDetailIconButton
              size={'wide'}
              text={'Code'}
              icon={'/assets/fish-detail-link-icon.svg'}
              bgColor={'#006EFB'}
              href={'https://github.com/gitfish-app/gitfish-demo/tree/main'}
            />
          </Box>
          <Center>
            <Button onClick={onClose}>close</Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FishDetailModal;
