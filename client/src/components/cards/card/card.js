import React from 'react';
import { Card, Icon,Button } from 'semantic-ui-react'
import moment from 'moment'
import { render } from 'react-dom';
import { useDispatch } from 'react-redux';
import { deleteCard,updateCard } from '../../../actions/actions';



const MyCard = ({card,currentId,setCurrentId,flagForCreateCard,setFlagForCreateCard}) => {
  const dispatch= useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteCard(card._id));
  }
  const handleUpdateItem= ()=>{
    setCurrentId(card._id);
    setFlagForCreateCard(true);
    //dispatch(updateCard(card));
  }
  const extra = (
    <div>
      <div style={{float:"left"}}>
      <div>
      {card.tags.map((tag) => `#${tag} `)}
      </div>
      <div style={{float:"left"}}>
      {<Button style={{backgroundColor:"red",color:"white"}} onClick={handleDeleteItem}>Delete</Button>}
      </div>
      <div style={{float:"left"}}>
      {<Button style={{backgroundColor:"teal",color:"white"}} onClick={handleUpdateItem}>Edit</Button>}
      </div>
      </div>
      <div style={{float:'right'}}>
      {
        //console.log(new Date())
        //moment(card.createdAt)
      moment(card.createdAt).fromNow()
     }
      </div>
    </div>
  );
  return(
  <Card fluid
    header= {card.title}
    image= {card.imageFile}
    
    meta= {card.creator}
    description={card.caption}
    color="teal"
    //For adding tags
    extra={extra}
    //extra={card.tags.map((tag) => `#${tag} `)}
    //extra={moment(card.createdAt).fromNow()}
  />
  );
}

export default MyCard;