package com.visionOtica.VisionOtica.dto;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.visionOtica.VisionOtica.entities.Client;
import com.visionOtica.VisionOtica.entities.Pedido;
import com.visionOtica.VisionOtica.entities.Product;

import model.enums.Situacao;

public class PedidoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Integer quantidade;
	private Double preco;
	private Date dataVenda;
	private Product products;
	private Client clients;
	private Situacao situacao;

	public PedidoDTO() {
	}

	public PedidoDTO( Long id, Client clients, Product products,  Integer quantidade, Double preco, Date dataVenda, Situacao situacao) {
		super();
		this.id = id;
		this.clients = clients;
		this.products = products;
		this.quantidade = quantidade;
		this.preco = preco;
		this.dataVenda = dataVenda;
		this.situacao = situacao;
	}
	
	public PedidoDTO(Pedido entity) {
		super();
		id = entity.getId();
		clients = entity.getClients();
		products = entity.getProducts();
		quantidade = entity.getQuantidade();	
		preco = entity.getPreco();
		dataVenda = entity.getDataVenda();
		situacao = entity.getSituacao();
	}

	public Product getProducts() {
		return products;
	}

	public void setProducts(Product products) {
		this.products = products;
	}

	public Client getClients() {
		return clients;
	}

	public void setClients(Client clients) {
		this.clients = clients;
	}

	public Situacao getSituacao() {
		return situacao;
	}

	public void setSituacao(Situacao situacao) {
		this.situacao = situacao;
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

	public Date getDataVenda() {
		return dataVenda;
	}

	public void setDataVenda(Date dataVenda) {
		this.dataVenda = dataVenda;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public double subTotal() {
		return preco * quantidade;
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