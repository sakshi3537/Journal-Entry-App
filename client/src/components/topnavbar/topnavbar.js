import React, { Component, useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
const Topnavbar = ({isSignUp,setIsSignUp}) => {
  const history = useHistory();
  const handleItemClick = () => {
    history.push('/')

  }

  const handleSignInClick = () => {
    console.log(isSignUp);
  console.log(typeof setIsSignUp);
      setIsSignUp(false);
      history.push('/auth');
  }

  const handleSignUpClick = () => {
    console.log(isSignUp);
  console.log(typeof setIsSignUp);
      setIsSignUp(true);
      history.push('/auth');
  }

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
      </Menu>
    );
}
export default Topnavbar;
