package com.visionOtica.VisionOtica.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.visionOtica.VisionOtica.entities.Product;

import model.enums.CategoriaOculos;


public interface ProductRepository extends JpaRepository<Product, Long>{

	List<Product> findAllByOrderByNameAsc();
	
	List<Product> findAllByCategoria(CategoriaOculos categoria);
}
