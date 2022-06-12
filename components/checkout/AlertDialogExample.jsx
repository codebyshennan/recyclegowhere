import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react';
  import React from 'react';

export const AlertDialogExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Click for confirmation
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delivery Scheduled
            </AlertDialogHeader>

            <AlertDialogBody>
              Your delivery has been scheduled via Grab Express. We have notified your driver over our API to collect your items at your location, on the specified date.
              <br /> <br />
              Click done to revisit your choices.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="green" onClick={onClose} ml={3}>
                Finish
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
