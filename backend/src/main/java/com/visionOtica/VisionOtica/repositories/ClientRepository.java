package com.visionOtica.VisionOtica.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.visionOtica.VisionOtica.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{

	List<Client> findAllByOrderByNameAsc();
}
