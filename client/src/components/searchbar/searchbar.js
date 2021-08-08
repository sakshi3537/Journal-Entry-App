import React,{useState} from 'react'
import { Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { useDispatch } from 'react-redux';
import {fetchUsers} from '../../actions/actions'

const Searchbar = () => {
    const [searchQuery,setSearchQuery] = useState('');
    const dispatch = useDispatch();
        // const history = useHistory();
    // const onSubmit = e => {
    //     history.push(`?s=${searchQuery}`)
    //     e.preventDefault()
    // };

    const handleSubmit = () =>{
    dispatch(fetchUsers(searchQuery));
        
    };
    return(

        <Form onSubmit = {handleSubmit}>
        <Form.Field >
            <label>Search Users</label>
            <input type="text" name="s" placeholder='Search...' style={{width: "60%" }} onChange = {(e) => setSearchQuery(e.target.value)} value={searchQuery}/>
        </Form.Field>
        <Button type="submit">Search</Button>
        </Form>
    );
};

export default Searchbar;