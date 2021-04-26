package com.visionOtica.VisionOtica.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.visionOtica.VisionOtica.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{

	List<Client> findAllByOrderByNomeAsc();
	
	Optional<Client> findByEmail(String email);
}
