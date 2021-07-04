import React, { Component, useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Topnavbar = (flagForCreateCard, setFlagForCreateCard) => {
  //state = { activeItem: 'home' }
  const [status, setStatus] = useState('home') 

  const handleItemClick = (e, { name }) => setStatus(name);

    return (
      <Menu style = {{backgroundColor : "black"}}>
        <Menu.Item
          name='Journey'
          style = {{color : "white"}}
          active={status === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item >
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            style = {{color : "white"}}
            active={status === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
}
export default Topnavbar;
