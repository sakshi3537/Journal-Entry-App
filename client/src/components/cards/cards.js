import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import MyCard from './card/card.js'

const Cards = () => {
  const cards = useSelector((state) => state.cards);
  return(
  <Grid columns={1} divided>
    <Grid.Row>
      <Grid.Column>
         
         {cards.map((card) => (
            <MyCard card={card}  />
          ))}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
}

export default Cards
