import { RoomType } from "./roomType";

export type ReservationForm = RoomSelected & ReservationDetails;

export type Availability = AvailabilityForm & {
  availableRooms: number[];
}

export type RoomSelected = AvailabilityForm & {
  room: number;
  pricePerNight: number;
  totalPrice: number;
}

export type AvailabilityForm = {
  endDate: Date;
  numberOfAdults: number;
  numberOfChildren: number;
  roomType: RoomType;
  startDate: Date;
}

export type ReservationDetails = {
  dinner: boolean,
  email: string;
  name: string;
}