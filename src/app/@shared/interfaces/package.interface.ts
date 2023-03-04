export interface Package {
  name: string;
  photo: string;
  popular: boolean;
  price: number;
  currency: string;
  deliveryDays: number;
  details: Details[];
}

export interface Details {
  name: string;
  value: Value[];
}

export interface Value {
  name: string;
  value: string;
}
