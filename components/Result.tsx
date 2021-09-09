

export const Result = ()=> {
    return(
        <section id="result">
            <h1 id="error">CEP nao encontrado :(</h1>
            <div id="result">
            <h1>Informacoes</h1>
            <p>Logradouro: <span id="logradouro"></span></p>
            <p>Localidade: <span id="localidade"></span></p>
            <p>Bairro: <span id="bairro"></span></p>
            <p>CEP: <span id="cep_result"></span></p>
            <p>UF: <span id="uf"></span></p>
            </div>
        </section>
        );
}