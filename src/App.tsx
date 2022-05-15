import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Note } from "./models/note.model";
import "./App.css";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "schedule meeting",
      color: "#dfdfdf",
      date: new Date().toDateString(),
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
