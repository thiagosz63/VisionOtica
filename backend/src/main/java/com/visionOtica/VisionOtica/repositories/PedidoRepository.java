package com.visionOtica.VisionOtica.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.visionOtica.VisionOtica.entities.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long>{

	List<Pedido> findAllByOrderByNomeAsc();	
}
