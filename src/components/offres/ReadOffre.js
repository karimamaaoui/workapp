import React, { Component } from 'react'
import NavbarList from '../Bar/NavBarList'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle,MDBCardHeader, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

export class ReadOffre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offre:[],
            id: this.props.match.params.id,

        };
    }

    componentDidMount()
    {
    const config={
        headers:{
            Authorization: 'Bearer ' +localStorage.getItem('token')            }
            
        };


    return axios.get('http://localhost:8081/api/offre/offre' + '/' + (this.state.id),config).then( (res) =>{
        const offre = res.data;
        console.log("offres list",offre)
     
        this.setState({
            offre
        });
        console.log(this.state.offre)

    });


}


    render() {
        return (
            <div >
                     
     
         <div>
         <NavbarList/>  
 
         </div>

            <MDBCard>
      <MDBCardHeader> {this.state.offre.title}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle> {this.state.offre.company}</MDBCardTitle>
        <MDBCardText>Published At : {this.state.offre.published} <br/>experience : {this.state.offre.experience}
        <br/>
        {this.state.offre.description}
        
         </MDBCardText>
        <MDBBtn href='#'>Postule</MDBBtn>
      </MDBCardBody>
    </MDBCard>
     
                 </div>
        )
    }
}

export default withRouter(ReadOffre)
