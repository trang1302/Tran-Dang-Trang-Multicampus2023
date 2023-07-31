package com.example.parcsecuritye4.controller;

import com.example.parcsecuritye4.service.Mygmailservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mail")
public class SendMailController {
    @Autowired
    Mygmailservice mygmailservice;
    @GetMapping("/send")
    public String sendEmail(){
        try {
            mygmailservice.sendEmail("phamduyhoang1611@gmail.com", "Spring boot ......", "Lô con cặc");
        }catch (Exception e){
            System.out.println(e.getMessage());
            return  "error";
        }
        return "mail";
    }
}
