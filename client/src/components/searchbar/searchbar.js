import React,{useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux';
import {fetchUsers} from '../../actions/actions'
import { CLEAR_SEARCH_RESULTS } from '../../constants/constants';

const Searchbar = ({searchQuery,setSearchQuery}) => {
    const dispatch = useDispatch();
        // const history = useHistory();
    // const onSubmit = e => {
    //     history.push(`?s=${searchQuery}`)
    //     e.preventDefault()
    // };
    const handleClearClick = () =>{
        setSearchQuery('');
        dispatch({type:CLEAR_SEARCH_RESULTS,payload:''});
    }
    const handleSubmit = () =>{
    dispatch(fetchUsers(searchQuery));
        
    };
    return(

        <Form onSubmit = {handleSubmit}>
        <Form.Field >
            <Form.Input type="text" label="Search Users" required name="s" placeholder='Search...' style={{width: "80%" }} onChange = {(e) => setSearchQuery(e.target.value)} value={searchQuery}/>
        </Form.Field>
        <Button style={{marginBottom:"4%",backgroundColor:"blue",color:"white"}} type="submit">Search</Button>
        <Button style={{marginBottom:"4%",backgroundColor:"red",color:"white"}} onClick={handleClearClick}>Clear</Button>
        </Form>
    );
};

export default Searchbar;