import React, { Component, useState,useEffect } from 'react'
import { Input, Label, Menu, Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../../actions/actions';

const Sidebar = ({flagForCreateCard,setFlagForCreateCard}) => {
  const [status, setStatus] = useState('');
  const dispatch=useDispatch();
  useEffect(()=>{
    if(status==='view cards')
    dispatch(fetchCards());
    if(status==='create card')
    setFlagForCreateCard(true);
  },[status]);
  useEffect(()=>{
    if(!flagForCreateCard)
    setStatus('');
  },[flagForCreateCard])
  const handleItemClick =  (e, { name }) => {
    setStatus(name);
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
