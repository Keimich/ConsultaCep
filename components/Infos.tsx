type countProps = {
    amount:any
}

export const Infos = (props:countProps)=>{
    
    return(
        <section id="infos">
            <h1>Consulte qualquer <span>CEP</span></h1>
            <p><strong id="amount">{props.amount}</strong> consultas já realizadas!</p>
        </section>
    );
}