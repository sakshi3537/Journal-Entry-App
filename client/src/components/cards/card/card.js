import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import moment from 'moment'
import { render } from 'react-dom';



const MyCard = ({card}) => {
  const extra = (
    <div>
      <div style={{float:'left'}}>
      {card.tags.map((tag) => `#${tag} `)}
      </div>
      <div style={{float:'right'}}>
      {moment(card.createdAt).fromNow()}
      </div>
    </div>
  );
  return(
  <Card fluid
    header= {card.title}
    image= {card.image}
    
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