package corprate.priya.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetailsResponse{
    private String bookid;
    private String senderacct;
    private String receiveracct;
    private String transactiondate;
    private String orgname;
    private String transtime;
}


