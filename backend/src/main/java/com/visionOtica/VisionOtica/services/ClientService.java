package com.visionOtica.VisionOtica.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visionOtica.VisionOtica.dto.ClientDTO;
import com.visionOtica.VisionOtica.entities.Client;
import com.visionOtica.VisionOtica.repositories.ClientRepository;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;

	@Transactional(readOnly = true)
	public List<ClientDTO> findAll() {
		List<Client> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ClientDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public Client findEmail(String email) {
	    Optional<Client> obj = repository.findByEmail(email);
	    return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! email: " + email + ", Tipo"+ ClientService.class.getName(), email));
	}
	
		@Transactional
	public ClientDTO insert(ClientDTO dto) {
		Client client = new Client(null, dto.getName(), dto.getEmail(), dto.getCpf(), dto.getSexo(), dto.getSenha());

		client = repository.save(client);
		return new ClientDTO(client);
	}

}
