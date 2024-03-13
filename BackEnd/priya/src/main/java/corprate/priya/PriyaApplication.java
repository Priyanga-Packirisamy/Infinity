package corprate.priya;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import corprate.priya.dto.request.RegisterRequest;
import corprate.priya.enumerated.Role;
import corprate.priya.service.UserService;

@SpringBootApplication
public class PriyaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PriyaApplication.class, args);
	}


	// @Bean
	// public CommandLineRunner commandLineRunner(UserService userService)
	// {
	// 	return args->{
	// 		var user=RegisterRequest.builder()
	// 		.name("Admin")
	// 		.email("admin@gmail.com")
	// 		.role(Role.USER)
	// 		.password("Admin@123")
	// 		.build();
	// 		userService.register(user);
	// 	};
	// }

}
