import { useTranslation } from 'react-i18next'
import Header from './components/Header/header';
import Postit from './components/Postit/postit';
import "./App.css"

function App() {
  const {t}=useTranslation();

  return (
    <>
      <Header/>
      <div>
        {t("hello")}
      </div>
      <div className='postits'>
        <Postit sender='Crispin' text='Wow super webseite wir würden gerne mit ihnen in kontakt treten' color={0}>
        </Postit>
        <Postit sender='Crispin' text='Wow super webseite wir würden gerne mit ihnen in kontakt treten' color={1}>
        </Postit>
        <Postit sender='Crispin' text='Wow super webseite wir würden gerne mit ihnen in kontakt treten' color={2}>
        </Postit>
        <Postit sender='Crispin' text='Wow super webseite wir würden gerne mit ihnen in kontakt treten' color={3}>
        </Postit>
        <Postit sender='Crispin' text='Wow super webseite wir würden gerne mit ihnen in kontakt treten' color={4}>
        </Postit>
        <Postit sender='Crispin' text='Wow super webseite wir würden gerne mit ihnen in kontakt treten' color={5}>
        </Postit>
      </div>
    </>
  )
}

export default App
