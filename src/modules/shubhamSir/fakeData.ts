// *** create data function ***
function createData(
  id: number,
  img: string,
  amount: string,
  off: string,
  name: string,
  available: string,
  deliveryType: string,
  details: string
) {
  return {
    id,
    img,
    amount,
    off,
    name,
    available,
    deliveryType,
    details,
  };
}

const dataArray = [
  createData(
    1,
    "https://m.media-amazon.com/images/I/81Far8eTj3L._AC_SX180_SY120_QL70_.jpg",
    "₹ 867.00",
    "₹ 5,499.00",
    "Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)",
    "Get it by Saturday, June 26",
    "FREE Delivery by Amazon",
    "Choosing the right accessories and hardware isn't always an easy task when setting up something new. Here are the best accessories that you can buy for your gaming PC"
  ),
];

export default dataArray;
