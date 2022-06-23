import './style.css';

export default function PoliticaEntrega() {
    return (
        <body>
            <div className="container">
                <h2 className="politica-de-entrega">Políticas de Entregas</h2>
                <p className="text-justify" id="pol-de-ent-p">
                    <h4 className="politica-center">1. Condições gerais</h4>
                    As entregas feitas pela Vision são realizadas de segunda-feira a sexta-feira, das 9h às 18h.

                    O prazo de entrega é contado a partir da confirmação do pagamento em dias úteis,
                    ou seja, não inclui sábados, domingos e feriados.

                    Nossos entregadores realizam até três tentativas de entrega no local informado,
                    com intervalos de até 24 horas entre elas. Se houver três tentativas de entrega sem sucesso,
                    o pedido retornará para o Centro de Distribuição.

                    É indispensável que no endereço informado para a entrega, haja uma pessoa autorizada pelo comprador(a),
                    maior de 18 anos, e portador de documento de identificação para receber a mercadoria e assinar o protocolo.

                    O valor do frete varia de acordo com o local de entrega. Para saber o valor,
                    basta escolher seu produto e informar o CEP do local de entrega no campo devido.

                    <h4 className="politica-center">2. Quando recusar a entrega</h4>
                    Se ocorrer qualquer das hipóteses abaixo, recuse o recebimento da mercadoria
                    e escreva o motivo da recusa no verso do documento fiscal:

                    Embalagem aberta ou avariada;
                    Produto avariado;
                    Produto em desacordo com o pedido.

                    <h4 className="politica-center">3. Acompanhe seu pedido</h4>
                    Após fazer seu login na Vision você poderá acompanhar a aprovação do pagamento,
                    a fabricação do produto (no caso de óculos de grau),
                    a entrega do produto à transportadora e seu trajeto até o endereço informado.
                    Você também pode localizar seus últimos pedidos, pesquisando por data ou número.

                    Nosso sistema envia, automaticamente,
                    e-mails de alerta notificando qualquer alteração no processamento do pedido.
                    Ao se cadastrar, informe um e-mail válido para que possa receber esses alertas.
                </p>
            </div>
        </body>
    )
}