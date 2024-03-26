const getStoredBookRead = () => {
    const storedBookRead = localStorage.getItem('book-read');
    if (storedBookRead) {
        return JSON.parse(storedBookRead);
    }
    return [];
}

const saveReadBooks = bookId => {
    const storedBookReads = getStoredBookRead();
    const exists = storedBookReads.find(readId => readId === bookId); // Check if the id already exists in the array
    if (!exists) {
        storedBookReads.push(bookId); // Push the new id to the array
        localStorage.setItem('book-read', JSON.stringify(storedBookReads)); // Save the updated array in local storage
    }
}

export { getStoredBookRead, saveReadBooks };
