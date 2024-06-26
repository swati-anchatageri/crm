package com.assetsglobal.clientform.Client.Form.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.assetsglobal.clientform.Client.Form.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
