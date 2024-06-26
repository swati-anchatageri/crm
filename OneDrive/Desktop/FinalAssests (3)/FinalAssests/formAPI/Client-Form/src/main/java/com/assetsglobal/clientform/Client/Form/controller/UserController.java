package com.assetsglobal.clientform.Client.Form.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assetsglobal.clientform.Client.Form.entity.User;
import com.assetsglobal.clientform.Client.Form.service.UserService;

@CrossOrigin(origins = "http://127.0.0.1:5503", allowCredentials = "true")
@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(value = "addUser")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
}
