import Topnavbar from '../topnavbar/topnavbar.js'
import React from 'react';
import { Container, Grid } from 'semantic-ui-react'

const landingPage = () => {
    return (
        <div >
            <Topnavbar/>
            <Grid style = {{marginTop : '100px', textAlign :'center', alignItems : 'center',justifyContent:'center'}} >
            <Grid.Row>
            <Grid.Column width={4}>
                <Container style ={{border:'10px solid teal'}}>
                   Create your own Journal by adding images, captions.
                </Container>
            </Grid.Column>
            <Grid.Column width={4}>
                <Container style ={{border:'10px solid teal'}}>
                   View and like Journals of other users.
                </Container>
            </Grid.Column>
            <Grid.Column width={4}>
                <Container style ={{border:'10px solid teal'}}>
                    Sign In to have a full experience
                </Container>
            </Grid.Column>
            </Grid.Row>
            </Grid>
              
        </div>
    );
}

export default landingPage;