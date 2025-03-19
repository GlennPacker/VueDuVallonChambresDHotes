import ical from 'node-ical';
import { Cal } from '../../../types/cal';
import { RoomType } from '@/types/roomType';
import { sendEmail } from '../services/emailService';

type BookingSite = {
  room: number;
  booking: string;
  airbnb?: string;
  expedia?: string;
  max: number;
  maxChildren: number;
  roomTypes: RoomType[];
}

const cals: BookingSite[] = [
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1103670509214753675.ics?s=4061c4a83819a4f3092c4199241935a5',
    booking: 'https://ical.booking.com/v1/export?t=d76dc22b-9726-4d10-88fa-ddac640d62c5',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/497318acaa7948de8be579b92867b552.ics',
    max: 3,
    maxChildren: 2,
    room: 1,
    roomTypes: [RoomType.Treble, RoomType.Single]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1104925602556679983.ics?s=8b82ff90fd0468f3e147c3516457643b',
    booking: 'https://ical.booking.com/v1/export?t=6edf21e6-d25b-473b-9451-3cefa7437108',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/2c15544415c64929b173e8c408e38625.ics',
    max: 2,
    maxChildren: 0,
    room: 2,
    roomTypes: [RoomType.Double, RoomType.Single]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1105085603170321722.ics?s=ffe7244b2d963919c0cfbf769eb39a6a',
    booking: 'https://ical.booking.com/v1/export?t=29f1a210-a2ae-4a98-82c5-e8bb7654b827',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/2cfa7a76a12f4b1099c503691fcb4fb1.ics',
    max: 4,
    maxChildren: 2,
    room: 3,
    roomTypes: [RoomType.Family]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1106588938559446603.ics?s=a23bec46288cad6a90d181128ceeff9c',
    booking: 'https://ical.booking.com/v1/export?t=9d02d9c7-171f-467a-ba4f-73c8835ea3f8',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/2ff59ca18f7041c39a65819e8aa8dbd0.ics',
    max: 2,
    maxChildren: 0,
    room: 4,
    roomTypes: [RoomType.Double, RoomType.Single]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1106948067121306226.ics?s=c07a87d50049d27e683c109538ecf10d',
    booking: 'https://ical.booking.com/v1/export?t=3b0d8e4e-ae2a-46d7-841e-30613616db32',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/a4fa84a1536a46cca75ba3c5fffd2b3f.ics',
    max: 5,
    maxChildren: 3,
    room: 5,
    roomTypes: [RoomType.Family]
  }
];

const bookingSiteRoomAvailable = (url, startDate, endDate, room) => {
  return new Promise((resolve, reject) => {
    try{
    ical.fromURL(url, {}, function(err, data) {
      
      if (err) reject(`Error parsing ${url} room ${room}: ${err}`);
          
      const entries = Object.entries(data);
      const dates: Cal[] = entries.map(([_k,v]) => v as Cal);   
      
      if(dates.some(d => (d.start >= startDate && endDate > d.start) || (d.end > startDate && endDate >= d.end))) {
        console.log('available', false);
        console.log(
          url,
          room,
          dates.find(d => (d.start >= startDate && endDate > d.start) || (d.end > startDate && endDate >= d.end))
        );        
      }
      resolve(!dates.some(d => (d.start >= startDate && endDate > d.start) || (d.end > startDate && endDate >= d.end)));
    });
  } catch (e) {
    const { message } = e as { message: string };
      reject(`Error parsing ${url} room ${room}: ${message}`);
    }
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { 
    startDate: s, 
    endDate: e, 
    numberOfAdults,
    email,
    name,
    numberOfChildren,
    roomType,
    dinner
  } = body;
  const startDate = new Date(s);
  const endDate = new Date(e);

  const selectedRooms = cals.filter(r => r.max >= (+numberOfAdults + +numberOfChildren) && r.roomTypes.includes(roomType));
  
  let possibleRooms = '';

  for (const room of selectedRooms) {
    const availability = 
      await Promise.all([
        room.booking ? bookingSiteRoomAvailable(room.booking, startDate, endDate, room.room) : Promise.resolve(true),
        room.expedia ? bookingSiteRoomAvailable(room.expedia, startDate, endDate, room.room) : Promise.resolve(true),
        room.airbnb ? bookingSiteRoomAvailable(room.airbnb, startDate, endDate, room.room) : Promise.resolve(true)
      ])
    
      if(availability.every(r => r)) {
        possibleRooms += `${ room.room }, `
      }
  }

  if (possibleRooms === '') {
    return new Response('no availability', {
      headers: { "content-type": "application/json" },
      status: 404});
  }

    try {
      await sendReservationEmail(name, numberOfAdults, numberOfChildren, dinner, possibleRooms, email);
      return new Response(null, { status: 204 });
    } catch (e) {
      const { message } = e as { message: string };
      return new Response(JSON.stringify({
        message: 'unable to send email',
        error: message
      }), {status: 500});
    }
  }

  const sendReservationEmail = async (name, adults, children, dinner, possibleRooms, email) => {
      const message = 
        `new reservation from ${name}
         adults: ${ adults }
         children: ${ children }
         dinner: ${ dinner ? 'Yes' : 'No' }
         room (any of these): ${possibleRooms.substring(0,possibleRooms.length -1)}
        `;
      
      return await sendEmail(message, `New Booking Request from ${ name }`, email);
  }

  