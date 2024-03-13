package corprate.priya.service;

import java.util.List;

import corprate.priya.model.User;
import corprate.priya.dto.request.RegisterRequest;
import corprate.priya.dto.response.RegisterResponse;
import corprate.priya.dto.response.UserDetailResponse;

public interface UserService {

    RegisterResponse register(RegisterRequest request);

    UserDetailResponse getUser(String email);

    List<User> getAllUser();
}
