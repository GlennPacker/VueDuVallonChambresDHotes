import { Availability, RoomSelected } from "@/types/reservationFormModels";
import { rooms } from "@/constants/Rooms";
import { dateDiffInDays } from "@/services/availabilityUtils";
import RoomTable from "../roomTable/roomTable";

type props = {
  availability: Availability | null,
  roomSelection: (roomSelected: RoomSelected) => void, 
}

const AvailableRooms = ({ availability, roomSelection }: props) => {
  if(!availability) return <></>

  const seasons = JSON.parse(process.env.NEXT_PUBLIC_SEASON!);
  const prices = JSON.parse(process.env.NEXT_PUBLIC_PRICES!);

  const availableRooms = rooms.filter(r => availability.availableRooms.includes(r.room));
  
  const startYear = availability.startDate.getFullYear();
  const priceBand = seasons.find(s => {
    const seasonStart = new Date(startYear, s.startMonth, s.startDate);
    const seasonEnd = new Date(startYear, s.endMonth, s.endDate);

    return (seasonStart < availability.startDate && availability.startDate < seasonEnd )
  }).priceBand;

  const currentPrices = prices.find(p => p.priceBand === priceBand);
  const dayCount = dateDiffInDays(availability.startDate, availability.endDate);

  const reserve = async room => await roomSelection({
      ...availability,
      room: room.room,
      pricePerNight: room.pricePerNight,
      totalPrice: room.pricePerNight * dayCount
    });
 
  const displayRooms = availableRooms.map(room => {
    const pricePerNight = currentPrices[room.room][`${+availability.numberOfAdults + +availability.numberOfChildren}`];
    
    return {
    ...room,
    pricePerNight,
    totalPrice: pricePerNight * dayCount
  }})

  return displayRooms.map(room => (
    <RoomTable 
      room={room} 
      key={room.room} 
      reserveAction={ () => reserve(room)}
    />
  ))
}

export default AvailableRooms;