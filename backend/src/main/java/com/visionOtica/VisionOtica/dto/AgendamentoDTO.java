package com.visionOtica.VisionOtica.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.visionOtica.VisionOtica.entities.Agendamento;

import model.enums.Status;

public class AgendamentoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String nome;
	private String telefone;
	private LocalDate data;
	private String horario;
	private Status status;
	private ClientDTO client;

	public AgendamentoDTO() {
	}

	public AgendamentoDTO(Long id, String nome, String telefone, LocalDate data, String horario,
			Status status) {
		super();
		this.id = id;
		this.nome = nome;
		this.telefone = telefone;
		this.data = data;
		this.horario = horario;
		this.status = status;
	}
	
	public AgendamentoDTO(Agendamento entity) {
		super();
		id = entity.getId();
		nome = entity.getNome();	
		telefone = entity.getTelefone();
		data = entity.getData();
		horario = entity.getHorario();
		status = entity.getStatus();	
		client = new ClientDTO(entity.getClient());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	

	public ClientDTO getClient() {
		return client;
	}

	public void setClient(ClientDTO client) {
		this.client = client;
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
		AgendamentoDTO other = (AgendamentoDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}