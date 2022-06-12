import React from "react";
import Layout from "../../../components/Layout";
import DataTable from "../../../components/leaderboard/DataTable";
import {Banner} from "../../../components/leaderboard/Banner";

const Leaderboard = () => {
  return (
    <div>
      <Banner />
      <DataTable />
    </div>
  );
};

Leaderboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Leaderboard;
