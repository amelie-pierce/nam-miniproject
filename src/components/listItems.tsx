import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export const mainListItems = (
  <React.Fragment>
    <Link
      href="/dashboard"
      style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link
      href="/dashboard/first"
      style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Page 1" />
      </ListItemButton>
    </Link>
    <Link
      href="/dashboard/second"
      style={{ color: "inherit", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Page 2" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
