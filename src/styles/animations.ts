import { keyframes } from '@chakra-ui/react';

export const floatingAnimation = keyframes`
  0% { transform: translateY(-5px) rotate(4deg); }
  100% { transform: translateY(-15px) rotate(-2deg); }
`;

export const newCharacterAnimation = keyframes`
  0% { transform: rotate(8deg) translateY(0px); }
  100% { transform: rotate(-2deg) translateY(5px); }
`;

export const textAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

export const itemAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  `;
