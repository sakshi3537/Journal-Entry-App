import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { Button, Form, Dropdown, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import dropdownValues from  '../../constants/dropdown.js'
import {createCard} from '../../actions/actions.js'


const CreateCard = (flagForCreateCard, setFlagForCreateCard) => {
  const dispatch = useDispatch();  
  const [open, setOpen] = useState(false);
  const fileInputRef = React.createRef();
  const [card, setCard] = useState({title: '', creator: '', tags: [], caption: '', image: ''});
  const fileChange = (e) => {
    setCard({ ...card, image: e.target.files[0] });
  };
  const handleSubmit = async (e) => {  

      e.preventDefault();
      dispatch(createCard(card));
      //setCard({title: '', creator: '', tags: [], caption: '', image: ''});
  };
  
  return (
    
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Create Card</Button>}
    >
      
      <Modal.Header className = "header">Create Card</Modal.Header>
      <Modal.Content >
          
      <Form className = "formStyles" onSubmit = {handleSubmit}>
            <Form.Field >
                <label  >Title</label>
                <input placeholder='Title' style={{width: "370px" }} onChange = {(e) => {setCard({...card, title : e.target.value})}}/>
            </Form.Field>
            <Form.Field >
            <label >Creator</label>
             <input placeholder='Creator' style={{width: "370px" }} onChange = {(e) => {setCard({...card, creator : e.target.value})}}/>
            </Form.Field>
            <Form.Field >
            <label > Tags </label>
                <Dropdown placeholder='Tags' multiple search selection options={dropdownValues} style={{width: "370px" }} onChange = {(e) => {setCard({...card, tags : e.target.value})}} />
            </Form.Field>
            <Form.Field >
                <label >Caption</label>
                <input placeholder='Caption' style={{width: "370px" }} onChange = {(e) => {setCard({...card, caption : e.target.value})}}/>
            </Form.Field>
            <Form.Field className = "imageStyles">
             <Button    content="Choose File"
             labelPosition="left"
              icon="file"
              onClick={() => fileInputRef.current.click()}
              
             />
            <input
              ref={fileInputRef}
              type="file"
              hidden
              onChange={fileChange}
            />
     </Form.Field>
     </Form>

      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} >Cancel</Button>
        <Button onClick={(e) => {setOpen(false);handleSubmit(e);}}  positive >
          Create Card
        </Button>
      </Modal.Actions>

    </Modal>
  )
}

export default CreateCard;


/*{ <form className = "formStyles">
              <div>
              <label for = "title"> Title </label>
              <input className = "inputStyles" type = "text" name = "title" placeholder = "Title" ></input>
              </div>
              <div>
              <label for = "creator"> Creator </label>
              <input className = "inputStyles" type = "text" name = "creator" placeholder = "Creator"></input>
              </div>
              <span>
                 <label > Tags </label>
                <Dropdown inline placeholder='Tags' multiple search selection options={dropdownValues} style={{width: "370px" }} />
              </span>
              <div>
              <label for = "caption"> Caption </label>
              <input className = "inputStyles" type = "text" name = "caption" placeholder = "Caption"></input>
              </div>

          </form> }*/










// const CreateCard = () => {

//{}
// }
// export default CreateCard