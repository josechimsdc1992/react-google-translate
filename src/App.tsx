/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './Constants';
import { LanguageSelector } from './Components/LanguageSelector';
import { SectionType } from './types.ts';
import { TextArea } from './Components/TextArea.tsx';

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangelanguages,
    setFromLanguage,
    setToLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    loading
  }=useStore()
  
  return (
    <>
    <Container>
    <h2>Google Translate</h2>
      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage}></LanguageSelector>
          <TextArea type={SectionType.From} value={fromText} onChange={setFromText}>
          </TextArea>
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
          <TextArea type={SectionType.To} value={result} onChange={setResult} loading={loading}>
          </TextArea>
        </Stack>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
