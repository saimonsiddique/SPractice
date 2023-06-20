import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Link, useParams } from "react-router-dom";

// const bull = (
//     <Box
//       component="span"
//       sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//       •
//     </Box>
//   );

const BookmarkDetails = () => {
    const { title } = useParams();
    const [bookmark, setBookmark] = React.useState('')

    React.useEffect(() => {
        if (title) {
            const allBookMarks = JSON.parse(localStorage.getItem('bookmarks'))
            // console.log(allBookMarks)
            allBookMarks.filter((bm)=>{
                if(bm.title === title ){
                    setBookmark(bm)
                }
            })
          
        }
      }, [title]);


  return (
    <Card sx={{ minWidth: 275, bgcolor:'#f20660' }}>
      <CardContent>
      <h2>Bookmark Details</h2>
      </CardContent>
      {bookmark && <Box sx={{bgcolor:'white', m:'20px'}}>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <h3>Title:</h3>
            <h5>{bookmark.title}</h5>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <h3>URL:</h3>
            <h5>{bookmark.url}</h5>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
            <h3>Category:</h3>
            <h5>{bookmark.category}</h5>
        </Box>
      </Box>}
        <Button sx={{bgcolor:'white', mb:'20px', color:'black'}} variant="contained">Back</Button>
    </Card>
  )
}

export default BookmarkDetails