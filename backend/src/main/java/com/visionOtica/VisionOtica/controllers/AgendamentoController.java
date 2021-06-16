package com.visionOtica.VisionOtica.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.visionOtica.VisionOtica.dto.AgendamentoDTO;
import com.visionOtica.VisionOtica.entities.Agendamento;
import com.visionOtica.VisionOtica.services.AgendamentoService;

@RestController
@RequestMapping(value = "/agendamento")
public class AgendamentoController {

	@Autowired
	private AgendamentoService service;

	@GetMapping
	public ResponseEntity<List<AgendamentoDTO>> findAll() {
		List<AgendamentoDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	@PostMapping
	public ResponseEntity<AgendamentoDTO> insert(@RequestBody AgendamentoDTO dto) {
		dto = service.insert(dto);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<Void> update(@RequestBody AgendamentoDTO objDto, @PathVariable Long id) {
		Agendamento obj = service.fromDtoAgenda(objDto);
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}

}
