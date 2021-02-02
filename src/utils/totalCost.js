const totalCost = (carts) => carts.reduce((acc, { price, count }) => (acc + price * count), 0);

export default totalCost;