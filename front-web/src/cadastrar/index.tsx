
import axios from 'axios';
import { useState } from 'react';
import './style.css'


function Cadastrar() {

    function validacao() {
        //@ts-ignore
        let imputName = document.getElementById("name").value;
        //@ts-ignore
        let imputEmail = document.getElementById("email").value;
        //@ts-ignore
        let imputCpf = document.getElementById("cpf").value;
        //@ts-ignore
        let imputSenha = document.getElementById("senha").value;
        //@ts-ignore
        let imputConfirmaSenha = document.getElementById("confirmacaoSenha").value;

        if (imputName === '') {
            //@ts-ignore
            document.getElementById("errorName").innerHTML = "Error: Campo obligatorio!";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = true;
        }
        else {
            //@ts-ignore
            document.getElementById("errorName").innerHTML = "";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = false;
        }
        if (imputEmail === '') {
            //@ts-ignore
            document.getElementById("errorEmail").innerHTML = "Error: Campo obligatorio!";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = true;
        }
        else {
            //@ts-ignore
            document.getElementById("errorEmail").innerHTML = "";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = false;
        }
        if (imputCpf === '') {
            //@ts-ignore
            document.getElementById("errorCpf").innerHTML = "Error: Campo obligatorio!";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = true;
        }
        else {
            //@ts-ignore
            document.getElementById("errorCpf").innerHTML = "";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = false;
        }
        if (imputSenha === '') {
            //@ts-ignore
            document.getElementById("errorSenha").innerHTML = "Error: Campo obligatorio!";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = true;
        }
        else {
            //@ts-ignore
            document.getElementById("errorSenha").innerHTML = "";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = false;
        }
        if ((imputConfirmaSenha !== imputSenha) || (imputConfirmaSenha==='') ) {
            //@ts-ignore
            document.getElementById("errorConfirmaSenha").innerHTML = "Error: As senhas não são iguais";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = true;
        }
        else {
            
            //@ts-ignore
            document.getElementById("errorConfirmaSenha").innerHTML = "";
            //@ts-ignore
            document.getElementById("BtnInserir").disabled = false;
        }

    }


    //recebendo os dados e enviando para o banco
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


    const inserir = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        //@ts-ignore
        let imputName = document.getElementById("name").value;
        if (imputName !== '') {

            axios.post('http://localhost:8080/client', dados)
            
                .then(function (response) {
                    alert('Dados inseridos com sucesso');
                })
                .catch(function (error) {
                    alert('Error: client ja cadastrado')
                });

        } else {
            alert('Porfavor insira os dados')
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

            <form onChange={validacao}>
                <div className="row mb-4 mt-2 ml-2 mr-2">
                    <div className="col">
                        <label htmlFor='name' >NOME*</label>
                        <input type="text" id="name" name='name' onChange={onchangeInput}
                            placeholder="Nome" />
                        <span id='errorName'></span>
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
                        <span id='errorEmail'></span>
                    </div>
                </div>

                <div className="row mt-2 ml-2 mr-2">
                    <div className="col-md-12">
                        <label htmlFor="cpf">CPF*</label>
                        <input type="number" id="cpf" placeholder="cpf (Apenas número)"
                            name='cpf' onChange={onchangeInput} />
                        <span id='errorCpf'></span>
                    </div>
                </div>

                <div className="row mt-2 ml-2 mr-2">
                    <div className="col-md-12">
                        <label htmlFor="senha">SENHA*</label>
                        <input type="password" name="senha" id="senha"
                            placeholder="********" onChange={onchangeInput} />
                        <span id='errorSenha' />
                    </div>
                </div>

                <div className="row mt-2 ml-2 mr-2">
                    <div className="col-md-12">
                        <label htmlFor="confirmacaoSenha">CONFIRMAÇÃO DA SENHA*</label>
                        <input type="password" id="confirmacaoSenha"
                            placeholder="confirmar Senha" />
                        <span id='errorConfirmaSenha' />
                    </div>
                </div>
            </form>

            <div className="row mt-2 mr-2">
                <div className="col text-center">
                    <button type='submit' onClick={inserir}
                        className="btn btn-secondary"
                        id='BtnInserir'
                    >
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





