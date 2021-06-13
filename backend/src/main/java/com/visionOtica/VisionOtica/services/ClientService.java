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

import model.enums.CategoriaClient;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;

	@Transactional(readOnly = true)
	public List<ClientDTO> findAll() {
		List<Client> list = repository.findAllByOrderByNomeAsc();
		return list.stream().map(x -> new ClientDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public Client findByEmail(String email) {
		Optional<Client> obj = repository.findByEmail(email);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! email: " + email + ", Tipo" + ClientService.class.getName(), email));
	}
	
	@Transactional(readOnly = true)
	public Client findById(Long id) {
		Optional<Client> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! email: " + id + ", Tipo" + ClientService.class.getName(), "" + id));
	}


	@Transactional
	public ClientDTO insert(ClientDTO dto) {
		Client client = new Client(null, dto.getNome(), dto.getEmail(), dto.getCpf(), dto.getSexo(), dto.getSenha(),
				CategoriaClient.cliente);

		client = repository.save(client);
		return new ClientDTO(client);
	}

	@Transactional
	public void delete(Long id) {
		repository.deleteById(id);
	}

	@Transactional
	public Client update(Client obj) {
		Optional<Client> optional = repository.findById(obj.getId());
		Client newClient = optional.get();
		updateData(newClient, obj);
		return repository.save(newClient);
	}

	private void updateData(Client newClient, Client obj) {
		newClient.setNome(obj.getNome());
		newClient.setEmail(obj.getEmail());
		newClient.setCpf(obj.getCpf());
		newClient.setSexo(obj.getSexo());
		newClient.setSenha(obj.getSenha());
		newClient.setCategoria(obj.getCategoria());

	}
	
	public Client fromDto(ClientDTO objDto) {
		return new Client(objDto.getId(),objDto.getNome(),objDto.getEmail(),
				objDto.getCpf(),objDto.getSexo(),objDto.getSenha(),objDto.getCategoria());
	}
}
