import { sendEmail } from "./primaryEmailService";
import { secondarySendEmail } from "./secondaryEmailService";

export const sendReservationEmail = async ({name, numberOfAdults, numberOfChildren, dinner, room, email, startDate, endDate, totalPrice, pricePerNight, sendTo, 
  roomType }) => {
  const message = 
    `Vue Du Vallon booking reservation request    
     Name: ${name}
     Dates: ${ startDate.toLocaleDateString("en-UK") } - ${ endDate.toLocaleDateString("en-UK") }
     Adults: ${ numberOfAdults } ${ numberOfChildren ? `Children: ${ numberOfChildren }` : '' } 
     Dinner: ${ dinner ? 'Yes' : 'No' }
     Room: ${roomType} - room ${room}
     Price: €${ totalPrice } (€${pricePerNight} per night)

     We will be in touch soon to confirm your booking, if you have not heard anything within 48 hours please drop us an email info@vueduvallon.fr
    `;
  
  return Promise.all([
    ...sendTo.map(address => sendEmail(message, `New Booking Request`, email, address)),
    sendEmail(message, `New Booking Request`, 'info@vueduvallon.fr', email),
    ...sendTo.map(address => secondarySendEmail(message, `New Booking Request`, email, address)),
  ])
}