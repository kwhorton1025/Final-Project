import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const ApplyContainer = () => {
  const [applications, setApplications] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
const [editingApplicationId, setEditingApplicationId] = useState(null);

const fetchApplications = async (setApplications) => {
    try {
      const response = await fetch(
        "https://64711dfe3de51400f725550b.mockapi.io/final-project/newMember"
      );
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error Fetching Applications:", error);
    }
  };

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please Fill in all Fields");
      return;
    }

    try {
      if (editingApplicationId) {
        await fetch(
          `https://64711dfe3de51400f725550b.mockapi.io/final-project/newMember/${editingApplicationId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        setEditingApplicationId(null);
      } else {
        const response = await fetch(
          "https://64711dfe3de51400f725550b.mockapi.io/final-project/newMember",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await response.json();
        setApplications([...applications, data]);
      }
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      fetchApplications(setApplications); // Fetch the updated applications after successful update or creation. Create operation of CRUD.
    } catch (error) {
      console.error("Error creating/updating application:", error);
    }
  };

const readApplication = async (id) => {
    try {
      const response = await fetch(
        `https://64711dfe3de51400f725550b.mockapi.io/final-project/newMember/${id}`
      );
      const data = await response.json();
      console.log("Application:", data);
    } catch (error) {
      console.error("Error reading application:", error);
    }
  }; //Read operation of CRUD.

const updateApplication = async (application) => {
    setFormData({
      name: application.name,
      email: application.email,
      message: application.message,
    });
    setEditingApplicationId(application.id);
    readApplication(application.id);
  }; //Update operation of CRUD.

const deleteApplication = async (id) => {
    try {
      await fetch(
        `https://64711dfe3de51400f725550b.mockapi.io/final-project/newMember/${id}`,
        {
          method: "DELETE",
        }
      );
      fetchApplications(setApplications); // Fetch the updated applications after successful deletion.
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  }; //Delete operation of CRUD.

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="page-container">
      <Container className="form-container box-shadow-md">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className="text-color">Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Name Here"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="text-color">Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email Here"
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label className="text-color">Message:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please, tell us about yourself and the horse you would like to purchase..."
            />
          </Form.Group>

          <Button className="button-color" variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
        <hr />

        <div>
          {applications.map((application) => (
            <Card key={application.id} className="mb-3">
              <Card.Body>
                <Card.Title>{application.name}</Card.Title>
                <Card.Text>{application.email}</Card.Text>
                <Card.Text>{application.message}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => updateApplication(application)}
                >
                  Update
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => deleteApplication(application.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}; //Forms where buyers can input their information if they are interested in buying a horse.  I wish when people added their info, the container didn't keep moving up the page.  I tried multiple fixes, and nothing worked, so I left it since the information goes away from the page when it is refreshed.

export default ApplyContainer;
