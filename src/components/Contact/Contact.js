import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    try {
      const templateParams = { name, email, subject, message };
      // console.log(templateParams);
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.error(e);
    }

    // console.log(
    //   "Name: ",
    //   name,
    //   "Email: ",
    //   email,
    //   "Subject: ",
    //   subject,
    //   "Message",
    //   message
    // );
  };

  return (
    <Form id="contact-form__info" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Row className="form-row">
        <Col lg={6}>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="form-control form-input"
            placeholder="Name"
          ></input>
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </Col>
        <Col lg={6}>
          {" "}
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            className="form-control form-input"
            placeholder="Email Address"
          ></input>
          {errors.email && (
            <span className="error-message">
              Please enter a valid email address
            </span>
          )}
        </Col>
      </Row>
      <Row className="form-row">
        <Col>
          <input
            type="text"
            name="subject"
            {...register("subject", {
              required: {
                value: true,
                message: "Please enter a subject",
              },
              maxLength: {
                value: 150,
                message: "Subject cannot exceed 150 characters",
              },
            })}
            className="form-control form-input"
            placeholder="Subject"
          ></input>
          {errors.subject && (
            <span className="error-message">{errors.subject.message}</span>
          )}
        </Col>
      </Row>
      <Row className="form-row">
        <Col>
          <Form.Control
            as="textarea"
            rows={6}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="form-control form-input"
            placeholder="Message"
          ></Form.Control>
          {errors.message && (
            <span className="error-message">Please enter a message</span>
          )}
        </Col>
      </Row>
      <Button className="submit-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
