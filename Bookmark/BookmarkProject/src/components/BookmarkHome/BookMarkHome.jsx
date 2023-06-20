import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DisplayBookMark from './DisplayBookMark';
import AddBookMark from './AddBookMark';
import { Button } from '@mui/material';
import BookmarkDetails from './BookmarkDetails';

const BookMarkHome = () => {
    const [newBMField, setNewBMField] = React.useState(false)
    const [categories, setCategories] = React.useState('')
    const [allTheBookmarks, setBookmarks] = React.useState('')

    React.useEffect(()=>{
        const allBM = JSON.parse(localStorage.getItem('bookmarks'));
        setBookmarks(allBM)
    }, [] )

    React.useEffect(()=>{
        
        let allCategories = []
        for(let el of allTheBookmarks){
            if(!allCategories.includes(el.category)){
                allCategories.push(el.category)
            }
            // console.log(el.category)
        }
        setCategories(allCategories)
      }, [allTheBookmarks] )

    const showNewBMField = () => {
        setNewBMField(!newBMField)
     }
     const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={7}>
    //       <Item>
    //         <DisplayBookMark></DisplayBookMark>
    //       </Item>
    //     </Grid>
    //     <Grid item xs={5}>
    //       <Item>xs=5</Item>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
        {categories && <Box sx={{mr:'50px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            {categories.map((category,i)=>{
                // return (<Category key={category}>{category}</Category>)
                return <DisplayBookMark key={i} allTheBookmarks={allTheBookmarks} categoryName={category} ></DisplayBookMark>
            })}
        </Box>}
        <Box sx={{ml:'50px'}}>
            <Box>
            <Button variant="contained" onClick={showNewBMField}>Create Bookmark</Button>
            </Box>
            {newBMField && <AddBookMark setBookmarks={setBookmarks}/>}
            <Box sx={{mt:'50px'}} >
                <BookmarkDetails></BookmarkDetails>
            </Box>
        </Box>
    </Box>
  );
}

export default BookMarkHome