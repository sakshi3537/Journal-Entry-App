import Topnavbar from '../topnavbar/topnavbar.js'
import React from 'react';
import { Container, Grid } from 'semantic-ui-react'
import home from '../../images/home.png'
import createCard from '../../images/createCard.png'
import signin from '../../images/signin.png'
import signup from '../../images/signup.png'

const LandingPage = ({isSignUp,setIsSignUp}) => {
    return (
        <div>

        <Topnavbar isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>
            <Grid style = {{marginTop : '20px', textAlign :'center', alignItems : 'center',justifyContent:'center'}} >
            <Grid.Row>
            <Grid.Column>
                <Container style ={{border:'10px solid teal'}}>
                <h2><b>View and like Journals of other users.</b></h2>
                <img src={home} style={{width:"100%"}}></img>
                </Container>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                <Container style ={{border:'10px solid teal'}}>
                <h2><b>Create your own Journal by adding images, captions.</b></h2>
                <img src={createCard} style={{width:"100%"}}></img>
                </Container>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                <Container style ={{border:'10px solid teal'}}>
                <h2><b>Sign In to have a full experience</b></h2>
                    <img src={signin} style={{width:"100%"}}></img>
                </Container>
            </Grid.Column>
            </Grid.Row>
            </Grid>
              
        </div>
    );
}

export default LandingPage;