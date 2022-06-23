import Buttun from "./evento/Button";

function Evento({numero}) {
    function meuEvento(){
        console.log(`Fui ativado! ${numero}`);
    }

    function segundoEvento() {
        console.log("Ativando o segundo evento!");
    }

    return(
        <div>
            <p>Clique para desparar um Evento</p>
            <Buttun event={meuEvento} text= "Primeiro Evento"/>
            <Buttun event={segundoEvento} text= "Segundo Evento"/>
        </div>
    )
}

export default Evento