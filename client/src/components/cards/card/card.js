import React from 'react';
import { Card, Icon,Button } from 'semantic-ui-react'
import moment from 'moment'
import { render } from 'react-dom';
import { useDispatch } from 'react-redux';
import { deleteCard,likeCard,updateCard } from '../../../actions/actions';



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
  const handleLikeItem=()=>{
    dispatch(likeCard(card._id));
  }
  const extra = (
    <div>
      <div style={{float:"left"}}>
      <div>
      {card.tags.map((tag) => `#${tag} `)}
      </div>
      <div style={{float:"left"}}>
      {<Button style={{backgroundColor:"blue",color:"white"}} onClick={handleLikeItem}><Icon name="thumbs up" />{card.likes.length}</Button>}
      
      </div>
      <div style={{float:"left"}}>
      {
        (card.creator===JSON.parse(localStorage.getItem('profile'))?.result?._id) &&
        (<Button style={{backgroundColor:"green",color:"white"}} onClick={handleUpdateItem}>Edit</Button>)
        
        }
      </div>
      <div style={{float:"left"}}>
      {
        (card.creator===JSON.parse(localStorage.getItem('profile'))?.result?._id) &&
        (<Button style={{backgroundColor:"red",color:"white"}} onClick={handleDeleteItem}>Delete </Button>)
      }
      </div>
      </div>
      <div style={{float:'right'}}>
      {
      moment(card.createdAt).fromNow()
     }
      </div>
    </div>
  );
  return(
  <Card fluid
    header= {card.title}
    image= {card.imageFile}
    
    meta= {card.name}
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