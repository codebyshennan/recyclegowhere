import React, { useState } from "react";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useMapEvents } from "react-leaflet";

const UtilityBar = ({ encode, disable, setDisable, loading, setLoading, items }) => {
  const [codey, setCodey] = useState("");
  const [encoded, setEncoded] = useState("");
  
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng);
      setLoading(false);
      setDisable(false);
    },
  });

  const onUseMylocation = () => {
    setLoading(true);
    console.log(items[0]);
    map.locate();
    
    console.log(map.locate()._lastCenter);
    const pin = map.locate()._lastCenter;
    let array = [pin.lat, pin.lng];
    let array2 = [array, items];
    setCodey(array);
    let encodethis = btoa(JSON.stringify(items))
    console.log(encodethis);
    setEncoded(encodethis);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <Button
        onClick={onUseMylocation}
        marginRight={2}
        colorScheme="teal"
        isLoading={loading}
        loadingText="Submitting"
      >
        <SearchIcon />{" "}
        <span style={{ fontSize: "0.9rem" }}>Use My Location! </span>
      </Button>
      <Link
        href={{
          pathname: "/app/arrange/checkout",
          query: {
            code: codey,
            item: encoded
          }, // the data
        }}
      >
        <Button
          disabled={disable}
          rightIcon={<ArrowForwardIcon />}
          onClick={() => setLoading(false)}
          colorScheme="teal"
        >
          <span style={{ fontSize: "0.9rem" }}>I&apos;m done!</span>
        </Button>
      </Link>
    </div>
  );
};

export default UtilityBar;
