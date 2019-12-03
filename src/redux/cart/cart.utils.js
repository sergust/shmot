// Group all items with quantity
export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Checking existed cart item in array
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // If there is equal item, add the item and increment quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If there is no equal item, add this item with quantity 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
