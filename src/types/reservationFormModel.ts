import { RoomType } from "./roomType";

export type ReservationFormModel = {
  dinner: '',
  email: string;
  endDate: Date;
  name: string;
  numberOfAdults: number;
  numberOfChildren: number;
  roomType: RoomType;
  startDate: Date;
};