package corprate.priya.utils;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

public class MyConstant {
    //User Controller
    public static final String AUTH = "/api/v1/auth";
    public static final String REGISTER = "/register";
    public static final String LOGIN= "/login";


    public static final String ADMIN= "/api/v1/admin";

    public static final String USER = "/api/v1/user";
    public static final String USER_GET = "/get";
    public static final String USER_ALL_GET = "/getall";


    public static final String UPDATE_USER = "/update_user";
    public static final String FORGOT_PASSWORD = "/forgot_pass";
    public static final List<String> ORIGINS= Arrays.asList("http://localhost:5173","http://localhost:4000");
    public static final List<String> HEADERS= Arrays.asList(HttpHeaders.AUTHORIZATION,HttpHeaders.CONTENT_TYPE);
    public static final List<String> METHODS= Arrays.asList(HttpMethod.GET.name(),HttpMethod.POST.name(),
                                            HttpMethod.PUT.name(),HttpMethod.DELETE.name()
                                            ,HttpMethod.PATCH.name(),HttpMethod.HEAD.name(),
                                            HttpMethod.OPTIONS.name());
    public static final String[] WHITELIST  ={
        "api/v1/auth/**",
        "/api/v1/user/get/**",
        "/swagger-ui/**",
        "/swagger-ui.html/",
        "/v3/api-docs/**"
    };

    //SWAGGER
    public static final String SWAGGER_INFO_TITLE ="MY API";
    public static final String SWAGGER_INFO_DESCRIPTION ="MY API Docmentation";
    public static final String SWAGGER_INFO_VERSION ="1.0.0";
    public static final String SWAGGER_INFO_CONTACT_NAME ="Priyanga";
    public static final String SWAGGER_INFO_CONTACT_EMAIL ="727721eucs111@skcet.ac.in";
    public static final String SWAGGER_INFO_CONTACT_URL ="https://example.com";
    public static final String SWAGGER_INFO_SWAGGER_INFO_LICENSE_NAME ="Apache 2.0";
    public static final String SWAGGER_INFO_SWAGGER_INFO_LICENSE_URL ="https://www.apache.org/licenses/LICENSE-2.0";


    //jsonWebToken
    public static final String JWT_LOCALHOST_URL = "http://localhost:8181";
    public static final String JWT_SECURITY_SCHEME_NAME = "bearerAuth";
    public static final String JWT_SECURITY_SCHEME= "bearer";
    public static final String JWT_DESCRIPTION= "Provide JWT token";
    public static final String JWT_BEARER_FORMAT= "JWT";
}
