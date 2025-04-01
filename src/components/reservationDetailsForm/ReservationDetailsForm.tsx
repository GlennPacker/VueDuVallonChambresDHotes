'use client';
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import React from "react";
import { RoomSelected } from "@/types/reservationFormModels";
import { availabilityRequest } from '@/services/icalService';

type props = {
  selectedRoom: RoomSelected | null
}

const ReservationDetailsForm = ({ selectedRoom }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      dinner: '',
      email: "",
      name: "",
    }
  });

  const [error, setError] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false); 

  if(!selectedRoom) return <></>

  if(error) {
    return <Alert variant="danger">
      <div className="center pt3 pb3">
        We were unable to process the request. Please get in touch via email info@vueduvallon.fr
      </div>
    </Alert>
  }

  if(sent) {
    return (
      <Alert variant="info">
        <div className="center pt3">
          Thank you for your enquiry we will be in contact shortly to confirm your reservation.
        </div>
      </Alert>
    )
  }
    
  const onSubmit = async (data) => {
    setLoading(true);
    const result = await availabilityRequest({
      ...data,
      ...selectedRoom
    });

    if (result) {
      setSent(true);
    } else {
      setError(true);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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

      <Form.Group className="mb-3" controlId="dinner">
        <Form.Label>Would you like dinner</Form.Label>
        <Form.Check
          type="checkbox"
          {...register("dinner", {})}
        />
      </Form.Group>


      { !loading && 
        <Button
          variant="primary"
          type="submit"
          className="text-white mb3"
        >
          Send Booking Enquiry
        </Button>
      }
      { loading && 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }

    </Form>
  );
};

export default ReservationDetailsForm;
