package corprate.priya.service.imp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import corprate.priya.dto.request.PaymentRequest;
import corprate.priya.dto.response.PaymentListResponse;
import corprate.priya.dto.response.PaymentResponse;
import corprate.priya.model.Payment;
import corprate.priya.repository.PaymentRepository;
import corprate.priya.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService{


    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public PaymentResponse createPayment (PaymentRequest payment) {

        var pay = Payment.builder()
                        .bookid(payment.getBookid())
                        .senderacct(payment.getSenderacct())
                        .receiveracct(payment.getReceiveracct())
                        .transactiondate(payment.getTransactiondate())
                        .orgname(payment.getOrgname())
                        .transtime(payment.getTranstime())
                        .build();

        paymentRepository.save(pay);

        return PaymentResponse.builder().message("Payment added successfully").build();
    }

    @Override
    public PaymentListResponse getAllPayment(){

        List<Payment> pay = paymentRepository.findAll();
        return PaymentListResponse.builder()
            .payment(pay)
            .build();
    }

    @Override
    public PaymentResponse updatePayment(String paymentid, PaymentRequest paymentRequest) {
        PaymentResponse response = new PaymentResponse();
        Optional<Payment> PaymentOptional = paymentRepository.findById(paymentid);
        if (PaymentOptional.isPresent()) {

            Payment payment = PaymentOptional.get();
            payment.setBookid(paymentRequest.getBookid());
            payment.setSenderacct(paymentRequest.getSenderacct());
            payment.setReceiveracct(paymentRequest.getReceiveracct());
            payment.setTransactiondate(paymentRequest.getTransactiondate());
            payment.setOrgname(paymentRequest.getOrgname());
            payment.setTranstime(paymentRequest.getTranstime());

            paymentRepository.save(payment);

            response.setMessage("Payment updated successfully");
        }
        else {
            response.setMessage("Payment not found");
        }

        return response;
    }

    @Override
    public PaymentResponse deletePayment(String paymentid){
        Optional<Payment> PaymentOptional = paymentRepository.findById(paymentid);

        if(!PaymentOptional.isPresent()){
            return PaymentResponse.builder().message("Payment not found").build();
        }

        paymentRepository.deleteById(paymentid);

        return PaymentResponse.builder().message("Payment deleted").build();
    }



}
