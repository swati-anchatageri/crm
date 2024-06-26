package com.assetsglobal.clientform.Client.Form.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assetsglobal.clientform.Client.Form.entity.User;
import com.assetsglobal.clientform.Client.Form.mailservice.MailService;
import com.assetsglobal.clientform.Client.Form.repository.UserRepository;
import com.assetsglobal.clientform.Client.Form.service.UserService;
import com.assetsglobal.clientform.Client.Form.utility.MessageModel;

import jakarta.mail.MessagingException;


@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MailService mailService;
	
	@Override
	public User addUser(User user) {
		try {
			sendEmail(user);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return userRepository.save(user); 
	}

	private void sendEmail(User user) throws MessagingException {
		String htmlContent = "<html><head><style>" +
                "body { font-family: Arial, sans-serif; }" +
                "table { width: 100%; border-collapse: collapse; }" +
                "th, td { padding: 8px; border-bottom: 1px solid #ddd; }" +
                "th { background-color: #f2f2f2; }" +
                "</style></head><body>" +
                "<h2 style='text-align: center;'>Regarding AssetsGlobal Leads</h2>" +
                "<table>" +
                "<tr><th>Field</th><th>Value</th></tr>" +
                "<tr><td>User Name</td><td>" + user.getUserName() + "</td></tr>" +
                "<tr><td>Phone Number</td><td>" + user.getPhoneNumber() + "</td></tr>" +
                "<tr><td>Message</td><td>" + user.getMessage() + "</td></tr>" +
                "<tr><td>Email</td><td>" + user.getEmail() + "</td></tr>" +
                "</table></body></html>";
		MessageModel model = MessageModel.builder().to("marketing@assetsglobal.in")
				.subject("REgarding AssetsGlobal Leads")
				.text(htmlContent).build();
		mailService.sendMailMessage(model);
	}

}
