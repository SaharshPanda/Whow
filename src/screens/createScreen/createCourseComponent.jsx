import { Box, Card, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const CreateCourseComponent = () => {
  const [topicCount,setTopicCount] = useState(1);
  const [coursePayload, setCoursePayload] = useState([{name : "",description : "",category : "",creator : "",emailId : "", isDraft : "true", isSubmit : "false"}])
  const handleAddRow = () =>{
    setTopicCount(topicCount+1)
  }
  const handleVideoUpload = (event,index) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log("payload",formData)

    if (file) {
        const videoURL = URL.createObjectURL(file);
        setCoursePayload((prev)=>{
          const newState = [...prev]
          newState[index + 1] = {...newState[index +1], videoLink : videoURL}
          return newState
        })

    }
  }

  // console.log("payload",coursePayload)
  return (
    <Box sx={{

      display: "flex",
      flexWrap: "wrap",
      "& > :not(style)": {
        m: 1,
        width: "100%",
        height:"100hv",
      },
    }}>

    <Stack justifyContent={"space-between"}  sx={{width:"100%", height : "100%"}} spacing={3}>
    <Stack spacing={2} justifyContent={"flex-start"}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"          
        >

          <b>Basic Details</b>
      
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography>Course Name</Typography>
            <TextField size="small" placeholder='Enter Course Name' fullWidth value={coursePayload[0].name}
             onChange={(e)=>{setCoursePayload((prev)=>{
              const newState = [...prev]
              newState[0] = {...newState[0], name : e.target.value}
              return newState;
            })}}/>
          </Grid>
          <Grid item xs={4}>
            <Typography>Course Description</Typography>
            <TextField size="small" placeholder='Enter Course Description' fullWidth value={coursePayload[0].description}
            onChange={(e)=>{setCoursePayload((prev)=>{
              const newState = [...prev]
              newState[0] = {...newState[0], description : e.target.value}
              return newState;
            })}}/>
          </Grid>
          <Grid item xs={4}>
            <Typography>Stream Category</Typography>
            <TextField size="small" placeholder='Enter Stream Category' fullWidth value={coursePayload[0].category}
             onChange={(e)=>{setCoursePayload((prev)=>{
              const newState = [...prev]
              newState[0] = {...newState[0], category : e.target.value}
              return newState;
            })}}/>
          </Grid>
          <Grid item xs={4}>
            <Typography>Created by</Typography>
            <TextField size="small" placeholder='Created by' fullWidth value={coursePayload[0].creator}
             onChange={(e)=>{setCoursePayload((prev)=>{
              const newState = [...prev]
              newState[0] = {...newState[0], creator : e.target.value}
              return newState;
            })}}/>
          </Grid>
          <Grid item xs={4}>
            <Typography>Email Id</Typography>
            <TextField size="small" placeholder='Enter email Id' fullWidth  value={coursePayload[0].emailId}
            onChange={(e)=>{setCoursePayload((prev)=>{
              const newState = [...prev]
              newState[0] = {...newState[0], emailId : e.target.value}
              return newState;
            })}}/>
          </Grid>
        </Grid>
        {/* <Stack justifyContent={"flex-end"} alignItems={"flex-end"} sx={{width : "100%", p:2}}>
        <Button variant='contained' size="small" sx={{width : "10%"}}>Save</Button>
        </Stack> */}
        </AccordionDetails>
      </Accordion>
    


      {[...Array(topicCount)].map((val,index)=><Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          
           <Stack direction={"row"} justifyContent={"space-between"} sx={{width : "100%", p : 0, m: 0}}>
<Stack direction={"row"} spacing={1} justifyContent={"flex-start"} sx={{width: "100%"}} alignItems={"center"}>
<Typography >

          <b>Topic {index + 1}</b>
</Typography>
</Stack>
<IconButton size='small'><DeleteIcon fontSize='small' /></IconButton>
</Stack>
        </AccordionSummary>
        <Divider/>
        <AccordionDetails>
          <Stack direction={"row"} justifyContent={"flex-start"} sx={{width : "100%"}}>
          <Stack justifyContent={"flex-start"} alignItems={"flex-start"} sx={{width : "70%"}} spacing={2}>
            <TextField type="text" size="small" placeholder='Enter Topic Name' sx={{width : "75%"}} value={coursePayload[index+1]?.topic ?? ""}
            onChange={(e)=>setCoursePayload((prev)=>{
              const newState = [...prev]
              newState[index + 1] = {...newState[index +1], topic : e.target.value}
              return newState;
            })}/>
            {coursePayload[index + 1]?.videoLink != undefined ? (
                 <div>
                 <video width="600" controls>
                     <source src={coursePayload[index + 1]?.videoLink} type="video/mp4" />
                     Your browser does not support the video tag.
                 </video>
                 {/* <ReactPlayer url={coursePayload[index + 1]?.videoLink} playing={true} /> */}
             </div>
            ) :  <Box sx={{
              border: "2px dashed black",
              width: "80%",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Button
            component="label"
            // role={undefined}
            variant="text"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            size='large'
            >
            Upload Video
            <VisuallyHiddenInput type="file"  onChange={(event)=>{console.log("upload",handleVideoUpload(event,index))}} />
          </Button>
            </Box>
             }
           
          </Stack>
      <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"flex-start"} sx={{width : "30%",}} spacing={2}>

  <Button
      component="label"
      // role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    size='small'
      >
      Upload Notes
      <VisuallyHiddenInput type="file" />
      </Button>

      <Button
       size='small'
      component="label"
      // role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      >
      Attach Stickpads
      <VisuallyHiddenInput type="file" />
      </Button>
  
        </Stack>
        </Stack>
      <Stack alignItems={"flex-start"} sx={{width : "100%"}} spacing={2}>
      <Typography  onChange={(e)=>setCoursePayload((prev)=>{
              const newState = [...prev]
              newState[index + 1] = {...newState[index +1], description  : e.target.value}
              return newState;
            })} value={coursePayload[index+1]?.description ?? ""}>Description</Typography>
      <TextField fullWidth size="large" multiline
      rows={10}/>
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>

      <Button variant='contained'>Plan an Exercise</Button>
      <Button variant='contained'>Plan a Homework</Button>
      <Button variant='contained'>Save</Button>
      </Stack>
      </Stack>
        </AccordionDetails>
      </Accordion>)}
    </Stack>

    <Stack direction={"row"} justifyContent={'space-between'} width={"100%"} sx={{height: "7vh"}}>
<Button variant='contained' size='small' sx={{width :"10%"}} onClick={()=>handleAddRow()}> Add Topics</Button>
<Button variant='contained' size='small' sx={{width :"10%"}} >Save as Draft</Button>
<Button variant='contained' size='small' sx={{width :"10%"}} >Submit</Button>
</Stack>
</Stack>
    </Box>
  )
}

export default CreateCourseComponent