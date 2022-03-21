export default function Login(){
    return (
        <div>
        <h1 className="header">DOBRODOSLI NA VECERNJE VESTI</h1>
        <form>
            <p className="paragraph" >Unesite sdsd e-mail:</p>
            <input className="input" type="text" id="email" name="email"/><br/>
            <p className="paragraph">Unesite sifru:</p>
            <input className="input" type="password" id="password" name="password"/><br/>
        </form>
        <button>Login</button>
        <a href="signin">Nemate nalog?</a>
        </div>
    )
}

