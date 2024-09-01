import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PageNotFound from '../pageNotFoundScreen/pageNotFound';
import { Route, Routes } from 'react-router-dom';
import SideNav from './sideNav';
import HomeComponent from './homeComponent';
import Catalog from '../catalogScreen/catalog';
import Notes from '../notesScreen/notes';
import Achievement from '../achievmentScreen/achievement';
import Mentor from '../mentorScreen/mentor';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import CreateCourse from '../createScreen/createCourse';
import Analysis from '../analysis/Analysis';
import Payment from '../payment/Payment';
import StudentManagement from '../studentManagement/StudentManagement';
import MyCreatedCourse from '../myCreatedCourse/MyCreatedCourse';
import CreateMentor from '../createMentor/CreateMentor';
import CreateCourseComponent from '../createScreen/createCourseComponent';

const Home = () => {

  const userReducerState = useSelector((state)=> state?.userReducer)
  const moduleData = userReducerState?.userAuthorisation?.module

  const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const theme = useTheme();
const [open, setOpen] = React.useState(false);

const handleDrawerOpen = () => {
  setOpen(true);
};

const handleDrawerClose = () => {
  setOpen(false);
};

  return (
    <Stack  direction={"column"} sx={{
      backgroundColor: '#42f5ef',
      p: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', // Align items vertically center
      m: 0, // Ensure no margin
      width: "100%",
      height : '100vh',
      // alignContent : 'flex-start',
      
    }} justifyContent={"flex-start"} alignItems={"flex=start"}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            StudySphere
          </Typography>
        </Toolbar>
      </AppBar>

<Stack direction={"row"} alignItems={"flex=start"} spacing={0} sx={{width : '100%', height :"100vh"}}>


      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {moduleData?.map((value1) => (
            <SideNav value={value1} open={open}/>
          ))}
        </List>
        {/* <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p:0, m : 0,width : "100%"}}>
        <DrawerHeader />

        <Routes>
          <Route path="*" element={<PageNotFound/>} />
          <Route index element={<HomeComponent/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/mentor" element={<Mentor/>} />
          <Route path="/achievements" element={<Achievement/>} />
          <Route path = "/createCourse" element = {<CreateCourse/>} />

          <Route path = "/myCreatedCourse" element = {<MyCreatedCourse/>} />
          <Route path = "/createMentor" element = {<CreateMentor/>} />
          <Route path = "/studentManagement" element = {<StudentManagement/>} />
          <Route path = "/payment" element = {<Payment/>} />
          <Route path = "/analysis" element = {<Analysis/>} />
          <Route path = "/createCourse/createCourseComponent" element = {<CreateCourseComponent/>} />


        </Routes>

    
        
      </Box>
      </Stack>
    </Stack>
  )
}

export default Home