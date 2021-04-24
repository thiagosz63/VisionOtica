import './style.css';

function Contato() {
    return (
    <body >
        <div className='container '>
            <div>
                <h2 className="contato-h2">
                        Contato
                 </h2>
            </div>
                <form className="col-md-6">
                    <label>
                            Nome <span>*</span>
                        <input type="text" className="Contato-box" name="ContName" id="ContName" placeholder="Digite seu Nome" />
                    </label>
                    <label>
                        Email <span>*</span>
                    <input type="text" className="Contato-box" name="ContEmail"  id="ContEmail" placeholder="Digite seu e-mail" ></input>
                    </label>
                    <label>
                        Telefone <span>*</span><br></br>
                    <input type="text" name="ContTelefone" id="ContTelefone" className="contato-telefone" placeholder="(__) _____-_____"  /> 
                    </label>

                    <label htmlFor="mensagem">Tire suas dúvidas conosco <span>*</span> </label>
                    <textarea className="contato-msn" id="mensagem" rows={8} cols={5}></textarea>

                    <input className="btn btn-info" type="submit" id="btnContEnviar" value="Enviar" />
                 </form>
            </div>
        </body>
    )
}
export default Contato;