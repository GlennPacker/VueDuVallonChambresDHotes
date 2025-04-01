import { bookingSiteCalendars, bookingSiteRoomAvailable } from '@/services/bookingSiteCalendarService';

export async function POST(
  req: Request,
) {
  const body = await req.json();
  const { 
    startDate: s, 
    endDate: e, 
    numberOfAdults,
    numberOfChildren,
    roomType,
  } = body;
  const startDate = new Date(s);
  const endDate = new Date(e);

  const selectedRooms = bookingSiteCalendars.filter(r => r.max >= (+numberOfAdults + +numberOfChildren) && r.roomTypes.includes(roomType));
  
  const availableRooms: number[] = [];

  for (const room of selectedRooms) {
    const availability = 
      await Promise.all([
        room.booking ? bookingSiteRoomAvailable(room.booking, startDate, endDate, room.room) : Promise.resolve(true),
        room.expedia ? bookingSiteRoomAvailable(room.expedia, startDate, endDate, room.room) : Promise.resolve(true),
        room.airbnb ? bookingSiteRoomAvailable(room.airbnb, startDate, endDate, room.room) : Promise.resolve(true)
      ])
    
      if(availability.every(r => r)) {
        availableRooms.push(room.room);
      }
  }

  if (!availableRooms.length) {
    return new Response('No Rooms', {
      status: 404,
      headers: { 'Content-Type': 'application/json'}
    })
  }

  return new Response(JSON.stringify({availableRooms}), {
    status: 200,
    headers: { 'Content-Type': 'application/json'}
  });
}
