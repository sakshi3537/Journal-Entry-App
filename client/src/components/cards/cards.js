import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { useSelector} from 'react-redux'
import MyCard from './card/card.js'

const Cards = ({currentId,setCurrentId,flagForCreateCard,setFlagForCreateCard}) => {
  const cards = useSelector((state) => state.cardReducer);
  return(
  <Grid columns={1} divided>
    <Grid.Row>
      <Grid.Column>
         
         {cards.map((card) => (
            <MyCard card={card} currentId={currentId} setCurrentId={setCurrentId} flagForCreateCard={flagForCreateCard} setFlagForCreateCard={setFlagForCreateCard} />
          ))}
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
}

export default Cards;
