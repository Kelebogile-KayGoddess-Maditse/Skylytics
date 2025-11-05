package com.skylytics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SkylyticsApplication {
    public static void main(String[] args) {
        SpringApplication.run(SkylyticsApplication.class, args);
        System.out.println("✅ Skylytics backend running on http://localhost:8080");
    }
}
