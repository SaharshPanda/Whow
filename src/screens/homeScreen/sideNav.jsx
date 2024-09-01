import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import DescriptionIcon from "@mui/icons-material/Description";
import HailIcon from "@mui/icons-material/Hail";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ViewListIcon from '@mui/icons-material/ViewList';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Groups3Icon from '@mui/icons-material/Groups3';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { useNavigate } from "react-router-dom";

const SideNav = ({ value, open }) => {
  const icons = {
    home: <HomeIcon />,
    browseCourse: <PublicIcon />,
    notes: <DescriptionIcon />,
    mentor: <HailIcon />,
    achievements: <MilitaryTechIcon />,
    createCourse : <AddCircleOutlineIcon/>,
    myCreatedCourse : <ViewListIcon/> ,
    createMentor :<GroupAddIcon/> ,
    studentManagement : <Groups3Icon/>,
    payment : <PointOfSaleIcon/> ,
analysis : <EqualizerIcon/> ,
  };

  const title = {
    home: "Home",
    browseCourse: "Catalog",
    notes: "Notes",
    mentor: "Mentor",
    achievements: "Achievements",
    createCourse : "Create",
    myCreatedCourse : "Created Course",
    createMentor : "Be a Mentor",
    studentManagement :"Student Management" ,
    payment : "Payment" ,
analysis : "Analysis" ,
  };

  const routes = {
    home: "/home",
    browseCourse: "/home/catalog",
    notes: "/home/notes",
    mentor: "/home/mentor",
    achievements: "/home/achievements",
    createCourse : "/home/createCourse",
    myCreatedCourse : "/home/myCreatedCourse",
    createMentor : "/home/createMentor",
    studentManagement : "/home/studentManagement",
    payment : "/home/payment",
analysis : "/home/analysis",
  };

  const navigate = useNavigate()
  return (
    <ListItem key={value} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={()=>navigate(routes[value])}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icons[value] ?? <AutoAwesomeMosaicIcon/>}
        </ListItemIcon>
        <ListItemText primary={title[value] ?? value} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default SideNav;
