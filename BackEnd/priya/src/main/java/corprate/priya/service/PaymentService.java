package corprate.priya.service;

import corprate.priya.dto.request.PaymentRequest;
import corprate.priya.dto.response.PaymentListResponse;
import corprate.priya.dto.response.PaymentResponse;

public interface PaymentService {

    PaymentResponse createPayment(PaymentRequest payment);

    PaymentListResponse getAllPayment();

    PaymentResponse updatePayment(String paymentid, PaymentRequest request);

    PaymentResponse deletePayment(String paymentid);

}
