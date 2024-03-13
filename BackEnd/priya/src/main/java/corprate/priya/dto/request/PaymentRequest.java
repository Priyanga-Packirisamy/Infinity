package corprate.priya.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequest {
    private String bookid;
    private String senderacct;
    private String receiveracct;
    private String transactiondate;
    private String orgname;
    private String transtime;
}

