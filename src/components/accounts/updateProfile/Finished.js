import React from 'react'
import { renderText } from './displayComponent'
import { Grid, Box ,Paper } from '@material-ui/core'

 
function Finished({state}) {
    return (
        <Paper component={Box} p={2}>
                 <Box p={1} mb={2}  >
                            {renderText({ label : "Your Given Details" ,variant:"h6"}) }
                        </Box>

                        
                               
                         <Grid container spacing={2} justify="flex-end">
                               <Box p={2}>
                               {
                                   JSON.stringify(state,null,4)
                               } 
                               </Box>    </Grid>       
                                 
        </Paper>
    )
}

export default Finished
