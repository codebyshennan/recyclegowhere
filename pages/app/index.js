import { AddIcon, CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Center, Flex } from "@chakra-ui/react";
// STEPPER IMPORTS
import { Step, Steps } from "chakra-ui-steps";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "../../components/Head";
import {
	AddItem,
	Location,
	TakeAction,
	VerifyItem,
} from "../../components/recycleAndReuseComponents/Steps";
// import GeneralWaste from "../jsonfiles/General-Waste.json";
// import Item from "../jsonfiles/Item.json";

const GeolocationNoSSR = dynamic(
  () =>
    import(
      "../components/recycleAndReuseComponents/Steps/StepThree/Geolocation"
    ),
  {
    loading: () => <p>Map is loading</p>,
    ssr: false,
  }
);

const CustomerApp = () => {
  return <div>CustomerApp</div>;
};

CustomerApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CustomerApp;
