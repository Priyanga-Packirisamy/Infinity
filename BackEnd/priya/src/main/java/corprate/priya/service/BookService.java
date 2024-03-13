package corprate.priya.service;

import corprate.priya.dto.request.BookRequest;
import corprate.priya.dto.response.BookListResponse;
import corprate.priya.dto.response.BookResponse;

public interface BookService {

    BookResponse createBook(BookRequest event);

    BookListResponse getAllBook();

    BookResponse updateBook(String bookid, BookRequest request);

    BookResponse deleteBook(String bookid);
}
