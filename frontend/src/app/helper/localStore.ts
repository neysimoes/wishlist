export const getLocalWishlist = () => JSON.parse(localStorage.getItem('wishlist') || '[]') || []
