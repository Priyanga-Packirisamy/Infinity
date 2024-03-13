package corprate.priya.dto.response;

import java.util.List;

import corprate.priya.model.Book;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookListResponse {
    private List<Book> book;
}
