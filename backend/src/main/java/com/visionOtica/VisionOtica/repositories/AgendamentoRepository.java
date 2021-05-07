package com.visionOtica.VisionOtica.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.visionOtica.VisionOtica.entities.Agendamento;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long>{

	List<Agendamento> findAllByOrderByNomeAsc();	
}
