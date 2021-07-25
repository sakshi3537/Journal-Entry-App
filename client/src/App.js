import React, { useEffect, useState } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css'
import dropdownValues from  './constants/dropdown.js'
import Topnavbar from './components/topnavbar/topnavbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import CreateCard from './components/createCard/createCard.js'
import MyCard from './components/cards/card/card.js'
import Cards from './components/cards/cards.js'
import { Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import PageLoader from './components/loader/loader';

const App = () => {
  const [flagForCreateCard,setFlagForCreateCard]=useState(false);
  const [currentId,setCurrentId]=useState('');
  return(
    <div>
      <Topnavbar/>
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
              //For later use
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <PageLoader/>
    </div>
  
  );
}


export default App



