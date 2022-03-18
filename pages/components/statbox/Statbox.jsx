import { Box, VStack, Text } from "@chakra-ui/react";
// const statStyles = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   flex: "1 1 auto" /* Positive flex-shrink */,
//   padding: "12px",
//   color: "rgb(236,239,241)",
//   // border: '1px solid brown'
// };

// const statStylesHeading = {
//   fontWeight: "bold",
//   marginBottom: "7px",
// };

export const Statbox = ({ Average, Stat }) => {
  return (
    <Box p={1}>
      <Text fontWeight={"bold"} mb={2}>
        {Stat}
      </Text>

      <Text fontWeight={"bold"}>{Average}</Text>
    </Box>
  );
};