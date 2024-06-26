package com.assetsglobal.clientform.Client.Form.utility;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageModel {
	private String to;
	private String subject;
	private String text;
}
