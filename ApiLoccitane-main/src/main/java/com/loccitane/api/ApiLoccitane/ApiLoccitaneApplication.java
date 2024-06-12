package com.loccitane.api.ApiLoccitane;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "API Loccitane", version = "1.9.0",description = "EndPoints do Estoque Loccitane"))
public class ApiLoccitaneApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiLoccitaneApplication.class, args);
	}

}
