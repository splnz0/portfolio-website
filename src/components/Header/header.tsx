import "./header.css"
import profileIcon from "../../assets/react.svg"

import { useTranslation } from "react-i18next"
import { Navbar,Nav, NavDropdown, Container } from "react-bootstrap"

const Header = () => {
    const {t,i18n}=useTranslation();


  return (
    <Navbar>
        <Container fluid>
            <Navbar.Brand href="#home" >
                <img src={profileIcon} className="brand-icon"/>
                Crispin Eichler
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className="ms-auto">
                <Nav>
                    <NavDropdown title={t("language")} >
                        <NavDropdown.Item onClick={()=>i18n.changeLanguage("de")}>Deutsch</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>i18n.changeLanguage("en")}>English</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>        
    </Navbar>
  )
}

export default Header