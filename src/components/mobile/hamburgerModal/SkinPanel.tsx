import {
  AspectRatio,
  Box,
  Button,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FC } from 'react';
import AbsoluteBox from '../../reuse/AbsoluteBox';
import AbsoluteButton from '../../reuse/AbsoluteButton';

const SkinPanel: FC = () => {
  return (
    <>
      <VStack pos={'relative'}>
        <Box
          as={'img'}
          src={'/assets/demo-collection_preview.png'}
          w={'228px'}
          h={'150px'}
          mt={'40px'}
        />
        <AbsoluteBox
          top={'24px'}
          left={'20px'}
          w={'fit-content'}
          h={'30px'}
          pl={'9px'}
          pr={'25px'}
          textTransform={'uppercase'}
          fontWeight={'semibold'}
          borderRadius={'30px'}
          bgColor={'#006EFB'}
          bgImage={'url(/assets/system-tag_arrow.png)'}
          bgRepeat={'no-repeat'}
          bgPos={'right 9px center'}
          bgSize={'9px 13px'}
        >
          GitFish
        </AbsoluteBox>
      </VStack>
      <AbsoluteBox
        left={'0'}
        bottom={'0'}
        h={'420px'}
        w={'100%'}
        bg={'#0E2144'}
        borderTopRadius={'12px'}
        py={'24px'}
        px={'20px'}
      >
        <HStack>
          <Text fontSize={'22px'} fontWeight={'bold'}>
            Skin
          </Text>
          <Text
            h={'fit-content'}
            borderRadius={'18px'}
            border={'1px solid #D3EDFB'}
            letterSpacing={'-0.2px'}
            lineHeight={'18px'}
            fontSize={'12px'}
            fontWeight={'medium'}
            px={'8px'}
          >
            12/33
          </Text>
        </HStack>
        <Text fontSize={'14px'} mb={'16px'}>
          目標を達成してスキンを集めよう！
        </Text>
        <SimpleGrid spacing={'12px'} columns={4}>
          {[...Array(12).fill(0)].map((n, index) => (
            <AspectRatio ratio={1} key={index + n}>
              <Button
                p={'8px'}
                bg={'transparent'}
                _active={{ bg: 'transparent' }}
                _focus={{ bg: 'transparent' }}
                _hover={{ bg: 'transparent' }}
                border={`1px solid ${index === 5 ? '#006EFB' : '#193569'}`}
                borderRadius={'12px'}
              >
                <Box
                  as={'img'}
                  src={`/assets/demo-skin_n${index}.png`}
                  w={'100%'}
                />
              </Button>
            </AspectRatio>
          ))}
        </SimpleGrid>

        <AbsoluteButton
          w={'40px'}
          h={'40px'}
          top={'18px'}
          right={'20px'}
          bgImage={'url(/assets/system-button_skin_apply.png)'}
          bgSize={'cover'}
          bgRepeat={'no-repeat'}
        />
      </AbsoluteBox>
    </>
  );
};

export default SkinPanel;
