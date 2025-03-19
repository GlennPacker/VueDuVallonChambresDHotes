import { ReservationFormModel } from "@/types/reservationFormModel";

const checkAvailability = async (requestDetails: ReservationFormModel) => {
  const response = await fetch('/api/cal', {
    method: 'POST',
    body: JSON.stringify(requestDetails),
  })
  
  if (response.status === 404) return 'unavailable';
  if([200,204].includes(response.status)) return 'requested';
  throw new Error('problems with booking');  
}

export { checkAvailability }