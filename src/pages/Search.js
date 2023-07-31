import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FoodSearch from '../components/FoodSearch'
// import AlphabaticFood from '../components/AlphabaticFood'
// import { Box, Button, ButtonGroup} from '@mui/material';


const Search = () => {
    // const [show, setShow] = useState(true)


  
  return (
    <>  
       {/* <Box sx={{textAlign:"center" ,mt:2}} >
            <ButtonGroup>
                <Button variant='outlined' sx={{textTransform:'unset',fontSize:15}} onClick={()=>setShow(true)}>Search by recipe</Button>
                <Button variant='contained' sx={{textTransform:'unset',fontSize:15}} onClick={()=>setShow(false)}>Search by alphabet</Button>
            </ButtonGroup>
       </Box>
        {
            show ?     <FoodSearch />  :   <AlphabaticFood /> */}
        
        <Container maxWidth="md">
          <Box sx={{textAlign:'center'}}>
            <Typography variant='h5'>Search any food item.</Typography>
          </Box>
        </Container>
        <FoodSearch />
    </>
  )
}

export default Search

/*
<ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>

*/