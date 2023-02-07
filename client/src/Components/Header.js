import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
const navigate = useNavigate();
const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
}
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              File Directories
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit">
              {window.localStorage.getItem("token") ? <div onClick={logout}>Logout</div> : <div onClick={() => navigate("/")}>Login</div>}
            </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
