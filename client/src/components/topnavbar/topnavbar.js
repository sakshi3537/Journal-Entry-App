import React, { Component, useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Topnavbar = () => {
  
  const [active, setActive] = useState('Journey') 

  const handleItemClick = (e, { name }) => setActive(name);

    return (
      <Menu 
      style = {{backgroundColor : "black"}}
      >
        <Menu.Item
          name='Journey'
          style = {{color : "white",fontSize: "large"}}
          color="teal"
          active={active === 'Journey'}
          onClick={handleItemClick}
        >Journey</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item >
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            style = {{color : "white", fontSize:"large"}}
            color="teal"
            active={active === 'logout'}
            onClick={handleItemClick}>
              Log out
              </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
}
export default Topnavbar;
