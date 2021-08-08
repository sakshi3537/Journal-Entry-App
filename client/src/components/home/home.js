import React, { useEffect, useState } from 'react'
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../../App.css'
import dropdownValues from  '../../constants/dropdown.js'

import Sidebar from '../sidebar/sidebar.js'
import CreateCard from '../createCard/createCard.js'
import MyCard from '../cards/card/card.js'
import Cards from '../cards/cards.js'
import { Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import PageLoader from '../loader/loader'
import { useHistory } from 'react-router-dom';
import { logOut } from '../../actions/auth';
import LandingPage from '../landingPage/landingPage';
import decode from 'jwt-decode';

const Home = () => {
    const [flagForCreateCard,setFlagForCreateCard]=useState(false);
    const [currentId,setCurrentId]=useState('');
    const history=useHistory();
    const dispatch=useDispatch();
    const isLoggedIn= localStorage.getItem('profile');
    if(!isLoggedIn)
    history.push('/');
    const handleItemClick = () => {
      history.push('/home')
  
    }
    const handleLogOut = async () => {
      dispatch(logOut(history));
  
    }

    return (

        <div>
          <Menu 
      style = {{backgroundColor : "black"}}
      >
        <Menu.Item
          name='Journey'
          style = {{color : "white",fontSize: "large"}}
          color="teal"
          active= {true}
          onClick={handleItemClick}
        >Journey</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='signin'
            style = {{color : "white", fontSize:"large"}}
            color="teal"
            onClick={handleLogOut}>
              Log Out
              </Menu.Item>
        </Menu.Menu>
      </Menu>
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




















