package com.visionOtica.VisionOtica.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visionOtica.VisionOtica.dto.ProductDTO;
import com.visionOtica.VisionOtica.entities.Product;
import com.visionOtica.VisionOtica.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public ProductDTO insert(ProductDTO dto) {
		Product product = new Product(null, dto.getName(), dto.getPrice(),
				dto.getDescription(), dto.getImageUri());
		
		product = repository.save(product);
		return new ProductDTO(product);
	}
	
	@Transactional
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	@Transactional
	public Product update(Product obj) {
		Optional<Product> optional = repository.findById(obj.getId());
		Product newProduct = optional.get();
		updateData(newProduct, obj);
		return repository.save(newProduct);
	}

	private void updateData(Product newClient, Product obj) {
		newClient.setName(obj.getName());
		newClient.setPrice(obj.getPrice());
		newClient.setImageUri(obj.getImageUri());
		newClient.setDescription(obj.getDescription());
	
	}
	public Product fromDto(ProductDTO objDto) {
		return new Product(objDto.getId(),objDto.getName(),objDto.getPrice(),
				objDto.getDescription(),objDto.getImageUri());
	}
}
