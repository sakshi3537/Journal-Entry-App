import React, { Component, useState,useEffect } from 'react'
import { Input, Label, Menu, Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { fetchCards, fetchMyCards } from '../../actions/actions';


const MenuButtons = ({flagForCreateCard,setFlagForCreateCard}) => {
  const [status, setStatus] = useState('view my cards');
  const dispatch=useDispatch();
  useEffect(()=>{
    if(status==='view feed')
    dispatch(fetchCards());
    if(status==='create card')
    setFlagForCreateCard(true);
    if(status==='view my cards')
    dispatch(fetchMyCards());
  },[status]);
  useEffect(()=>{
    if(!flagForCreateCard)
    setStatus('view my cards');
  },[flagForCreateCard])
  const handleItemClick =  (e, { name }) => {
    setStatus(name);
  }

  return (
        <Menu style={{marginTop:"0"}}>
          <Menu.Item
            name='create card'
            color='teal'
            onClick={handleItemClick}
            active={status === 'create card'}
            
          >
            Create Card
          </Menu.Item>
    
          <Menu.Item
            name='view feed'
            color='teal'
            onClick={handleItemClick}
            active={status === 'view feed'}
          >
            View Feed
          </Menu.Item>
          <Menu.Item
            name='view my cards'
            color='teal'
            onClick={handleItemClick}
            active={status === 'view my cards'}
            
          >
            View My Cards
          </Menu.Item>
        </Menu>
        );
}
export default MenuButtons;
