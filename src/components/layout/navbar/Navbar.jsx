import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navBar-logo">
          <img
            src="https://res.cloudinary.com/ddtbb44ju/image/upload/c_crop,w_375/v1727995176/logo_lvighp.png"
            alt="logo"
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            Urbanas Deportivas Todo
          </Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
