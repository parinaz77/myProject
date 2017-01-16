export function selectBook(book) {
	// console.log('book is selected',book.title)
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
