const getStoredWishListBook = () => {
    const storedWishListBook = localStorage.getItem('wishList-book');
    if (storedWishListBook) {
        return JSON.parse(storedWishListBook);
    }
    return [];
}

const saveWishListBook = bookId => {
    const storedWishListBooks = getStoredWishListBook();
    const exists = storedWishListBooks.find(wishlistId => wishlistId===bookId); // Check if the id already exists in the array
    if (!exists) {
        storedWishListBooks.push(bookId); // Push the new id to the array
        localStorage.setItem('wishList-book', JSON.stringify(storedWishListBooks)); // Save the updated array in local storage
    }
}

export { getStoredWishListBook, saveWishListBook };
