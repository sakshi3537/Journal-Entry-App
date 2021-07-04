import React, { useState } from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css'
import dropdownValues from  './constants/dropdown.js'
import Topnavbar from './components/topnavbar/topnavbar.js'
import Sidebar from './components/sidebar/sidebar.js'
import CreateCard from './components/createCard/createCard.js'
import MyCard from './components/cards/card/card.js'
import Cards from './components/cards/cards.js'

const App = () => {
  const [flagForCreateCard, setFlagForCreateCard] = useState(0);
  return(
  <div>
  <Topnavbar/>
  <Sidebar flagForCreateCard = {flagForCreateCard} setFlagForCreateCard = {setFlagForCreateCard} />
  <CreateCard flagForCreateCard = {flagForCreateCard} setFlagForCreateCard = {setFlagForCreateCard} />
  <Cards/>
  </div>
  );
}


export default App



