import { Button, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="container-fluid">
        <h1 className="ms-5 mt-5">Contact Me</h1>
      <Form className="ms-5 mt-3">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={9} />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
