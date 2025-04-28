import { createClient } from "./client"

const createBooking = async ({name, numberOfAdults, numberOfChildren, dinner, room, email, startDate, endDate, totalPrice, pricePerNight, roomType }) => {
  const client = createClient();

  const { error } = await client.from('Bookings').insert({name, numberOfAdults, numberOfChildren, dinner: !!dinner, room, email, startDate, endDate, totalPrice, pricePerNight, roomType })
  return error;
}

export { 
  createBooking 
}