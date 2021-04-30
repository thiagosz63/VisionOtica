package com.visionOtica.VisionOtica.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.visionOtica.VisionOtica.entities.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long>{

	List<Contato> findAllByOrderByNomeAsc();
}
