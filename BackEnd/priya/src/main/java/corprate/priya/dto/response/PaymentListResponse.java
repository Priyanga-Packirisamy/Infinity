package corprate.priya.dto.response;

import java.util.List;
import corprate.priya.model.Payment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentListResponse {

    private List<Payment> payment;
}
