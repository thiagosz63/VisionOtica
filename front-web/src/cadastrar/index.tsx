import './style.css'

function Cadastrar() {
    return (
        <div className='container homeCad'>
            <div className='row'>
                <div className='col text-center'>
                    <h5>
                        Criar Conta
                    </h5>
                </div>
            </div>

            <div className="row mb-4 mt-2 ml-2 mr-2">
                <div className="col">
                    <form>
                        <label htmlFor='nome' >NOME*</label>
                        <input type="text" id="nome" placeholder="Nome" />
                    </form>
                </div>

                <div className="col">
                    <form>
                        <label htmlFor="sobrenome">SOBRENOME*</label>
                        <input type="text" id="sobrenome" placeholder="Sobrenome" />
                    </form>
                </div>
            </div>

            <div className="row mt-2 ml-2 mr-2">
                <div className="col-md-12">
                    <form>
                        <label htmlFor="email">E-MAIL*</label>
                        <input type="text" id="email" placeholder="E-mail" />
                    </form>
                </div>
            </div>

            <div className="row mt-2 ml-2 mr-2">
                <div className="col-md-12">
                    <form>
                        <label htmlFor="cpf">CPF*</label>
                        <input type="text" id="cpf" placeholder="cpf" />
                    </form>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col text-center">
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="feminino" name="sexo" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="feminino">Feminino</label>
                    </div>

                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="masculino" name="sexo" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="masculino">Masculino</label>
                    </div>
                </div>
            </div>

            <div className="row mt-2 ml-2 mr-2">
                <div className="col-md-12">
                    <form>
                        <label htmlFor="senha">SENHA*</label>
                        <input type="password" name="senha" id="senha" placeholder="********" />
                    </form>
                </div>
            </div>

            <div className="row mt-2 ml-2 mr-2">
                <div className="col-md-12">
                    <form>
                        <label htmlFor="confirmacaoSenha">CONFIRMAÇÃO DA SENHA*</label>
                        <input type="password" id="confirmacaoSenha" placeholder="confirmar Senha" />
                    </form>
                </div>
            </div>

            <div className="row mt-2 mr-2">
                <div className="col text-center">
                    <button className="btn btn-dark" type="button" value="criar">CRIAR</button>
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