import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

const DisplayBookMark = ({categoryName, allTheBookMarks}) => {
    const navigate = useNavigate();
    const [bookmarks, setBookmarks] = React.useState('')

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      React.useEffect(()=>{
        const allBM = JSON.parse(localStorage.getItem('bookmarks'));
        setBookmarks(allBM)
      }, [] )

      
      const handleNavigate = (title) => {
        // console.log(title)
        // navigate(`/${bookmark.id}`);
        // console.log(`/${title}`)
        navigate(`/${title}`);

    };

  return (
    <div>
        <h2>{categoryName}</h2>
        <Box sx={{ width: '100%' }}>
        {bookmarks && <Stack spacing={2} sx={{bgcolor:'#00000073', padding:'20px'}}>
        {bookmarks.map((bookmark, i)=>{
            if(bookmark.category == categoryName){
                return (
                    <Item key={i}>
                <Stack sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <h4>{bookmark.title}</h4>
                <Button sx={{ml:'50px', bgcolor:'#f20660' }} variant="contained" onClick={()=>handleNavigate(bookmark.title)}>Details</Button>
                </Stack>
            </Item>
                )
            }
            })}
            {/* <Item>
                <Stack sx={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <h4>Facebook</h4>
                <Button sx={{ml:'50px', }} variant="contained">Details</Button>
                </Stack>
            </Item> */}
        </Stack>}
        </Box>

    </div>
  )
}

export default DisplayBookMark