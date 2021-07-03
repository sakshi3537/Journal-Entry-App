import React from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css'
import dropdownValues from  './constants/dropdown.js'


const App = () => (
  <Form>
    <Form.Field inline>
      <label  >Title</label>
      <input placeholder='Title' style={{width: "370px" }} />
    </Form.Field>
    <Form.Field inline>
      <label >Creator</label>
      <input placeholder='Creator' style={{width: "370px" }} />
    </Form.Field>
    <Form.Field >
        <span>
            <label > Tags </label>
                <Dropdown inline placeholder='Tags' multiple search selection options={dropdownValues} style={{width: "370px" }} />
        </span>
    </Form.Field>
    <Form.Field inline>
      <label >Caption</label>
      <input placeholder='Caption' style={{width: "370px" }}/>
    </Form.Field>
    <Form.Field inline>
      <label >Image</label>
      <input placeholder='Image' style={{width: "370px" }}/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)


export default App



