'use client';
import { Form, Button, Alert } from "react-bootstrap";
import { useForm, FieldErrors, Controller } from 'react-hook-form'
import React from "react";
import { Availability, AvailabilityForm, ReservationForm } from "@/types/reservationFormModels";
import { RoomType } from "@/types/roomType";
import { checkAvailability } from "@/services/icalService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './availabilityCheckForm.module.scss';
import Spinner from 'react-bootstrap/Spinner';

type props = {
  onAvailability: (onAvailability: Availability | null) => void;
}

const AvailabilityCheckForm = ({ onAvailability }: props) => {
  const [loading, setLoading] = React.useState<boolean>();
  const [startDate, setStartDate] = React.useState();
  const [minEndDate, setMinEndDate] = React.useState<Date>();
  const [maxEndDate, setMaxEndDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
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
      endDate: '',
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
    if(!dateChange) return;

    const minEndDate = new Date(dateChange);
    const maxEndDate = new Date(dateChange);

    maxEndDate.setDate(maxEndDate.getDate() + 28);
    minEndDate.setDate(minEndDate.getDate() + 1);
    
    setValue("endDate", minEndDate.toString(), {
      shouldDirty: true
    });
    setMinEndDate(minEndDate);
    setMaxEndDate(maxEndDate);
    setEndDate(minEndDate);
    
    onAvailability(null);
  };

  const resetAvailability = () => {
    onAvailability(null);
  }

  const endDateChange = (dateChange) => {
    setValue("endDate", dateChange, {
      shouldDirty: true
    });
    setEndDate(dateChange);
    
    resetAvailability();
  };

  const roomTypeChange = (roomType) => {
    setNumbersHidden([RoomType.Single, RoomType.Double].includes(roomType));
    onAvailability(null);
  }

  const onSubmit = async (data) => {
    setLoading(true);

    const availabilityForm = data as AvailabilityForm;
    // eslint-disable-next-line prefer-const
    let { numberOfAdults, numberOfChildren, roomType } = availabilityForm;
    
    if (roomType === RoomType.Single) {
      numberOfAdults = 1;
      numberOfChildren = 0;
    }
    if (roomType === RoomType.Double) {
      numberOfAdults = 2;
      numberOfChildren = 0;
    }
    
    try {
      const { status, availableRooms } = await checkAvailability({ 
        ...availabilityForm, 
        endDate: availabilityForm.endDate || endDate,
        numberOfAdults, 
        numberOfChildren
      });

      setLoading(false);

      if(status === 'unavailable') {
        setNoAvailability(true);
        return 
      }

      onAvailability({
        ...data,
        numberOfAdults, 
        numberOfChildren,
        availableRooms,
        endDate: availabilityForm.endDate ? new Date(availabilityForm.endDate) : endDate,
      })
    } catch {
      setError(true)
    }
  }

  const onError = (error: FieldErrors<ReservationForm>) => {
    console.log("ERROR:::", error);
  };

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
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
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
            onBlur={() => resetAvailability() }
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
            onBlur={() => resetAvailability() }
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
          control={control}
          {...register("startDate", {
            required: "First night of stay is required"
          })}
          render={() => (
            <DatePicker
              minDate={new Date()}
              dateFormat="dd MMMM YYYY"
              wrapperClassName={styles.datePicker}
              selected={startDate}
              onChange={startDateChange}
            />
          )}
        />
        { errors.startDate && (
              <Form.Text className="text-danger">
                {errors.startDate.message}
              </Form.Text>
            )
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="endDate">
        <Form.Label>Last Night</Form.Label>
        <br/>
        <Controller
          {...register("endDate", {
            required: "Last night of stay is required"
          })}
          control={control}
          render={() => (
            <DatePicker
              disabled={ !startDate }
              minDate={ minEndDate }
              maxDate={ maxEndDate }
              dateFormat="dd MMMM YYYY"
              wrapperClassName={styles.datePicker}
              selected={endDate}
              onChange={endDateChange}
            />
          )}
        />
        { errors.endDate && (
              <Form.Text className="text-danger">
                {errors.endDate.message}
              </Form.Text>
            )
          }
        </Form.Group>

      <div className="center pb2 pt2">
      { !loading && 
        <Button
          variant="primary"
          type="submit"
          className="text-white mb3"
        >
          Check Availability
        </Button>
      }
      { loading && 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
     </div> 

      {
      noAvailability && <Alert variant="danger">
        No Availability on dates chosen
      </Alert>
    }
    </Form>
    </>
  );
};

export default AvailabilityCheckForm;
