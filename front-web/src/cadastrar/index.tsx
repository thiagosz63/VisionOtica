
import axios from 'axios';
import { useState } from 'react';
import './style.css'



function Cadastrar() {

    const [dados, setDados] = useState({
        name: '',
        sobrenome: '',
        email: '',
        cpf: '',
        sexo: '',
        senha: ''
    })

    const onchangeInput = (e: { target: { name: any; value: any; }; }) =>
        setDados({ ...dados, [e.target.name]: e.target.value });

    const senDados = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
       

        //@ts-ignore
        if (document.getElementById("senha").value === document.getElementById("confirmacaoSenha").value) {

            axios.post('http://localhost:8080/client', dados)
                .then(function (response) {
                    alert('Dados inseridos com sucesso');
                })
                .catch(function (error) {
                    alert('Error: ' + error)
                });

        } else {
            alert('Senhas são diferentes')
        }

    }



    return (
        <div className='container homeCad'>

            <div className='row'>
                <div className='col text-center'>
                    <h5>
                        Criar Conta
                    </h5>
                </div>
            </div>

            <form onSubmit={senDados}>
                <div className="row mb-4 mt-2 ml-2 mr-2">
                    <div className="col">
                        <label htmlFor='nome' >NOME*</label>
                        <input type="text" id="nome" name='name' onChange={onchangeInput}
                               placeholder="Nome" />
                        <span>error</span>
                    </div>

                    <div className="col">
                        <label htmlFor="sexo">Gênero (opcional)</label>
                        <select id='sexo' name='sexo' className='form-control form-control-sm' onChange={onchangeInput} >
                            <option>Não especificado</option>
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-2 ml-2 mr-2">
                    <div className="col-md-12">
                        <label htmlFor="email">E-MAIL*</label>
                        <input type="text" id="email" placeholder="E-mail"
                               name='email' onChange={onchangeInput} />
                    </div>
                </div>

                <div className="row mt-2 ml-2 mr-2">
                    <div className="col-md-12">
                        <label htmlFor="cpf">CPF*</label>
                        <input type="number" id="cpf" placeholder="cpf (Apenas número)"
                            name='cpf' onChange={onchangeInput} />
                    </div>
                </div>

                <div className="row mt-2 ml-2 mr-2">
                    <div className="col-md-12">
                        <label htmlFor="senha">SENHA*</label>
                        <input type="password" name="senha" id="senha"
                            placeholder="********" onChange={onchangeInput} />
                    </div>
                </div>

                <div className="row mt-2 ml-2 mr-2">
                    <div className="col-md-12">
                        <label htmlFor="confirmacaoSenha">CONFIRMAÇÃO DA SENHA*</label>
                        <input type="password" id="confirmacaoSenha"
                            placeholder="confirmar Senha" />
                    </div>
                </div>
            </form>  

            <div className="row mt-2 mr-2">
                <div className="col text-center">
                    <button type='submit' onClick={senDados} className="btn btn-secondary">
                        CRIAR
                    </button>
                </div>
            </div>

            <div className='row'>
                <div className='col text-center'>
                    <p>
                        À partir de agora você receberá as newsletters com as novidades da Vísion Ótica. <br /> Fique tranquilo, a qualquer momento você poderá cancelar o Cadastro.
                        </p>
                </div>
            </div>
        </div >
    );
}

export default Cadastrar;





