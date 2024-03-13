package corprate.priya.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import corprate.priya.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, String> {


}
