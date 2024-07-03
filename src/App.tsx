/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './Constants';
import { LanguageSelector } from './Components/LanguageSelector';
import { SectionType } from './types.ts';

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangelanguages,
    setFromLanguage,
    setToLanguage
  }=useStore()
  
  return (
    <>
    <Container>
    <h2>Google Translate</h2>
      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage}></LanguageSelector>
          <Form.Control as='textarea' autoFocus placeholder='Estribe el texto' style={{height:'150px'}}>
          </Form.Control>
        </Stack>
        </Col>
        <Col>
        <Button variant='link' disabled={fromLanguage===AUTO_LANGUAGE} onClick={interchangelanguages}>
            Intercambiar
        </Button>
        </Col>
        <Col>
        <Stack gap={2}>
          <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage}></LanguageSelector>
          <Form.Control as='textarea' placeholder='Traduccion' style={{height:'150px'}}>
          </Form.Control>
        </Stack>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
