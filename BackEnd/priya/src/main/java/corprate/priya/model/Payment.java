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
@Table(name = "_payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String paymentid;

    @Column(nullable = false)
    private String bookid;

    @Column(nullable = false)
    private String senderacct;

    @Column(nullable = false)
    private String receiveracct;

    @Column(nullable = false)
    private String transactiondate;

    @Column(nullable = false)
    private String orgname;

    @Column(nullable = false)
    private String transtime;

}
