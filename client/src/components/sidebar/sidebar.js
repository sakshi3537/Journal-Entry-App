import React, { Component, useState } from 'react'
import { Input, Label, Menu, Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../../actions/actions';

const Sidebar = () => {

  const [status, setStatus] = useState('');
  const dispatch=useDispatch();
  const handleItemClick =  (e, { name }) => {
    setStatus(name);
    if(status==='view cards')
      dispatch(fetchCards());
  }
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
        onClick={handleItemClick}
        active={status === 'view cards'}
      >
        View Cards
      </Menu.Item>
    </Menu>
    );
}
export default Sidebar;
