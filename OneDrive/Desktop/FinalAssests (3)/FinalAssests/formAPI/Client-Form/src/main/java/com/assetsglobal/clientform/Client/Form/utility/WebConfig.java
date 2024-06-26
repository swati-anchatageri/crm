package com.assetsglobal.clientform.Client.Form.utility;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// TODO Auto-generated method stub
		registry.addMapping("/**").allowedOrigins("http://127.0.0.1:5503")
		.allowedMethods("POST")
		.allowedHeaders("*")
		.allowCredentials(true);
	}
}
