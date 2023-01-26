import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import {
  Dispatch,
  FC,
  HTMLInputTypeAttribute,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  LeftElement?: ReactNode;
  RightElement?: ReactNode;
  setValue?: Dispatch<SetStateAction<string>>;
  passwordMode?: boolean;
};

const AccountTextInput: FC<Props> = ({
  type,
  placeholder,
  LeftElement,
  RightElement,
  setValue,
  passwordMode,
}) => {
  const [passwordToggle, setPasswordToggle] = useState<boolean>(false);

  return (
    <InputGroup>
      {LeftElement ? (
        <InputLeftElement pointerEvents={'none'} children={LeftElement} />
      ) : null}
      <Input
        type={passwordMode ? (passwordToggle ? 'text' : 'password') : type}
        placeholder={placeholder}
        onChange={(e) => setValue(() => e.target.value)}
      />
      {RightElement ? (
        <InputRightElement
          pointerEvents={'none'}
          children={RightElement}
          onClick={() => {
            passwordMode === true ? setPasswordToggle((v) => !v) : null;
          }}
        />
      ) : null}
    </InputGroup>
  );
};

export default AccountTextInput;
