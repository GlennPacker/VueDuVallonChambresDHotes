export type ReviewFormModel = {
  id: number;
  message: string;
  name: string;
  rating: number | null;
  title: string;
  gardening: boolean;
  strimming: boolean;
  repointing: boolean;
  powerWashing: boolean;
  generalMaintenance: boolean;
  other: boolean;
  pleaseSpecify: string | null;
  valueForMoney: number | null;
  wouldYouUseThemAgain: string | null;
  gutters: boolean;
  tiling: boolean;
  painting: boolean;
}
