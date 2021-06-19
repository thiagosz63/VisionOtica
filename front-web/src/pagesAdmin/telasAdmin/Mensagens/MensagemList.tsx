import MensagemCard from "./MensagemCard";
import { MensagemType } from "./MensagemTypes";


type Props = {
    contato: MensagemType[];
}
function MensagemList({ contato }: Props) {

    return (
        <div>
            <table className="table table-bordered table-hover table-responsive-xl">
                <thead>
                    <tr>    
                        <th scope="col"></th>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Texto</th>
                        <th className="statusMsn" scope="col">Status</th>
                    </tr>
                </thead>

                {contato.map(contato => (
                    <MensagemCard key={contato.id} contato={contato} />
                ))}
            </table>
        </div>
    )
}
export default MensagemList;