'use client';
import { Form, Button, Alert } from "react-bootstrap";
import { useForm, FieldErrors, Controller } from 'react-hook-form'
import React from "react";
import { ReservationFormModel } from "@/types/reservationFormModel";
import { RoomType } from "@/types/roomType";
import { checkAvailability } from "@/services/icalService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './reservationform.module.scss';

const ReservationForm = () => {
  const [sent, setSent] = React.useState(false);
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [numbersHidden, setNumbersHidden] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [noAvailability, setNoAvailability] = React.useState(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }, 
    setValue
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      dinner: '',
      email: "",
      endDate: '',
      name: "",
      numberOfAdults: "",
      numberOfChildren: "",
      roomType: "",
      startDate: ''
    }
  });

  const startDateChange = (dateChange) => {
    setValue("startDate", dateChange, {
      shouldDirty: true
    });
    setStartDate(dateChange);
  };

  const endDateChange = (dateChange) => {
    setValue("endDate", dateChange, {
      shouldDirty: true
    });
    setEndDate(dateChange);
  };

  const roomTypeChange = (roomType) => {
    setNumbersHidden([RoomType.Single, RoomType.Double].includes(roomType));
  }

  const onSubmit = async (data) => {
    if (data.roomType === RoomType.Single) {
      data.numberOfAdults = 1;
      data.numberOfChildren = 0;
    }
    if (data.roomType === RoomType.Double) {
      data.numberOfAdults = 2;
      data.numberOfChildren = 0;
    }

    try {
      const result = await checkAvailability(data);
      console.log('result', result);
      if(result === 'unavailable') setNoAvailability(true);
      if(result === 'requested') setSent(true);
    } catch {
      setError(true)
    }
  }

  const onError = (error: FieldErrors<ReservationFormModel>) => {
    console.log("ERROR:::", error);
  };

  if (sent) {
    return (
      <Alert variant="primary">
        Thank you for your request to book, we will be in touch as soon as possible.
      </Alert>
    )
  }

  if(error) {
    return <Alert variant="danger">
      We are sorry but we were unable to process your request at this time. Please use one of the providers above or send an email to&nbsp;
      <a
        className={styles.email}
        href="mailto:info@vueduvallon.fr?subject=Reservation%20Enquiry">info@vueduvallon.fr
      </a>
    </Alert>
  }

  return (
    <>
    {
      noAvailability && <Alert variant="danger">
        No Availability on dates chosen
      </Alert>
    }
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

      <Form.Group className="mb-3" controlId="roomType">
        <Form.Label>Room Type</Form.Label>
        <Form.Select
          {...register("roomType", { required: "Room Type is required" })}
          onChange={e => roomTypeChange(e.target.value)}
        >
          <option value={RoomType.Single}>Single</option>
          <option value={RoomType.Double}>Double</option>
          <option value={RoomType.Treble}>Treble</option>
          <option value={RoomType.Family}>Family</option>
        </Form.Select>
        {errors.roomType && (
          <Form.Text className="text-danger">
            {errors.roomType.message}
          </Form.Text>
        )}
      </Form.Group>

      { !numbersHidden && <>
          <Form.Group className="mb-3" controlId="numberOfAdults">
          <Form.Label>Number of adults staying</Form.Label>
          <Form.Control
            type="number"
            {...register("numberOfAdults", {
              required: "Number of adults is required",
              min: { value: 1, message: 'At least one adults needs to stay' },
              max: { value: 5, message: 'Max adults in one room is 5' }
            })}
          />
          {errors.numberOfAdults && (
            <Form.Text className="text-danger">
              {errors.numberOfAdults.message}
            </Form.Text>
          )}
        </Form.Group>
        </>
      }

      { !numbersHidden && <>
        <Form.Group className="mb-3" controlId="numberOfChildren">
          <Form.Label>Number of children staying</Form.Label>
          <Form.Control
            type="number"
            {...register("numberOfChildren", {
              min: { value: 0, message: 'minus number is invalid' },
              max: { value: 5, message: 'Max children in one room is 3' }
            })}
          />
          {errors.numberOfChildren && (
            <Form.Text className="text-danger">
              {errors.numberOfChildren.message}
            </Form.Text>
          )}
        </Form.Group>
      </>}

      <Form.Group className="mb-3" controlId="startDate">
        <Form.Label>First Night</Form.Label>
        <br/>
        <Controller
          name="startDate"
          control={control}
          render={() => (
            <DatePicker
              wrapperClassName={styles.datePicker}
              selected={startDate}
              onChange={startDateChange}
            />
          )}
        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="endDate">
        <Form.Label>Last Night</Form.Label>
        <br/>
        <Controller
          name="endDate"
          control={control}
          render={() => (
            <DatePicker
              wrapperClassName={styles.datePicker}
              selected={endDate}
              onChange={endDateChange}
            />
          )}
        />
        </Form.Group>



      <Form.Group className="mb-3" controlId="dinner">
        <Form.Label>Would you like dinner</Form.Label>
        <Form.Check
          type="checkbox"
          {...register("dinner", {})}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="text-white mb3"
      >
        Submit
      </Button>
    </Form>
    </>
  );
};

export default ReservationForm;