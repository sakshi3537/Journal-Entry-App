import React, { Component, useState } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'

const Sidebar = (flagForCreateCard, setFlagForCreateCard) => {

  const [status, setStatus] = useState('create card') 

  const handleItemClick = (e, { name }) => {setStatus(name);(name === 'create card')?setFlagForCreateCard(1):setFlagForCreateCard(0);}
  

   return (
      <Menu vertical>
        <Menu.Item
          name='create card'
          color='teal'
          onClick={handleItemClick}
          active={status === 'create card'}
          
        >
          Create Card
        </Menu.Item>

        <Menu.Item
          name='view cards'
          color='teal'
          active={status === 'view cards'}
          onClick={handleItemClick}
        >
          View Cards
        </Menu.Item>
      </Menu>
    );
}
export default Sidebar;
