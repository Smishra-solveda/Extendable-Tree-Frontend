import React, { useContext, useState } from 'react'
import { PersonContext } from './App'
import {v4 as uuidv4} from 'uuid';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Form, 
  FormGroup, 
  Label, 
  Input 
} from 'reactstrap';

export default function AddNode({parent}) {
  const {handlePersonDataAdd, handlePersonRelationAdd} = useContext(PersonContext);

  const [newUser, setNewUser] = useState({id : uuidv4()});

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function addDetail(detail){
    setNewUser(prev => ({...prev, ...detail}));
  }

  function save() {
    handlePersonDataAdd({...newUser});
    handlePersonRelationAdd([parent, newUser.id]);
    close();
  }

  function close() {
    setNewUser({id: uuidv4()});
    toggle();
  }


  return (
      <li>
        <code>
          <Button color="primary" size="sm" onClick={toggle}>
            +
          </Button>
          
          <div>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Add New Person (child of {parent})</ModalHeader>
              <ModalBody>
                <Form>
                  <FormGroup>
                    <Label for="personName">
                      Name
                    </Label>
                    <Input
                      id="personName"
                      name="name"
                      placeholder="Enter person's name"
                      type="text"
                      onChange={e => addDetail({name: e.target.value})}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="personAge">
                      Age
                    </Label>
                    <Input
                      id="personAge"
                      name="age"
                      placeholder="Enter person's age"
                      type="number"
                      onChange={e => addDetail({age: e.target.value})}
                    />
                  </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={save}>
                  Save
                </Button>
                <Button color="secondary" onClick={close}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </code>
      </li>
  )
}
