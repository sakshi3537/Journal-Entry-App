import React, { useEffect, useState } from 'react'
import { Menu, Button, Image, CommentAvatar } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import '../../App.css'
import dropdownValues from  '../../constants/dropdown.js'
import { CLEAR_SEARCH_RESULTS } from '../../constants/constants';
import {CLEAR_FRIEND_STATUS} from '../../constants/constants';
import Sidebar from '../sidebar/sidebar.js'
import CreateCard from '../createCard/createCard.js'
import MyCard from '../cards/card/card.js'
import Cards from '../cards/cards.js'
import { Grid } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import PageLoader from '../loader/loader'
import { useHistory } from 'react-router-dom';
import { logOut } from '../../actions/auth';
import LandingPage from '../landingPage/landingPage';
import decode from 'jwt-decode';
import SearchBar from '../searchbar/searchbar.js'
import { fetchAllUsers,addFriend, fetchMyCards } from '../../actions/actions';

const Home = () => {
    const [flagForCreateCard,setFlagForCreateCard]=useState(false);
    const [currentId,setCurrentId]=useState('');
    const history=useHistory();
    const dispatch=useDispatch();
    const isLoggedIn= localStorage.getItem('profile');
    const users = useSelector((state) => state.userReducer.users);
    const friendStatus=useSelector((state)=>state.userReducer.status);
    useEffect(()=>{
        if(friendStatus!='')
        {
          setTimeout(()=>{
            dispatch({type:CLEAR_FRIEND_STATUS})
          },1000);
        }
    },[friendStatus])

    const loggedInUser=JSON.parse(localStorage.getItem('profile'))?.result?.name;
    const loggedInUserProfilePic=JSON.parse(localStorage.getItem('profile'))?.result?.profilePic;
    useEffect(()=>{
        dispatch(fetchMyCards());
    },[])
  
    
    
    if(!isLoggedIn)
    history.push('/');
    const handleItemClick = () => {
      history.push('/home')
  
    }
    const handleLogOut = async () => {
      dispatch(logOut(history));
      dispatch({type:CLEAR_SEARCH_RESULTS,payload:''});
    }

    const [searchQuery,setSearchQuery] = useState('');
    return (
<div>
      
        
          <Menu 
      style = {{backgroundColor : "black"}}
      >
        <Menu.Item
          name='Journey'
          style = {{color : "white",fontSize: "large"}}
          color="teal"
          active= {true}
          onClick={handleItemClick}
        >Journey</Menu.Item>
        <Menu.Menu position='right'>
       
        <div>
      <Image src= {loggedInUserProfilePic} style={{marginTop: "11%",width:"40px",height:"40px",borderRadius:"50%",border:"teal 2px solid"}} />
      
    </div>
    <Menu.Item
            name='loggedInUser'
            style = {{color : "white", fontSize:"large"}}
            color="teal"
            >
              {loggedInUser}
              </Menu.Item>
           
          <Menu.Item
            name='signin'
            style = {{color : "white", fontSize:"medium"}}
            color="teal"
            onClick={handleLogOut}>
              Log Out
              </Menu.Item>
        </Menu.Menu>
      </Menu>
            <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          <Sidebar flagForCreateCard={flagForCreateCard} setFlagForCreateCard={setFlagForCreateCard}/>
          <CreateCard flagForCreateCard={flagForCreateCard} setFlagForCreateCard={setFlagForCreateCard} currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid.Column>
          <Grid.Column width={8}>
          <Cards currentId={currentId} setCurrentId={setCurrentId} flagForCreateCard={flagForCreateCard} setFlagForCreateCard={setFlagForCreateCard}/>
          </Grid.Column>
          <Grid.Column width={4}>
          <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {(friendStatus==='Friend Added Successfully')?
            (<b style={{color:'green'}}>{friendStatus}</b>):
            (<b style={{color:'red'}}>{friendStatus}</b>)}
            {users.map((user) => (
                    
                
                    <li style={{listStyleType:"none",marginTop:"2%",marginBottom:"2%",marginRight:"4%",paddingLeft:"2%",outline:".1rem solid blue"}}>
                
                  <Image src= {loggedInUserProfilePic} avatar style={{marginTop: "1%",marginBottom: "1%",width:"30px",height:"30px",borderRadius:"50%",border:"teal 2px solid"} } />
                
                  {user.name} 
                      <Button style={{backgroundColor:"white",color:"blue"}} onClick={() => {
                        (JSON.parse(localStorage.getItem('profile'))?.result?.friends.includes(user._id))
                        ?(dispatch(addFriend(user._id,false)))
                        :(dispatch(addFriend(user._id,true)));setSearchQuery('');}}>
                        {(JSON.parse(localStorage.getItem('profile'))?.result?.friends.includes(user._id))
                        ?"Remove Friend": "Add Friend"}
                      </Button>
                    
                    </li>
                    
                   
                ))}

        </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <PageLoader/>
      
        </div>
    );
}

export default Home;




















