package com.visionOtica.VisionOtica.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.visionOtica.VisionOtica.dto.ContatoDTO;
import com.visionOtica.VisionOtica.services.ContatoService;

@RestController
@RequestMapping(value = "/contato")
public class ContatoController {
	
	@Autowired
	private ContatoService service;
	
	@GetMapping
	public ResponseEntity<List<ContatoDTO>> findAll(){
		List<ContatoDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
