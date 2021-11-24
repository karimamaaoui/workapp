import { Paper,Box,Grid } from '@material-ui/core'
import React from 'react'
import {renderButton,renderInputText,renderPasswordText, renderText} from '../updateProfile/displayComponent'


function Step3({state,handleChange,handleNextPage,handlePrev}) {
    return (
        <Paper component={Box} p={2}>
                 <Box p={1} mb={2}  >
                            {renderText({ label : "Professional Details" ,variant:"h6"}) }
                        </Box>
                   
              <Grid container spacing={2} style={{marginBottom:"10px"}}>

                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({
                                label:'Skill',
                                name:"skill",
                                state,
                                handleChange,
                                })}
                        </Box>
                   </Grid>
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'Job Apply For',
                                                name:"jobApplyFor",
                                                state,
                                                handleChange,
                                                })}
                        </Box>
                        </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>

                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'work Experience',
                                                name:"workExperience",
                                                state,
                                                handleChange,
                                                })}
                        </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Box>
                            {renderInputText({label:'expected Salary',
                                                name:"expectedSalary",
                                                state,
                                                handleChange
                                                })}
                        </Box>
                        </Grid>
                         </Grid>

                         <Grid container spacing={2} justify="flex-end">
                              <Box p={2}>
                               {renderButton({
                                   label: "finish" ,
                                   handleOnClick:handleNextPage
                                   
                               })} 
                               </Box> 
                               <Box p={2}>
                               {renderButton({
                                   label: "Back" ,
                                   color:"default",
                                   handleOnClick:handlePrev
                                   
                               })} 
                               </Box>            
                                 
                        </Grid>
        </Paper>
    )
}

export default Step3