export type Cities = City[];

export interface City {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface LocalNames {
  wo?: string;
  si?: string;
  eu?: string;
  pl?: string;
  ka?: string;
  sa?: string;
  lo?: string;
  feature_name?: string;
  mi?: string;
  sr?: string;
  en: string;
  ca?: string;
  mk?: string;
  no?: string;
  sh?: string;
  hi?: string;
  cy?: string;
  bs?: string;
  ht?: string;
  zu?: string;
  sl?: string;
  bi?: string;
  nl?: string;
  tl?: string;
  wa?: string;
  gn?: string;
  gd?: string;
  de?: string;
  hr?: string;
  mt?: string;
  yi?: string;
  fi?: string;
  ne?: string;
  fy?: string;
  ml?: string;
  da?: string;
  cs?: string;
  ky?: string;
  ru: string;
  ar?: string;
  zh?: string;
  cu?: string;
  vo?: string;
  be?: string;
  hy?: string;
  to?: string;
  kl?: string;
  fr: string;
  sd?: string;
  ay?: string;
  yo?: string;
  te?: string;
  io?: string;
  oc?: string;
  ta?: string;
  ku?: string;
  az?: string;
  sn?: string;
  bg?: string;
  he: string;
  ur?: string;
  kn?: string;
  av?: string;
  sw?: string;
  ba?: string;
  tw?: string;
  eo?: string;
  th?: string;
  fj?: string;
  sk?: string;
  uz?: string;
  ny?: string;
  ln?: string;
  pt?: string;
  br?: string;
  ee?: string;
  cv?: string;
  ia?: string;
  os?: string;
  lv?: string;
  gv?: string;
  lt?: string;
  am?: string;
  kv?: string;
  tk?: string;
  el?: string;
  ab?: string;
  sq?: string;
  co?: string;
  st?: string;
  mr?: string;
  ce?: string;
  gu?: string;
  an?: string;
  is?: string;
  gl?: string;
  sm?: string;
  km?: string;
  id?: string;
  mg?: string;
  fa?: string;
  hu?: string;
  ig?: string;
  nv?: string;
  pa?: string;
  qu?: string;
  ms?: string;
  vi?: string;
  om?: string;
  tg?: string;
  my?: string;
  bo?: string;
  ie?: string;
  jv?: string;
  su?: string;
  kk?: string;
  or?: string;
  li?: string;
  ps?: string;
  ro?: string;
  rm?: string;
  bm?: string;
  bh?: string;
  af?: string;
  bn?: string;
  et?: string;
  tt?: string;
  nn?: string;
  ga?: string;
  na?: string;
  sv?: string;
  ff?: string;
  fo?: string;
  sc?: string;
  ko: string;
  se?: string;
  lb?: string;
  so?: string;
  ascii?: string;
  ha?: string;
  it?: string;
  es?: string;
  tr?: string;
  ug?: string;
  ja?: string;
  mn?: string;
  kw?: string;
  uk?: string;
  iu?: string;
  oj?: string;
  cr?: string;
}

export interface Weather {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Rain {
  '3h': number;
}

export interface Sys {
  pod: string;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}
