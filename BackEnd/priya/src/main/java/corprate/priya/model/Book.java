package corprate.priya.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String eventid;

    @Column(nullable = false)
    private String orgid;

    @Column(nullable = false)
    private String bookdate;

    @Column(nullable = false)
    private String eventdate;

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private int count;

    @Column(nullable = false)
    private int paid;

}




