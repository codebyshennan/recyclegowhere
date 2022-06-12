import React from "react";
import Layout from "../../../components/Layout";
import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiPencilAlt } from "react-icons/hi";
import DataTable from "../../../components/leaderboard/DataTable";
import { Banner } from "../../../components/leaderboard/Banner";
import { CardContent } from "../../../components/rewards/CardContent";
import { CardWithAvatar } from "../../../components/rewards/CardWithAvatar";
import { UserInfo } from "../../../components/rewards/UserInfo";

const Leaderboard = () => {
  return (
    <Box mt={10}>
      <CardWithAvatar
        maxW="xl"
        avatarProps={{
          name: "Uncle Semakau",
        }}
        action={
          <Button size="sm" leftIcon={<HiPencilAlt />}>
            Edit
          </Button>
        }
      >
        <CardContent>
          <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
            Uncle Semakau
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            Recycling Enthusiast
          </Text>
          <UserInfo
            location="Punggol"
            website="27 kg^3 recycled"
            memberSince="Joined Sept. 2021"
          />
        </CardContent>
      </CardWithAvatar>
      <DataTable />
    </Box>
  );
};

Leaderboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Leaderboard;
