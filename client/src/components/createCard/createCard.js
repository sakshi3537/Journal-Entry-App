import React, {useState,useRef, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { Button, Form, Dropdown, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import dropdownValues from  '../../constants/dropdown.js'
import {createCard} from '../../actions/actions.js'
import FileBase64 from 'react-file-base64';


const CreateCard = ({flagForCreateCard,setFlagForCreateCard}) => {
  const dispatch = useDispatch();  
  const [open, setOpen] = useState(flagForCreateCard);
  const [card, setCard] = useState({title: '', creator: '', tags: [], caption: '', imageFile: ''});
  const {value}=card.tags;
  useEffect(()=>{
    setOpen(flagForCreateCard);
  },[flagForCreateCard])
  const handleSubmit = async (e) => {  

      e.preventDefault();
      dispatch(createCard(card));
      setCard({title: '', creator: '', tags: [], caption: '', imageFile: ''});
  };
  
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
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
                <Dropdown placeholder='Tags' multiple search selection options={dropdownValues} style={{width: "370px" }} onChange = {(e, { value }) => setCard({ ...card, tags: value })} value={value} />
            </Form.Field>
            <Form.Field >
                <label >Caption</label>
                <input placeholder='Caption' style={{width: "370px" }} onChange = {(e) => {setCard({...card, caption : e.target.value})}}/>
            </Form.Field>
            <Form.Field className = "imageStyles" style={{width:"47%"}}>
             <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setCard({ ...card, imageFile: base64 })} />
            </Form.Field>
     </Form>

      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => {setOpen(false);setFlagForCreateCard(false);}} >Cancel</Button>
        <Button onClick={(e) => {setOpen(false);handleSubmit(e);setFlagForCreateCard(false);}}  positive >
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