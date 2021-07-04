import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'



const MyCard = (card) => (
  <Card
    header= {card.title}
    image= {card.image}
    
    meta= {card.creator}
    description={card.caption}
    //For adding tags
    extra={moment(card.createdAt).fromNow()}
  />
)

export default MyCard;