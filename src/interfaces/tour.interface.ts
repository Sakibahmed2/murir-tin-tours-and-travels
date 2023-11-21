interface ITour {
  name: string
  durationHours: number
  ratingAverage: number
  ratingQuantity: number
  price: number
  imageCover: string
  images: string[]
  createdAt: Date
  startedDates: Date[]
  startedLocation: string
  locations: string[]
  slugs: string
}

export { ITour }
