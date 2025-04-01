import { bookingSiteCalendars, bookingSiteRoomAvailable } from '@/services/bookingSiteCalendarService';
import { sendReservationEmail } from '../services/sendEmailService';

export async function POST(
  req: Request,
) {
  const body = await req.json();
  const { 
    startDate: s, 
    endDate: e, 
    room: roomNumber,
  } = body;
  const startDate = new Date(s);
  const endDate = new Date(e);

  const room = bookingSiteCalendars.find(r => r.room === roomNumber);
  if(!room) {
    return new Response('Room Not Found', {
      status: 404,
    })
  }

  const availability = 
    await Promise.all([
      room.booking ? bookingSiteRoomAvailable(room.booking, startDate, endDate, room.room) : Promise.resolve(true),
      room.expedia ? bookingSiteRoomAvailable(room.expedia, startDate, endDate, room.room) : Promise.resolve(true),
      room.airbnb ? bookingSiteRoomAvailable(room.airbnb, startDate, endDate, room.room) : Promise.resolve(true)
    ]);
  
  if(!availability.every(r => r)) {
    return new Response('No longer available', {
        status: 400,
    });
  }

  try {
    await sendReservationEmail({ 
      ...body,
      startDate,
      endDate,
      sendTo: [process.env.EMAIL, process.env.EMAIL2]
    });
    return new Response(null, { status: 204 });
  } catch (e) {
    const { message } = e as { message: string };

    return new Response(JSON.stringify({
      message: 'unable to send email',
      error: message
    }), {
      status: 500,
    });
  }
}