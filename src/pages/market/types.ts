export type Coin = {
  symbol: string;
  name: string;
  price: string;
  cap: string;
  change: number;
  color: string;
  spark: number[];
};

export type Stable = {
  symbol: string;
  name: string;
  price: string;
  change: number;
  color: string;
};

export type NewCoin = {
  label: string;
  price: string;
  color: string;
};
