
import ical from 'node-ical';
import { RoomType } from '@/types/roomType';
import { Cal } from '@/types/cal';

type BookingSite = {
  room: number;
  booking: string;
  airbnb?: string;
  expedia?: string;
  max: number;
  maxChildren: number;
  roomTypes: RoomType[];
}

export const bookingSiteCalendars: BookingSite[] = [
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1103670509214753675.ics?s=4061c4a83819a4f3092c4199241935a5',
    booking: 'https://ical.booking.com/v1/export?t=569ed396-9826-46a6-a266-de5527177048',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/497318acaa7948de8be579b92867b552.ics',
    max: 3,
    maxChildren: 2,
    room: 1,
    roomTypes: [RoomType.Treble, RoomType.Single]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1104925602556679983.ics?s=8b82ff90fd0468f3e147c3516457643b',
    booking: 'https://ical.booking.com/v1/export?t=d919e20c-dad3-4e0d-a114-a56af105fb7b',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/2c15544415c64929b173e8c408e38625.ics',
    max: 2,
    maxChildren: 0,
    room: 2,
    roomTypes: [RoomType.Double, RoomType.Single]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1105085603170321722.ics?s=ffe7244b2d963919c0cfbf769eb39a6a',
    booking: 'https://ical.booking.com/v1/export?t=f19e5936-4e41-47e8-baf3-fc14c5327e5e',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/2cfa7a76a12f4b1099c503691fcb4fb1.ics',
    max: 4,
    maxChildren: 2,
    room: 3,
    roomTypes: [RoomType.Family]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1106588938559446603.ics?s=a23bec46288cad6a90d181128ceeff9c',
    booking: 'https://ical.booking.com/v1/export?t=dcc747b7-0107-495d-9560-0372853189b7',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/2ff59ca18f7041c39a65819e8aa8dbd0.ics',
    max: 2,
    maxChildren: 0,
    room: 4,
    roomTypes: [RoomType.Double, RoomType.Single]
  },
  {
    airbnb: 'https://www.airbnb.co.uk/calendar/ical/1106948067121306226.ics?s=c07a87d50049d27e683c109538ecf10d',
    booking: 'https://ical.booking.com/v1/export?t=d132db2c-a570-4130-82ca-585cb62594df',
    expedia: 'https://www.expediapartnercentral.com/calendars/export/a4fa84a1536a46cca75ba3c5fffd2b3f.ics',
    max: 5,
    maxChildren: 3,
    room: 5,
    roomTypes: [RoomType.Family]
  }
];

export const bookingSiteRoomAvailable = (url, startDate, endDate, room) => {
  return new Promise((resolve, reject) => {
    try{
    ical.fromURL(url, {}, function(err, data) {     
      if (err) reject(`Error parsing ${url} room ${room}: ${err}`);
          
      const entries = Object.entries(data);
      const dates: Cal[] = entries.map(([_k,v]) => v as Cal);   

      resolve(!dates.some(d => (d.start >= startDate && endDate > d.start) || (d.end > startDate && endDate >= d.end)));
    });
  } catch (e) {
    const { message } = e as { message: string };
      reject(`Error parsing ${url} room ${room}: ${message}`);
    }
  });
}