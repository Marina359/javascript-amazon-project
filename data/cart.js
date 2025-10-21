export const cart = [];

export function addToCart(productId) {
  let matchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quentity += 1;
    } else {
      cart.push({
        productId: productId,
        quentity: 1
      });
    }
}