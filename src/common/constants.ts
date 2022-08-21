export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers',
  FlightQueue = 'flights',
  BrandQueue = 'brand',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
  SEED = 'SEED_USERS',
  STATUS = 'STATUS',
}

export enum BrandMSG {
  CREATE = 'CREATE_BRAND',
  FIND_ALL = 'FIND_BRANDS',
  FIND_ONE = 'FIND_BRAND',
  UPDATE = 'UPDATE_BRAND',
  DELETE = 'DELETE_BRAND',
  VALID_BRAND = 'VALID_BRAND',
  STATUS = 'STATUS_BRAND',
}
