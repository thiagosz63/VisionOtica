package com.visionOtica.VisionOtica.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.visionOtica.VisionOtica.dto.AgendamentoDTO;
import com.visionOtica.VisionOtica.entities.Agendamento;
import com.visionOtica.VisionOtica.repositories.AgendamentoRepository;

@Service
public class AgendamentoService {

	@Autowired
	private AgendamentoRepository repository;

	@Transactional(readOnly = true)
	public List<AgendamentoDTO> findAll() {
		List<Agendamento> list = repository.findAllByOrderByNomeAsc();
		return list.stream().map(x -> new AgendamentoDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public AgendamentoDTO insert(AgendamentoDTO dto) {
		Agendamento agendamento = new Agendamento(null, dto.getNome(), dto.getTelefone(), dto.getData(), dto.getHorario(), dto.getStatus());

		agendamento = repository.save(agendamento);
		return new AgendamentoDTO(agendamento);
	}

	@Transactional
	public Agendamento update(Agendamento obj) {
		Optional<Agendamento> optional = repository.findById(obj.getId());
		Agendamento newAgendamento = optional.get();
		updateData(newAgendamento, obj);
		return repository.save(newAgendamento);
	}

	private void updateData(Agendamento newAgendamento, Agendamento obj) {
		newAgendamento.setNome(obj.getNome());
		newAgendamento.setTelefone(obj.getTelefone());
		newAgendamento.setData(obj.getData());
		newAgendamento.setHorario(obj.getHorario());
		newAgendamento.setStatus(obj.getStatus());

	}
	
	public Agendamento fromDtoAgenda(AgendamentoDTO objDto) {
		return new Agendamento(objDto.getId(),objDto.getNome(),objDto.getTelefone(),
				objDto.getData(),objDto.getHorario(),objDto.getStatus());
	}
}
