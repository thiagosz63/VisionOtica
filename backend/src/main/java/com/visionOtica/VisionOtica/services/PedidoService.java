package com.visionOtica.VisionOtica.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visionOtica.VisionOtica.dto.PedidoDTO;
import com.visionOtica.VisionOtica.entities.Pedido;
import com.visionOtica.VisionOtica.repositories.PedidoRepository;

@Service
public class PedidoService {

	@Autowired
	private PedidoRepository repository;

	@Transactional(readOnly = true)
	public List<PedidoDTO> findAll() {
		List<Pedido> list = repository.findAllByOrderByNomeAsc();
		return list.stream().map(x -> new PedidoDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public PedidoDTO insert(PedidoDTO dto) {
		Pedido pedido = new Pedido(null, dto.getClients(), dto.getProducts(), dto.getQuantidade(), dto.getPreco(), dto.getDataVenda(), dto.getSituacao());
		
		pedido = repository.save(pedido);
		return new PedidoDTO(pedido);
	}

	@Transactional
	public Pedido update(Pedido obj) {
		Optional<Pedido> optional = repository.findById(obj.getId());
		Pedido newPedido = optional.get();
		updateData(newPedido, obj);
		return repository.save(newPedido);
	}

	private void updateData(Pedido newPedido, Pedido obj) {
		newPedido.setClients(obj.getClients());
		newPedido.setProducts(obj.getProducts());
		newPedido.setQuantidade(obj.getQuantidade());
		newPedido.setPreco(obj.getPreco());
		newPedido.setDataVenda(obj.getDataVenda());
		newPedido.setSituacao(obj.getSituacao());
	}
	
	public Pedido fromDtoPedido(PedidoDTO objDto) {
		return new Pedido(objDto.getId(),objDto.getClients(),objDto.getProducts(),
				objDto.getQuantidade(),objDto.getPreco(),objDto.getDataVenda(), objDto.getSituacao());
	}
}
