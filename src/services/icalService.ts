import { AvailabilityForm, ReservationForm } from "@/types/reservationFormModels";

const availabilityRequest = async (reservationForm: ReservationForm) => {
  try {
  const response = await fetch('/api/availabilityRequest', {
    method: 'POST',
    body: JSON.stringify(reservationForm),
  })
  
  return [200,204].includes(response.status);
} catch {
  return false;
}
}

const checkAvailability = async (availabilityForm: AvailabilityForm) => {
  const response = await fetch('/api/checkAvailability', {
    method: 'POST',
    body: JSON.stringify(availabilityForm),
  })

  if(response.status === 200) {
    const body = await response.json();
    return body;
  }
  throw new Error('problems with booking');  
}



export { availabilityRequest, checkAvailability }