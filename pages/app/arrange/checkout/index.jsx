import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { PaymentInformation } from "../../../../components/checkout/PaymentInformation";
import { ShippingInformation } from "../../../../components/checkout/ShippingInformation";
import { ShippingMethod } from "../../../../components/checkout/ShippingMethod";
import { OrderSummary } from "../../../../components/checkout/OrderSummary";
import Layout from "../../../../components/Layout";
import DatePicker from 'react-date-picker';

const Checkout = () => {
  const router = useRouter();
  const encode = router.query;
  console.log(encode.code);
  const [value, setValue] = useState(new Date());
  return (
    <Box
      height="100%"
      bgGradient={useColorModeValue(
        "linear(to-l, gray.50 50%, white 50%)",
        "linear(to-l, gray.700 50%, gray.800 50%)"
      )}
    >
      <Flex maxW="8xl" mx="auto" direction={{ base: "column", md: "row" }}>
        <Box
          flex="1"
          bg={useColorModeValue("white", "gray.800")}
          px={{ base: "4", md: "8", lg: "12", xl: "20" }}
          py={{ base: "6", md: "8", lg: "12", xl: "20" }}
        >
          <Stack spacing={{ base: "16", lg: "20" }}>
            {/* <ShippingInformation />
              <ShippingMethod />
              <PaymentInformation /> */}
            <p>
              {" "}
              <strong>Your location:</strong> <br /> Lat: {encode.code[0]}{" "}
              <br /> Long: {encode.code[1]}
            </p>
            <div>
              <span>
                <strong>Date of collection:</strong>
              </span>
              <DatePicker onChange={setValue} value={value} />
            </div>
          </Stack>
        </Box>
        <Box
          flex="1"
          maxW={{ lg: "md", xl: "40rem" }}
          bg={useBreakpointValue({
            base: useColorModeValue("white", "gray.800"),
            md: "inherit",
          })}
          px={{ base: "4", md: "8", lg: "12", xl: "20" }}
          py={{ base: "6", md: "8", lg: "12", xl: "20" }}
        >
          <OrderSummary />
        </Box>
      </Flex>
    </Box>
  );
};

Checkout.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Checkout;
