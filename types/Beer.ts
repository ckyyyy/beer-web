export type Volume = {
  value: number;
  unit: string;
};

export type MethodDetails = {
  temp: Volume;
  duration: number | null;
};

export type Method = {
  mash_temp: MethodDetails[];
  fermentation: MethodDetails;
  twist: string | null;
};

export type IngredientDetails = {
  name: string;
  amount: Volume;
  add: string | null;
  attribute: string | null;
};

export type Ingredient = {
  malt: IngredientDetails[];
  hops: IngredientDetails[];
  yeast: string;
};

export type Beer = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredient;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};
