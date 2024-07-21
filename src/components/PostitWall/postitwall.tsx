import "./postitwall.css"
import { Button } from 'react-bootstrap'
import Postit from '../Postit/postit'
import { useTranslation } from 'react-i18next'
import CreatePostitModal from './createPostitModal';
import { useState } from 'react';
import { PostitType } from '../../types/postit';

const Postitwall = () => {
    const {t}=useTranslation();
    const [showCreatePostitModal,setShowCreatePostitModal]=useState(false);
    const [postIts,setPostIts]=useState<PostitType[]>([{message:'Wow super webseite wir würden gerne mit ihnen in kontakt treten',sender:'crispin',color:0}]);

    const addPostit=(postit:PostitType)=>{
        setPostIts((prev)=>[...prev,postit])
    }

  return (
    <>
        <Button variant='outline-primary' onClick={()=>setShowCreatePostitModal(true)}>
            {t("create postit")}
        </Button>
        <CreatePostitModal show={showCreatePostitModal} handleClose={()=>setShowCreatePostitModal(false)} addPostit={addPostit}/>
        <div className='postits'>
            {postIts.map((c,idx)=><Postit {...c} key={idx}/>)}
        </div>
    </>
  )
}

export default Postitwall