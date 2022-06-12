import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const SuccessMessage = () => {
  return (
    <ModalBody>
      <Image src='/success.gif' alt='Success' />
      <Flex justifyContent='center' alignItems='center'></Flex>
    </ModalBody>
  )
}

const Orchestrator = ({ title, eventList, isOpen, onClose }) => {
  // onOpen is passed outside as a button even
  const [eventNo, setEventNo] = useState(-1)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    let timer
    const randomTimeWithin5sec = Math.round(Math.random() * 5000)
    if (eventNo < eventList.length) {
      timer = setTimeout(() => {
        setEventNo((prev) => prev + 1)
      }, randomTimeWithin5sec)
    } else {
      setEventNo(-1)
      setSuccess(true)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [isOpen, eventNo])

  useEffect(() => {
    let successTimer
    if (success) {
      successTimer = setTimeout(() => {
        onClose()
      }, 3000)
    }

    return () => {
      clearTimeout(successTimer)
    }
  }, [success])

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {!success && (
          <ModalBody pb={6}>
            <Flex
              my={10}
              justifyContent='center'
              direction='column'
              alignItems='center'
            >
              <Spinner
                my={10}
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
              <Text my={10} align='center'>
                {eventList[eventNo]}
              </Text>
            </Flex>
          </ModalBody>
        )}
        {success && <SuccessMessage />}
      </ModalContent>
    </Modal>
  )
}

export default Orchestrator
