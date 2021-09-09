import InputMask from "react-input-mask";


const saveCep = async(data: any)=>{
    await fetch('/api/consulta',{
        method: 'POST',
        body: data
    })
}

const getCep = () => {
    const infoFields = {
        error: (document.getElementById('error') as HTMLElement),
        infosField: (document.querySelector('div#result') as HTMLElement),
        logradouro: (document.getElementById('logradouro') as HTMLElement),
        bairro: (document.getElementById('bairro') as HTMLElement),
        localidade: (document.getElementById('localidade') as HTMLElement),
        cep: (document.getElementById('cep_result') as HTMLElement),
        uf: (document.getElementById('uf') as HTMLElement)
    }
   let cep = (document.getElementById('cep') as HTMLInputElement).value

   if(cep === ''){

    infoFields.infosField.style.display = "none";
    infoFields.error.style.display = "block";
    infoFields.error.innerText = 'Favor digite um CEP';
   } if(cep.replace('-','').replaceAll('_','').length < 8) {

    infoFields.infosField.style.display = "none";
    infoFields.error.style.display = "block";
    infoFields.error.innerText = 'Informe um CEP com pelo menos 8 numeros';
   } else {

    infoFields.error.style.display = "none";

    fetch(`https://viacep.com.br/ws/${cep.replace('-','')}/json/`)
    .then(response => response.text())
    .then(result => {

        const resultJSON = JSON.parse(result);
        console.log(resultJSON)
        saveCep(resultJSON);

        if(resultJSON.erro = true && !resultJSON.logradouro) {

        infoFields.infosField.style.display = "none";
        infoFields.error.style.display = "block";
        infoFields.error.innerText = 'CEP nao encontrado :(';
        } else {

        infoFields.error.style.display = "none";
        infoFields.infosField.style.display = "grid";
        infoFields.logradouro.innerText = resultJSON.logradouro;
        infoFields.bairro.innerText = resultJSON.bairro;
        infoFields.localidade.innerText = resultJSON.localidade;
        infoFields.cep.innerText = resultJSON.cep;
        infoFields.uf.innerText = resultJSON.uf};
    })
    .catch(error => console.log('error', error));   
}}

export const Input = ()=>{
    return( 
    <section id="input">
    <div id="input_cep">
        <span className="material-icons">room</span>
        <InputMask mask="99999-999" placeholder="Ex:12345-678" id="cep"/>
    </div>
    <button onClick={getCep}>Consultar</button>
    </section>
    );
}