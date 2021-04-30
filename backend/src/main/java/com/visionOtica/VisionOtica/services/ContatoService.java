package com.visionOtica.VisionOtica.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visionOtica.VisionOtica.dto.ContatoDTO;
import com.visionOtica.VisionOtica.entities.Contato;
import com.visionOtica.VisionOtica.repositories.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;

	@Transactional(readOnly = true)
	public List<ContatoDTO> findAll() {
		List<Contato> list = repository.findAllByOrderByNomeAsc();
		return list.stream().map(x -> new ContatoDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public ContatoDTO insert(ContatoDTO dto) {
		Contato contato = new Contato(null, dto.getNome(), dto.getEmail(), dto.getTelefone(), dto.getTexto());
		
		contato = repository.save(contato);
		return new ContatoDTO(contato);
	}

}
