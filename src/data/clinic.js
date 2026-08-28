export const clinic = {
  name: 'DENTAL CLINICa',
  rating: 4.9,
  reviewCount: 281,
  address: 'FA-99, Thokar-4, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi, Delhi 110025',
  phoneDisplay: '083687 84559',
  phoneTel: '08368784559',
  whatsapp: '919625790976', // digits only, with country code, for wa.me links
  whatsappDisplay: '+91 9625790976',
  hours: 'Open until 11 PM',
  mapsQuery: encodeURIComponent(
    'FA-99, Thokar-4, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi, Delhi 110025'
  ),
}

export const waLink = (message) =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`

export const bookingMessage =
  "Hello DENTAL CLINICa, I'd like to book a dental appointment. Could you please share the available slots?"

export const generalMessage =
  'Hello DENTAL CLINICa, I have a question about your dental treatments.'

export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${clinic.mapsQuery}`
export const mapsEmbedLink = `https://www.google.com/maps?q=${clinic.mapsQuery}&output=embed`
