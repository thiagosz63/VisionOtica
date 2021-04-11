package com.visionOtica.VisionOtica.dto;

import java.io.Serializable;

import com.visionOtica.VisionOtica.entities.Client;

public class ClientDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String email;
	private String cpf;
	private String sexo;
	private String senha;

	public ClientDTO() {
	}

	public ClientDTO(Long id, String name,String email, String cpf, String sexo, String senha) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.cpf = cpf;
		this.sexo = sexo;
		this.senha = senha;
	}

	public ClientDTO(Client entity) {
		super();
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		cpf = entity.getCpf();
		sexo = entity.getSexo();
		senha = entity.getSenha();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
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
		ClientDTO other = (ClientDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
	

}
