import Logo from "@/components/ui/svg/logo";
import Name from "@/components/ui/svg/name";
import { Stack } from "@mui/material";
import React from "react";

const LoadingPage = () => {
  return (
    <Stack
      sx={{ width: "100vw", height: "100vh" }}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
    >
      <Logo />
      <Name />
    </Stack>
  );
};

export default LoadingPage;
