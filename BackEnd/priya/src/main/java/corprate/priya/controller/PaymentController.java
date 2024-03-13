package corprate.priya.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import corprate.priya.dto.request.PaymentRequest;
import corprate.priya.dto.response.PaymentListResponse;
import corprate.priya.dto.response.PaymentResponse;
import corprate.priya.service.PaymentService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/payment")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentservice;

    @PreAuthorize("hasAuthority('admin:create')")
    @PostMapping("/add")
    public ResponseEntity<?> createPayment(@RequestBody PaymentRequest paymentrequest){
        PaymentResponse response = new PaymentResponse();

        try{
            response = paymentservice.createPayment(paymentrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPayment(){

        PaymentListResponse paymentListResponse = new PaymentListResponse();

        try{
            paymentListResponse = paymentservice.getAllPayment();
            return new ResponseEntity<>(paymentListResponse, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(paymentListResponse, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/put")
    public ResponseEntity<PaymentResponse> updatePayment(@RequestParam String paymentid, @RequestBody PaymentRequest request) {
        PaymentResponse response = new PaymentResponse();
        try {
            response = paymentservice.updatePayment(paymentid, request);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch (Exception e) {
            response.setMessage("Failed to update payment");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/delete")
    public ResponseEntity<PaymentResponse> deletePayment(@RequestParam String paymentid){

        PaymentResponse response = new PaymentResponse();

        try{
            response = paymentservice.deletePayment(paymentid);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Failed to delete event: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
