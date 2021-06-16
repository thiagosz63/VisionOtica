package com.visionOtica.VisionOtica.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visionOtica.VisionOtica.dto.ClientDTO;
import com.visionOtica.VisionOtica.dto.PedidoDTO;
import com.visionOtica.VisionOtica.dto.ProductDTO;
import com.visionOtica.VisionOtica.entities.Client;
import com.visionOtica.VisionOtica.entities.Pedido;
import com.visionOtica.VisionOtica.entities.Product;
import com.visionOtica.VisionOtica.repositories.ClientRepository;
import com.visionOtica.VisionOtica.repositories.PedidoRepository;
import com.visionOtica.VisionOtica.repositories.ProductRepository;

import model.enums.StatusPedido;

@Service
public class PedidoService {

	@Autowired
	private PedidoRepository repository;

	@Autowired
	private ProductRepository productReposytory;

	@Autowired
	private ClientRepository clientReposytory;

	ClientService service = new ClientService();

	@Transactional(readOnly = true)
	public List<PedidoDTO> findAll() {
		List<Pedido> list = repository.findAllByOrderByIdAsc();
		return list.stream().map(x -> new PedidoDTO(x)).collect(Collectors.toList());
	}

	@Transactional(readOnly = true)
	public List<PedidoDTO> findByClient(Client client) {
		List<Pedido> list = repository.findAllByClient(client);
		return list.stream().map(x -> new PedidoDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public PedidoDTO insert(PedidoDTO dto) {

		Pedido pedido = new Pedido(null, dto.getQuantidade(), dto.getPreco(), LocalDate.now(), StatusPedido.pendente);

		for (ProductDTO p : dto.getProducts()) {
			Product product = productReposytory.getOne(p.getId());
			pedido.getProducts().add(product);
		}

		ClientDTO clientDto = dto.getClient();
		Client client = clientReposytory.getOne(clientDto.getId());
		pedido.setClient(client);

		pedido = repository.save(pedido);
		return new PedidoDTO(pedido);
	}

	@Transactional
	public Pedido update(Pedido obj) {
		Optional<Pedido> optional = repository.findById(obj.getId());
		Pedido newPedido = optional.get();

		for (Product p : obj.getProducts()) {
			Product product = productReposytory.getOne(p.getId());
			newPedido.getProducts().add(product);
		}
		
		

		updateData(newPedido, obj);
		return repository.save(newPedido);
	}

	private void updateData(Pedido newPedido, Pedido obj) {
		newPedido.setPreco(obj.getPreco());
		newPedido.setQuantidade(obj.getQuantidade());
		newPedido.setStatus(obj.getStatus());
		newPedido.setDataVenda(obj.getDataVenda());
		newPedido.setClient(obj.getClient());
	}

	public Pedido fromDto(PedidoDTO objDto) {
		return new Pedido(objDto.getId(), objDto.getQuantidade(), objDto.getPreco(), objDto.getDataVenda(),
				objDto.getStatus());

	}
}
