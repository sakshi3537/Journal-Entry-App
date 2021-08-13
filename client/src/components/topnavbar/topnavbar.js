import React, { Component, useEffect, useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { CLEAR_ERROR } from '../../constants/constants';
const Topnavbar = ({isSignUp,setIsSignUp}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleItemClick = () => {
    dispatch({type:CLEAR_ERROR});
    history.push('/')

  }

  const handleSignInClick = () => {
    dispatch({type:CLEAR_ERROR});
      setIsSignUp(false);
      history.push('/auth');
  }

  const handleSignUpClick = () => {
    dispatch({type:CLEAR_ERROR});
      setIsSignUp(true);
      history.push('/auth');
  }
  const [signButtons,setSignButtons]=useState(false);
  const location=useLocation();
  useEffect(()=> {
    if(location.pathname==='/auth')
    setSignButtons(false);
    if(location.pathname==='/')
    setSignButtons(true);
  },[location]);

    return (
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
        {(signButtons) && (
        <Menu.Menu position='right'>
          <Menu.Item
            name='signin'
            style = {{color : "white", fontSize:"large"}}
            color="teal"
            onClick={handleSignInClick}>
              Sign In
              </Menu.Item>
              <Menu.Item
            name='signup'
            style = {{color : "white", fontSize:"large"}}
            color="teal"
            onClick={handleSignUpClick}>
              Sign Up
              </Menu.Item> 
        </Menu.Menu>
        )}
      </Menu>
    );
}
export default Topnavbar;
