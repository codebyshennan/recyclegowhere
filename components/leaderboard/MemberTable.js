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
import { Rating } from './Rating'
import { members } from './_data'

const MemberTable = (props) => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>
          <HStack spacing='3'>
            <HStack spacing='1'>
              <Text>Name</Text>
              <Icon as={IoArrowDown} color='muted' boxSize='4' />
            </HStack>
          </HStack>
        </Th>
        <Th>Ranking</Th>
        <Th>Region</Th>
        <Th>Location</Th>
        <Th>Carbon Offset (Volume)</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {members.map((member) => (
        <Tr key={member.id}>
          <Td>
            <HStack spacing='3'>
              <Avatar name={member.name} src={member.avatarUrl} boxSize='10' />
              <Box>
                <Text fontWeight='medium'>{member.name}</Text>
                <Text color='muted'>{member.handle}</Text>
              </Box>
            </HStack>
          </Td>
          <Td textAlign="center">
            <Badge
              size='sm'
              colorScheme={'green'}
            >
              {member.status}
            </Badge>
          </Td>
          <Td textAlign="center">
            <Text color='muted'>{member.email}</Text>
          </Td>
          <Td textAlign="center">
            <Text color='muted'>{member.role}</Text>
          </Td>
          <Td textAlign="center">
            <Text color='muted'>{member.rating}</Text>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

export default MemberTable
