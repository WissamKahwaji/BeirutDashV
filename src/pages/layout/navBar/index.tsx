import { Box, IconButton, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { AppBar } from "../style";
import TProps from "./type";
import Logo from "@/components/ui/svg/logo";
import Name from "@/components/ui/svg/name";

const NavBar = ({ open, handleDrawerOpen }: TProps) => {
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{ background: (theme) => theme.palette.primary.main }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, md: 3 },
            alignItems: "center",
            width: "100%",
          }}
        >
          {!open && (
            <Stack direction={"row"}>
              <Logo sx={{ width: 50, height: 50 }} />
              <Name sx={{ width: 50, height: 50 }} />
            </Stack>
          )}
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
