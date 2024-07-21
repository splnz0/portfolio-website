import "./createPostitModal.css"

import { ChangeEvent, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { PostitType } from "../../types/postit";
import Postit from "../Postit/postit";

interface CreatePostitModalProps{
    show:boolean;
    handleClose:()=>void;
    addPostit:(arg0: PostitType)=>void;
}

const CreatePostitModal = ({show,handleClose,addPostit}:CreatePostitModalProps) => {
    const {t}=useTranslation();
    const [sender,setSender]=useState("")
    const [message,setMessage]=useState("")
    const [color,setColor]=useState(0)

    const handleColorChange=(e:ChangeEvent<HTMLSelectElement>)=>{
        const {value} = e.target;
        const colorNumber=parseInt(value);
        setColor(colorNumber)
    }
    const handleSenderChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setSender(value)
    }

    const handleMessageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setMessage(value)
    }
    const savePostit=()=>{
        addPostit({sender,message,color})
        onClose();
    }

    const onClose=()=>{
        setSender("");
        setMessage("");
        setColor(0);
        handleClose();
    }
  return (
    <Modal 
        show={show} 
        onHide={onClose} 
        dialogClassName="mymodal"
        contentClassName="mymodal"
    >
        <Modal.Header closeButton>
          <Modal.Title>{t("create postit")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                {t("postit info")}
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{t("your name")}</Form.Label>
                            <Form.Control onChange={handleSenderChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{t("your message")}</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleMessageChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{t("your color")}</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={handleColorChange}>
                                <option value={0}>{t("yellow")}</option>
                                <option value={1}>{t("red")}</option>
                                <option value={2}>{t("green")}</option>
                                <option value={3}>{t("purple")}</option>
                                <option value={4}>{t("blue")}</option>
                                <option value={5}>{t("orange")}</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    {t("preview")}
                    <Postit message={message} color={color} sender={sender}/>
                </div>
            </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            {t("abort")}
          </Button>
          <Button variant="primary" onClick={savePostit}>
            {t("save postit")}
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default CreatePostitModal