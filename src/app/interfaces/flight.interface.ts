export interface Flight {
  id: string,
  departure: string,
  departureDate: number,
  arrival: string,
  arrivalDate: number,
  price: number,
  leftInStock: number,
  transfer?: string,
  travelClass?: string,
  company: string,
  logo: string
}
