import React from 'react'
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
const navigate = useNavigate()
  return (
    <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      "& > :not(style)": {
        m: 1,
        width: "100%",
        height: 100,
      },
    }}
  >
    <Grid container spacing={1}>
      <Grid item xs={3}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          category
        </Typography>
        <Typography variant="h5" component="div">
         Course
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          You can create courses using templates and can publish it.
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' onClick={()=>navigate("/home/createCourse/createCourseComponent")}>Create</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          category
        </Typography>
        <Typography variant="h5" component="div">
         Class
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          You can create classes, invite students and teach.
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Create</Button>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={3}>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          category
        </Typography>
        <Typography variant="h5" component="div">
         Discussion
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          You can create and save discussion.This helps to record and maintain the flow.
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Create</Button>
      </CardActions>
    </Card>
      </Grid>
    </Grid>
  </Box>
  )
}

export default CreateCourse