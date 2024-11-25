export type ReviewRequestFormModel = {
  name: string;
  gardening: boolean;
  strimming: boolean;
  repointing: boolean;
  powerWashing: boolean;
  generalMaintenance: boolean;
  other: boolean;
  pleaseSpecify: string | null;
  email: string;
  reviewRequest: boolean;
  gutters: boolean;
  tiling: boolean;
  painting: boolean;
}
