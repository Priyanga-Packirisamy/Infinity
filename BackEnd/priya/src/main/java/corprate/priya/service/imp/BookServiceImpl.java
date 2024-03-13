package corprate.priya.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import corprate.priya.dto.request.BookRequest;
import corprate.priya.dto.response.BookListResponse;
import corprate.priya.dto.response.BookResponse;
import corprate.priya.model.Book;
import corprate.priya.repository.BookRepository;
import corprate.priya.service.BookService;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public BookResponse createBook(BookRequest book) {

        var boo = Book.builder()
                        .eventid(book.getEventid())
                        .orgid(book.getOrgid())
                        .bookdate(book.getBookdate())
                        .eventdate(book.getEventdate())
                        .status(book.getStatus())
                        .city(book.getCity())
                        .paid(book.getPaid())
                        .build();

        bookRepository.save(boo);

        return BookResponse.builder().message("Book added successfully").build();
    }

    @Override
    public BookListResponse getAllBook(){

        List<Book> boo = bookRepository.findAll();
        return BookListResponse.builder()
            .book(boo)
            .build();
    }

    @Override
    public BookResponse updateBook(String bookid, BookRequest BookRequest) {
        BookResponse response = new BookResponse();
        Optional<Book> BookOptional = bookRepository.findById(bookid);
        if (BookOptional.isPresent()) {
            Book book = BookOptional.get();
            book.setEventid(BookRequest.getEventid());
            book.setOrgid(BookRequest.getOrgid());
            book.setBookdate(BookRequest.getBookdate());
            book.setEventdate(BookRequest.getEventdate());
            book.setStatus(BookRequest.getStatus());
            book.setCity(BookRequest.getCity());
            book.setCount(BookRequest.getCount());
            book.setPaid(BookRequest.getPaid());
            // Save the updated Book
            bookRepository.save(book);
            response.setMessage("Booking updated successfully");
        } else {
            response.setMessage("Booking not found");
        }
        return response;
    }

    @Override
    public BookResponse deleteBook(String bookid){
        Optional<Book> BookOptional = bookRepository.findById(bookid);

        if(!BookOptional.isPresent()){
            return BookResponse.builder().message("Book not found").build();
        }

        bookRepository.deleteById(bookid);

        return BookResponse.builder().message("Book deleted").build();
    }


    // Other CRUD methods can be implemented similarly
}
