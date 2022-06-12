import {
  Avatar,
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { IoArrowDown } from 'react-icons/io5'
import { items } from './_data'

const MemberTable = (props) => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>
          <HStack spacing='3'>
            <HStack spacing='1'>
              <Text>Item</Text>
              <Icon as={IoArrowDown} color='muted' boxSize='4' />
            </HStack>
          </HStack>
        </Th>
        <Th>CO2 offset/ unit</Th>
        <Th>Collection Group (units)</Th>
        <Th>CO2 offset/ group</Th>
        <Th>Equiv. Pts</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {items.map((Item) => (
        <Tr key={Item.id}>
          <Td>
            <HStack spacing='3'>
              <Text fontWeight='medium'>{Item.name}</Text>
            </HStack>
          </Td>
          <Td textAlign='center'>
            <Text fontWeight='medium'>{Item.unitOffset}</Text>
          </Td>
          <Td textAlign='center'>
            <Text color='muted'>{Item.groupUnits}</Text>
          </Td>
          <Td textAlign='center'>{Item.groupOffsets}</Td>
          <Td textAlign='center'>
            <Badge size='sm' colorScheme={'green'}>
              <Text color='muted'>{Item.points}</Text>
            </Badge>
          </Td>
          <Td>
            <HStack spacing='1'>
              <IconButton
                icon={<FiTrash2 fontSize='1.25rem' />}
                variant='ghost'
                aria-label='Delete Item'
              />
              <IconButton
                icon={<FiEdit2 fontSize='1.25rem' />}
                variant='ghost'
                aria-label='Edit Item'
              />
            </HStack>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

export default MemberTable
