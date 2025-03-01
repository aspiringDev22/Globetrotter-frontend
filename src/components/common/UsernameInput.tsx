import { Input } from "@chakra-ui/react";
import { UsernameInputProps } from "../../app/(home)/components/types/interface";


const UsernameInput = ({ username, setUsername, ...props }: UsernameInputProps) => {
  return (
    <Input
      size="lg"
      border="4px solid #d3d3d3"
      borderStyle="dashed"
      _hover={{ borderColor: "#4a525a" }}
      _focus={{ borderColor: "#4a525a", outline: "none" }}
      focusBorderColor="transparent"
      width="60%"
      placeholder="Enter Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      {...props}
    />
  );
};

export default UsernameInput;