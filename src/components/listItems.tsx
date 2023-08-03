import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import * as React from "react";

export const mainListItems = (
  <React.Fragment>
    <Link
      prefetch
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
