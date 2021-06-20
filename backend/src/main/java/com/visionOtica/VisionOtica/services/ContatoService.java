package com.visionOtica.VisionOtica.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visionOtica.VisionOtica.dto.ContatoDTO;
import com.visionOtica.VisionOtica.entities.Contato;
import com.visionOtica.VisionOtica.repositories.ContatoRepository;

import model.enums.StatusContato;

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
		Contato contato = new Contato(null, dto.getNome(), dto.getEmail(),
				dto.getTelefone(), dto.getTexto(), StatusContato.Não_Lida);
		
		contato = repository.save(contato);
		return new ContatoDTO(contato);
	}
	
	@Transactional
	public Contato update(Contato obj) {
		Optional<Contato> optional = repository.findById(obj.getId());
		Contato newContato = optional.get();
		updateData(newContato, obj);
		return repository.save(newContato);
	}

	private void updateData(Contato newContato, Contato obj) {
		newContato.setNome(obj.getNome());
		newContato.setEmail(obj.getEmail());
		newContato.setTelefone(obj.getTelefone());
		newContato.setTexto(obj.getTexto());
		newContato.setStatus(obj.getStatus());

	}
	
	public Contato fromDtoContato(ContatoDTO objDto) {
		return new Contato(objDto.getId(),objDto.getNome(),objDto.getEmail(),
				objDto.getTelefone(),objDto.getTexto(),objDto.getStatus());
	}

}
