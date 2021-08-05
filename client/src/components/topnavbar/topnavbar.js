import React, { Component, useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
const Topnavbar = () => {
  const history = useHistory();
  
  const handleItemClick = () => {
    history.push('/auth/signIn')

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
            onClick={handleItemClick}>
              Sign In
              </Menu.Item>
              <Menu.Item
            name='signup'
            style = {{color : "white", fontSize:"large"}}
            color="teal"
            onClick={handleItemClick}>
              Sign Up
              </Menu.Item> 
        </Menu.Menu>
      </Menu>
    );
}
export default Topnavbar;
