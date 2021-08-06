import React, {useState,useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Form, Dropdown, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import dropdownValues from  '../../constants/dropdown.js'
import {createCard, updateCard} from '../../actions/actions.js'
import FileBase64 from 'react-file-base64';
import '../../App.css'
import {signIn,signUp} from '../../actions/auth'
import {useHistory} from 'react-router-dom';
import Topnavbar from '../topnavbar/topnavbar.js';

const Auth = ({isSignUp,setIsSignUp}) => {
  const dispatch = useDispatch();  
  const [formData,setFormData] = useState({FirstName : '',LastName : '',Email : '', Password : '', ConfirmPassword : ''});
  const history = useHistory();
  const handleSubmit = async (e) => {  
      e.preventDefault();
      if(isSignUp){
        dispatch(signUp(formData,history));
        setFormData({FirstName : '',LastName : '',Email : '', Password : '', ConfirmPassword : ''});
      }  
      else{ 
        dispatch(signIn(formData,history));
        setFormData({Email : '', Password : ''});
      
      }  
      setIsSignUp(false);
  };

  const handleChange = async (e) => {
      setFormData({...formData,[e.target.name]:e.target.value});
      //console.log(formData)
  }

  const handleClick = () => {

    setIsSignUp(!isSignUp) ;

  }

  const errorStatement= useSelector((state) => state.authReducer);
  return (
    <>
    <Topnavbar/>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
      <div className = "authStyles" style={{marginTop:"5%"}}>  
      <h2>{isSignUp ? ("Sign Up") : ("Sign In")} </h2>
      <Form  onSubmit = {handleSubmit}>{
          (isSignUp) && (
              <Form.Group widths='equal'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        required
        label='First name'
        name = 'FirstName'
        placeholder='First name'
        onChange={handleChange}
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        required
        label='Last name'
        name='LastName'
        placeholder='Last name'
        onChange={handleChange}
      />
    </Form.Group>
    
      )
          }
            <Form.Field >
                <Form.Input name = 'Email' label='Email' required type = 'text' placeholder='Email' style={{width: "100%" }} onChange = {handleChange} />
            </Form.Field>
            <Form.Field >
             <Form.Input name = 'Password' label='Password' required type = 'password' placeholder='Password' style={{width: "100%" }} onChange = {handleChange} />
            </Form.Field>
            <Form.Field>
              {errorStatement}
              </Form.Field>
            {
                isSignUp && (
                <Form.Field >
                     <Form.Input name = 'ConfirmPassword' label='Confirm Password' required type = 'password' placeholder='Confirm Password' style={{width: "100%" }} onChange = {handleChange} />
                    </Form.Field>
                    )
            
            } 
            <Button type = 'submit' style={{width: "100%" }}>{
                isSignUp ? ("Sign Up") : ("Sign In")           }
                
            </Button>
            
     </Form>
     <Button style={{width: "100%" ,marginTop: "5px"}} onClick = {handleClick}>{
         isSignUp ?  ("Already have an account? Sign In") : ("Don't Have an Account? Sign Up")
     }
                
            </Button>
    </div>
    </div>
    </>
  );

}

export default Auth;