import React from 'react'
import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddBookMark = ({setAllTheBookMarks}) => {

        const [selectedCategory, setSelectedCategory] = React.useState('');
        const [title, setTitle] = React.useState('');
        const [uRL, setURL] = React.useState('');
        const [newCategory, setNewCategory] = React.useState('');
        const [newCatField, setNewCatField] = React.useState(false);
        const [allBookMarks, setAllBookMarks] = React.useState([]);
      
        const handleChange = (e) => {
            // console.log(e.target.value)
            setSelectedCategory(e.target.value);
        };
        const showNewCatField = () => {
           setNewCatField(!newCatField)
        }
        const handleTitle = (e) => {
            // console.log(e.target.value)
             setTitle(e.target.value)
        }
        const handleURL = (e) => {
            // console.log(e.target.value)
             setURL(e.target.value)
        }
        const handleNewCategory = (e) => {
            // console.log(e.target.value)
              setNewCategory(e.target.value)
        }
        const handleSubmit = async (e) => {
            let bookmarks = []
            let bookmark ={}

                if(newCatField){
                    // console.log(title)
                    // console.log(uRL)
                    // console.log(newCategory)
                    bookmark.title = title;
                    bookmark.url = uRL;
                    bookmark.category= newCategory;

                    bookmarks.push(bookmark)
                }
                if(!newCatField){
                    // console.log(title)
                    // console.log(uRL)
                    // console.log(selectedCategory)
                    bookmark.title = title;
                    bookmark.url = uRL;
                    bookmark.category= selectedCategory;

                    bookmarks.push(bookmark)
                }

                // console.log(bookmarks)

                if(localStorage.getItem('bookmarks')){
                    let oldBookmarks =JSON.parse(localStorage.getItem('bookmarks'))
                    oldBookmarks.push(bookmark)
                    localStorage.setItem('bookmarks', JSON.stringify(oldBookmarks))
                    setAllBookMarks(JSON.parse(localStorage.getItem('bookmarks')))
                    // bookmarks.push()
                    // console.log(bookmark)
                    // await setAllBookMarks(...oldBookmarks, bookmark)
                    // console.log(allBookMarks)
                    // .then((res)=>{
                    //     console.log(allBookMarks)
                    //     console.log(res)
                    // })
                    // bookmarks.push(oldBookmarks)
                    // localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
                    // console.log(localStorage.getItem('bookmarks'))
                }
                if(! localStorage.getItem('bookmarks')){
                    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
                    setAllBookMarks(JSON.parse(localStorage.getItem('bookmarks')))
                }
                

        }

  return (
    <Box>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h2>Add a Bookmark</h2>
      <div>
        <TextField
        onChange={handleTitle}
          required
          id="outlined-required"
          label="Title"
        />
      </div>
      <div>
        <TextField
        onChange={handleURL}
          required
          id="outlined-required"
          label="URL"
        />
      </div>
      <div sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
       
      { !newCatField && <FormControl sx={{width:'65%', mr:'8px'}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={40}>Fourty</MenuItem>
        </Select>
      </FormControl>}
      <Button sx={{bgcolor:'white', color:'black'}} variant="contained" onClick={showNewCatField}>{newCatField ? 'select category' : '+'}</Button>
    
      </div>
      {newCatField && <div>
        <TextField
        onChange={handleNewCategory}
          required
          id="outlined-required"
          label="New Category"
        />
      </div>}
      <div>
      <Button sx={{mt:'20px'}} variant="contained" fullWidth onClick={handleSubmit}>Add Bookmark</Button>
    
    </div>
    </Box>
        
    </Box>
  )
}

export default AddBookMark