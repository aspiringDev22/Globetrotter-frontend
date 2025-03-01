import { Button } from "@chakra-ui/react";
import { ActionButtonProps } from "../../app/(home)/components/types/interface";


const ActionButton = ({ label, ...props }: ActionButtonProps) => {
  return (
    <Button
      size="md"
      boxShadow="lg"
      background="#4a525a"
      color="white"
      _hover={{ background: "#4a525a" }}
      _active={{ transform: "scale(0.92)" }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
