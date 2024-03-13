package corprate.priya.service;

import corprate.priya.dto.request.ForgotPasswordRequest;
import corprate.priya.dto.request.LoginRequest;
import corprate.priya.dto.request.RegisterRequest;
import corprate.priya.dto.response.ForgotPasswordResponse;
import corprate.priya.dto.response.LoginResponse;
import corprate.priya.dto.response.RegisterResponse;


public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);

}
