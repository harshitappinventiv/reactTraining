// *** create data function ***
function createData(
  id: number,
  img: string,
  price: string,
  mrp: string,
  name: string,
  available: string,
  deliveryType: string,
  details: string,
  store: string
) {
  return {
    id,
    img,
    price,
    mrp,
    name,
    available,
    deliveryType,
    details,
    store,
  };
}

const dataArray = [
  createData(
    1,
    "https://m.media-amazon.com/images/I/61l3aUqHRVL._AC_UY218_.jpg",
    "867.00",
    "5499.00",
    "Zebronics key board",
    "Get it by Saturday, June 26",
    "FREE Delivery by Amazon",
    "Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)",
    "Visit the ASUS Store"
  ),
  createData(
    2,
    "https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg",
    "61990.00",
    "116990.00",
    "ASUS TUF Gaming F15",
    "Get it by Saturday, July 26",
    "FFREE delivery: Sunday, June 27 Details",
    'ASUS TUF Gaming F15 Laptop 15.6" FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10/Fortress Gray/2.30 Kg), FX566LH-HN257T',
    "Visit the ASUS Store"
  ),
  createData(
    3,
    "https://images-na.ssl-images-amazon.com/images/I/71X1U1ukyXL._SL1500_.jpg",
    "799.00",
    "513.00",
    "Cosmic Byte Alien",
    "Get it by Monday, October 26",
    "FFREE delivery: Sunday, June 27 Details",
    "Cosmic Byte Alien Gaming Microphone with 3.5mm jack for PC, Laptop, PS4, Android, iOS (Black/Blue)",
    "Visit the Cosmic Byte Store"
  ),
  createData(
    4,
    "https://m.media-amazon.com/images/I/81V+7FOgdgL._AC_UY218_.jpg",
    "799.00",
    "513.00",
    "Cosmic Byte Alien",
    "Get it by Monday, October 26",
    "FFREE delivery: Sunday, June 27 Details",
    "Cosmic Byte Alien Gaming Microphone with 3.5mm jack for PC, Laptop, PS4, Android, iOS (Black/Blue)",
    "Visit the Cosmic Byte Store"
  ),
  createData(
    5,
    "https://m.media-amazon.com/images/I/81+yNM5yR0L._AC_UL320_.jpg",
    "799.00",
    "513.00",
    "Cosmic Byte Alien",
    "Get it by Monday, October 26",
    "FFREE delivery: Sunday, June 27 Details",
    "Cosmic Byte Alien Gaming Microphone with 3.5mm jack for PC, Laptop, PS4, Android, iOS (Black/Blue)",
    "Visit the Cosmic Byte Store"
  ),
  createData(
    6,
    "https://m.media-amazon.com/images/I/61G5-hNFMYL._AC_UL320_.jpg",
    "799.00",
    "513.00",
    "Cosmic Byte Alien",
    "Get it by Monday, October 26",
    "FFREE delivery: Sunday, June 27 Details",
    "Cosmic Byte Alien Gaming Microphone with 3.5mm jack for PC, Laptop, PS4, Android, iOS (Black/Blue)",
    "Visit the Cosmic Byte Store"
  ),
  createData(
    7,
    "https://m.media-amazon.com/images/I/71fTQrmgIAL._AC_UY218_.jpg",
    "799.00",
    "513.00",
    "Cosmic Byte Alien",
    "Get it by Monday, October 26",
    "FFREE delivery: Sunday, June 27 Details",
    "Cosmic Byte Alien Gaming Microphone with 3.5mm jack for PC, Laptop, PS4, Android, iOS (Black/Blue)",
    "Visit the Cosmic Byte Store"
  ),
  createData(
    8,
    "https://m.media-amazon.com/images/I/51USkPio+cL._AC_UY218_.jpg",
    "799.00",
    "513.00",
    "Cosmic Byte Alien",
    "Get it by Monday, October 26",
    "FFREE delivery: Sunday, June 27 Details",
    "Cosmic Byte Alien Gaming Microphone with 3.5mm jack for PC, Laptop, PS4, Android, iOS (Black/Blue)",
    "Visit the Cosmic Byte Store"
  ),
  createData(
    9,
    "https://m.media-amazon.com/images/I/31WSIIJWd7L._AC_UY218_.jpg",
    "799.00",
    "513.00",
    "Cosmic Byte Alien",
    "Get it by Monday, October 26",
    "FFREE delivery: Sunday, June 27 Details",
    "Cosmic Byte Alien Gaming Microphone with 3.5mm jack for PC, Laptop, PS4, Android, iOS (Black/Blue)",
    "Visit the Cosmic Byte Store"
  ),
];

export default dataArray;
