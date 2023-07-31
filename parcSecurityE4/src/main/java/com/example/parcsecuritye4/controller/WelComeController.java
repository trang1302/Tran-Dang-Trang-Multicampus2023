package com.example.parcsecuritye4.controller;

import com.example.parcsecuritye4.model.Users;
import com.example.parcsecuritye4.service.CustomUserDetailsService;
import com.example.parcsecuritye4.service.Mygmailservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Random;

@Controller
public class WelComeController {
    @Autowired
    CustomUserDetailsService customUserDetailsService;
    @Autowired
    Mygmailservice mygmailservice;

    @GetMapping("/welcome")
    public String greeting() {
        return "welcome";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }
    @GetMapping("/register")
    public String register(Model model){
        Users myUser = new Users();
        model.addAttribute("user",myUser);
        return "register";
    }
    @PostMapping("/register/save")
    public String saveRegister(@ModelAttribute Users users){
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 20; i++) {
            int randomIndex = random.nextInt(characters.length());
            char randomChar = characters.charAt(randomIndex);
            sb.append(randomChar);
        }
        users.setActivationCode(sb.toString());
        mygmailservice.sendEmail(users.getEmail(), "Account activation", "Please click here: http://localhost:8080/"+users.getActivationCode());
        customUserDetailsService.addNewRegister(users);
        return "redirect:/welcome";
    }
}