export class Car {
  warehouseId?: number;
  id?: number;
  make?: string | undefined;
  model?: string | undefined;
  yearModel?: number;
  price?: number;
  licensed?: boolean;
  added?: Date;
  warehouseName?: string | undefined;
  warehouseLocation?: string | undefined;

  inCart?: boolean;
};
