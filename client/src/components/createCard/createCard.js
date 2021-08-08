import React, {useState,useRef, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Form, Dropdown, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import dropdownValues from  '../../constants/dropdown.js'
import {createCard, updateCard} from '../../actions/actions.js'
import FileBase64 from 'react-file-base64';
import homepage from '../../images/home.png'
//import Compressor from 'compressjs'


const CreateCard = ({flagForCreateCard,setFlagForCreateCard,currentId,setCurrentId}) => {
  const dispatch = useDispatch();  
  const cards= useSelector((state)=>state.cardReducer);
  const currentCard=cards.find((card)=>(card._id===currentId));
  const [open, setOpen] = useState(flagForCreateCard);
  const cardTemplate={title: '', creator: JSON.parse(localStorage.getItem('profile'))?.result?._id,name: JSON.parse(localStorage.getItem('profile'))?.result?.name, tags: [], caption: '', imageFile: '',_id:''};
  const isCurrentIdNull=(currentId==="")?true:false;
  const updatedCard=(isCurrentIdNull)?{}:{title:currentCard.title,tags:currentCard.tags,caption:currentCard.caption,imageFile:currentCard.imageFile,_id:currentId};
  const [card, setCard] = useState(isCurrentIdNull?cardTemplate:updatedCard);
  useEffect(()=>{
    setOpen(flagForCreateCard);
  },[flagForCreateCard]);
  useEffect(()=>{
    if(currentCard)
    setCard(updatedCard);
    else
    setCard(cardTemplate);
  },[isCurrentIdNull])
  const handleSubmit = async (e) => {  

      e.preventDefault();
      if(currentId==='')
      dispatch(createCard(card));
      else
      dispatch(updateCard(card));
      setCard({title: '', creator: JSON.parse(localStorage.getItem('profile'))?.result?._id,name: JSON.parse(localStorage.getItem('profile'))?.result?.name, tags: [], caption: '', imageFile: '',_id:''});
      setCurrentId('');
  };
  const modalTitle=(currentId!=='')? "Edit Card" : "Create Card";
  const modalAction=(currentId!=='')? "Update Card" : "Create Card";

  // const compress = new Compress()

  // async function resizeImageFn(file) {

  //   const resizedImage = await compress.compress([file], {
  //     size: 2, // the max size in MB, defaults to 2MB
  //     quality: 1, // the quality of the image, max is 1,
  //     maxWidth: 300, // the max width of the output image, defaults to 1920px
  //     maxHeight: 300, // the max height of the output image, defaults to 1920px
  //     resize: true // defaults to true, set false if you do not want to resize the image width and height
  //   })
  //   const img = resizedImage[0];
  //   const base64str = img.data
  //   const imgExt = img.ext
  //   const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt)
  //   return resizedFiile;
  // }

  // resizeImageFn({homepage});

  return (
    <Modal
      onClose={() => {setOpen(false);setFlagForCreateCard(false);}}
      onOpen={() => {setOpen(true);setFlagForCreateCard(true);}}
      open={open}
    >
      
      <Modal.Header className = "header">{modalTitle}</Modal.Header>
      <Modal.Content >
          
      <Form className = "formStyles"  style={{textAlign:"center"}} onSubmit = {handleSubmit}>
            <Form.Field >
                <label  >Title</label>
                <input placeholder='Title' style={{width: "60%" }} onChange = {(e) => {setCard({...card, title : e.target.value})}} value={card.title}/>
            </Form.Field>
             {/* <Form.Field >
            <label >Creator</label>
             <input placeholder='Creator' style={{width: "60%" }} onChange = {(e) => {setCard({...card, creator : e.target.value})}} value={card.creator}/>
            </Form.Field>  */}
            <Form.Field >
            <label > Tags </label>
                <Dropdown placeholder='Tags' multiple search selection options={dropdownValues} style={{width: "60%" }} onChange = {(e, { value }) => setCard({ ...card, tags: value })} value={card.tags} />
            </Form.Field>
            <Form.Field >
                <label >Caption</label>
                <input placeholder='Caption' style={{width: "60%" }} onChange = {(e) => {setCard({...card, caption : e.target.value})}} value={card.caption}/>
            </Form.Field>
            <Form.Field>
            <label >Image</label>
            <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setCard({ ...card, imageFile: base64 })} value={card.imageFile}/>

            </Form.Field>
     </Form>

      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => {setOpen(false);setFlagForCreateCard(false);setCurrentId('');}} >Cancel</Button>
        <Button onClick={(e) => {setOpen(false);handleSubmit(e);setFlagForCreateCard(false);}}  positive >
        {modalAction}
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