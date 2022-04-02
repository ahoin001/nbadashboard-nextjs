import { useState } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

import Head from "next/head";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

import { PlayerSearch } from "../components/Playersearch/PlayerSearch";

export default function Home() {
  const [nbaPlayer, setNbaPlayer] = useState({
    playerInfo: {},
    lastTenGamesInfo: {},
    selectedOption: { value: "-", label: "Type Player Name Here" },
  });

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#1a202c");

  return (
    <>
      <Head>
        <title>NBA Stat Tracker</title>
        <meta name="description" content="Deep player stats with visual data" />
      </Head>
      <Box p={6} mb={"10"} bg={bg} width="full">
        <IconButton pos="fixed"  zIndex={2} mt={340} aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton>
        <Flex
          // width={"100%"}
          direction={"column"}
          // TODO Look up why this resolves probelm with contenet smushing when resizing to smaller screen
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
        >
          <PlayerSearch nbaPlayer={nbaPlayer} setNbaPlayer={setNbaPlayer} />
        </Flex>
      </Box>
    </>
  );
}
