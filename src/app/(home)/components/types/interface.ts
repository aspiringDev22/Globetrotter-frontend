import { ButtonProps, InputProps } from "@chakra-ui/react";

export interface UsernameInputProps extends InputProps {
    username: string;
    setUsername: (value: string) => void;
  }

  export interface ActionButtonProps extends ButtonProps {
    label: string;
  }
