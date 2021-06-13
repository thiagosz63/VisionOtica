package com.visionOtica.VisionOtica.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.visionOtica.VisionOtica.entities.Pedido;

import model.enums.StatusPedido;

public class PedidoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private Integer quantidade;
	private Double preco;
	private LocalDate dataVenda;
	private StatusPedido status;

	private ClientDTO client;

	private List<ProductDTO> products = new ArrayList<>();

	public PedidoDTO() {
	}

	public PedidoDTO(Long id, Integer quantidade, Double preco, LocalDate dataVenda, StatusPedido status) {
		super();
		this.id = id;
		this.quantidade = quantidade;
		this.preco = preco;
		this.dataVenda = dataVenda;
		this.status = status;
	}

	public PedidoDTO(Pedido entity) {
		super();
		id = entity.getId();
		quantidade = entity.getQuantidade();
		preco = entity.getPreco();
		dataVenda = entity.getDataVenda();
		status = entity.getStatus();
		client = new ClientDTO(entity.getClient());
		products = entity.getProducts().stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public LocalDate getDataVenda() {
		return dataVenda;
	}

	public void setDataVenda(LocalDate dataVenda) {
		this.dataVenda = dataVenda;
	}

	public StatusPedido getStatus() {
		return status;
	}

	public void setStatus(StatusPedido status) {
		this.status = status;
	}

	public ClientDTO getClient() {
		return client;
	}

	public void setClients(ClientDTO client) {
		this.client = client;
	}

	public List<ProductDTO> getProducts() {
		return products;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PedidoDTO other = (PedidoDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}