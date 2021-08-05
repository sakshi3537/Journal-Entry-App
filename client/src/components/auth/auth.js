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

const Auth = () => {
  const dispatch = useDispatch();  
  const [isSignUp,setIsSignUp] = useState(false);
  const [formData,setFormData] = useState();
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
      setFormData({...formData,[e.target.name]:e.target.value})
      //console.log(formData)
  }

  const handleClick = () => {

    setIsSignUp(!isSignUp) 

  }
  return (
      <div className = "formStyles" style={{textAlign:"center"}}>  
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
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        required
        label='Last name'
        name='LastName'
        placeholder='Last name'
      />
    </Form.Group>
    
      )
          }
            <Form.Field >
                <label  >Email</label>
                <input name = 'Email' required type = 'text' placeholder='Email' style={{width: "370px" }} onChange = {handleChange} />
            </Form.Field>
            <Form.Field >
            <label >Password</label>
             <input name = 'Password' required type = 'password' placeholder='Password' style={{width: "370px" }} onChange = {handleChange} />
            </Form.Field>
            {
                isSignUp && (
                <Form.Field >
                    <label >Confirm Password</label>
                     <input name = 'ConfirmPassword' required type = 'password' placeholder='Confirm Password' style={{width: "370px" }} onChange = {handleChange} />
                    </Form.Field>
                    )
            
            } 
            <Button type = 'submit' style={{width: "370px" }}>{
                isSignUp ? ("Sign Up") : ("Sign In")           }
                
            </Button>
            
     </Form>
     <Button style={{width: "370px" ,marginTop: "5px"}} onClick = {handleClick}>{
         isSignUp ?  ("Already have an account? Sign In") : ("Don't Have an Account? Sign Up")
     }
                
            </Button>
    </div>
  )

}

export default Auth;