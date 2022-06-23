import {useState} from 'react'

function Condicional() {
    
    const [email, setEmail] = useState();
    const [UserEmail, setUserEmail] = useState();
    
    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(e){
        e.preventDefault();
        setUserEmail('');
    }


    return(
        <div>
            <h2>Cadastre os seu e-mail:</h2>
            <form>
                <input type="email" placeholder='Digite o seu email' 
                onChange={(e) => setEmail(e.target.value)} />
                <button type = "submit" onClick={enviarEmail}>Enviar e-mail</button>
                {UserEmail && (
                    <div>
                        <p>O email do usuário é: {UserEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional