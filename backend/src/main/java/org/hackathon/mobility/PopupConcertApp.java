package org.hackathon.mobility;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class PopupConcertApp {
    public static void main(String[] args) {
        SpringApplication.run(PopupConcertApp.class, args);
    }
}