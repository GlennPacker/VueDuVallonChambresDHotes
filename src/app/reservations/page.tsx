'use client'
import React from 'react';
import AvailabilityCheckForm from '@/components/availabilityCheck/AvailabilityCheckForm';
import { Availability, RoomSelected } from '@/types/reservationFormModels';
import AvailableRooms from '@/components/availableRooms/AvailableRooms';
import ReservationDetailsForm from '@/components/reservationDetailsForm/ReservationDetailsForm';

const Page = () => {
  const [availability, setAvailability] = React.useState<Availability | null>(null);
  const [selectedRoom, setSelectedRoom] = React.useState<RoomSelected | null>(null);

  return <>
    {!selectedRoom && <>

      <AvailabilityCheckForm onAvailability={(data: Availability | null) => setAvailability(data)} />

      <AvailableRooms
        availability={availability}
        roomSelection={selection => setSelectedRoom(selection)}
      />
    </>
    }

    <ReservationDetailsForm selectedRoom={selectedRoom} />
  </>
}

export default Page