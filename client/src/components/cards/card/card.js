import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'
import { render } from 'react-dom';



const MyCard = ({card}) => {
  return(
  <Card fluid
    header= {card.title}
    image= {card.image}
    
    meta= {card.creator}
    description={card.caption}
    //For adding tags
    extra={moment(card.createdAt).fromNow()}
  />
  );
}

export default MyCard;