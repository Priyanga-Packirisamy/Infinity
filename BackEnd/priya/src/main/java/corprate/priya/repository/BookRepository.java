package corprate.priya.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import corprate.priya.model.Book;

public interface BookRepository extends JpaRepository<Book, String> {


}
