import React, { useEffect, useState } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../../App.css'
import dropdownValues from  '../../constants/dropdown.js'

import Sidebar from '../sidebar/sidebar.js'
import CreateCard from '../createCard/createCard.js'
import MyCard from '../cards/card/card.js'
import Cards from '../cards/cards.js'
import { Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import PageLoader from '../loader/loader'


const Home = () => {
    const [flagForCreateCard,setFlagForCreateCard]=useState(false);
    const [currentId,setCurrentId]=useState('');
    return (
        <div>
            <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
          <Sidebar flagForCreateCard={flagForCreateCard} setFlagForCreateCard={setFlagForCreateCard}/>
          <CreateCard flagForCreateCard={flagForCreateCard} setFlagForCreateCard={setFlagForCreateCard} currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid.Column>
          <Grid.Column width={8}>
          <Cards currentId={currentId} setCurrentId={setCurrentId} flagForCreateCard={flagForCreateCard} setFlagForCreateCard={setFlagForCreateCard}/>
          </Grid.Column>
          <Grid.Column width={5}>
            {
              
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <PageLoader/>
      
        </div>
    );
}

export default Home;




















