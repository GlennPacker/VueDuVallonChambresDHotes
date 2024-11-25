'use client';
import { Form, Button } from "react-bootstrap";
import { ContactFormModel } from '@/types/contactFormModel';
import { useForm, FieldErrors } from 'react-hook-form'
import React from "react";
import { sendEmail } from "@/services/emailService";

const ContactForm = () => {
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      name: "",
      message: "",
    }
  });

  const onSubmit = (data: ContactFormModel) => {
    sendEmail(data);
    setSent(true);
  }

  const onError = (error: FieldErrors<ContactFormModel>) => {
    console.log("ERROR:::", error);
  };

  if (sent) {
    return (
      <>Thank you, we will be in touch as soon as possible.</>
    )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <Form.Text className="text-danger">
            {errors.name.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <Form.Text className="text-danger">
            {errors.email.message}
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          placeholder="Message"
          as="textarea"
          rows={3}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <Form.Text className="text-danger">
            {errors.message.message}
          </Form.Text>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;