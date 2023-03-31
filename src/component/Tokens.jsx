import React from "react";
import {
  Box,
  // Button,
  Card,
  Grid,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Tokens = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width={"90%"}>
      {/* <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button> */}
      <Grid templateColumns={"repeat(3, 1fr)"} gap={"1rem"}>
        {data.map((data) => (
          <Card
            // paddingBlock={2}

            padding={12}
            shadow={"sm"}
            background={"#4B4B4B"}
            onClick={onOpen}
            cursor={"pointer"}
          >
            <Text color={"white"}>{data.symbol}</Text>
            <Modal
              closeOnOverlayClick={false}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{data.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <p>{data._id}</p>
                  {/* <p>{data.name}</p> */}
                  {/* <p>{data.addresses[0].networkId}</p> */}
                </ModalBody>
              </ModalContent>
            </Modal>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Tokens;
