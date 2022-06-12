import {
    Avatar,
    AvatarBadge,
    Box,
    Center,
    HStack,
    Stack,
    StackDivider,
    Text,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { members } from './data'
  
  export const StatMembers = () => (
      <Box bg="bg-surface" py="4">
        <Stack divider={<StackDivider />} spacing="4" >
          {members.map((member) => (
            <Stack key={member.id} fontSize="sm" px="4" spacing="4"  w={"3xl"}>
              <Stack direction="row" justify="space-between" spacing="4">
                <HStack spacing="3">
                  <Avatar src={member.avatarUrl} boxSize="10">
                    <AvatarBadge boxSize="4" bg={member.status === 'active' ? 'success' : 'subtle'} />
                  </Avatar>
                  <Box>
                    <Text fontWeight="medium" color="emphasized">
                      {member.name}
                    </Text>
                    <Text color="muted">{member.handle}</Text>
                  </Box>
                </HStack>
                <Text color="muted">{member.offset}</Text>
                <Text color="muted">{member.lastSeen}</Text>
              </Stack>
              <Text
                color="muted"
                sx={{
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '2',
                  overflow: 'hidden',
                  display: '-webkit-box',
                }}
              >
                {member.description}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
  )