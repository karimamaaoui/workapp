import { Paper,Box,Grid } from '@material-ui/core'
import React from 'react'
import {renderButton,renderInputText,renderPasswordText, renderText} from '../updateProfile/displayComponent'

function Step1({state,handleChange,handleNextPage}) {
    return (
        <Paper component={Box} p={2} style={{backgroundColor:"#AFA7BB"}}>
                 <Box p={1} mb={2}  >
                            {renderText({ label : "Please Fill personal Data" ,variant:"h6"}) }
                        </Box>
                   
              <Grid container spacing={2} style={{marginBottom:"10px"}}>

                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({
                                label:'First Name',
                                name:"firstName",
                                state,
                                handleChange,
                                })}
                        </Box>
                   </Grid>
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'Last Name',
                                                name:"lastName",
                                                state,
                                                handleChange,
                                                })}
                        </Box>
                        </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>

                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'Phone',
                                                name:"phone",
                                                state,
                                                handleChange,
                                                })}
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'Gender',
                                                name:"gender",
                                                state,
                                                handleChange
                                                })}
                        </Box>
                        </Grid>
                         </Grid>

                         <Grid container spacing={2} justify="flex-end">
                              <Box p={2}>
                               {renderButton({
                                   label: "next" ,
                                   handleOnClick:handleNextPage
                                   
                               })} 
                               </Box>            
                        </Grid>
        </Paper>
    )
}

export default Step1
