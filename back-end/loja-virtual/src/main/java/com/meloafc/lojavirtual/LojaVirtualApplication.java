package com.meloafc.lojavirtual;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class LojaVirtualApplication {

	public static void main(String[] args) {
		SpringApplication.run(LojaVirtualApplication.class, args);
	}
}
