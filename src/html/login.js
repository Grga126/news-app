export default function Login(){
    return (
        <div className="login-page background">
        <h1 className="header">DOBRODOSLI NA VECERNJE VESTI</h1>
        <form className="form">
            <article className="articleinput">
                <p>Unesite e-mail:</p>
                <input className="input" type="text" id="email" name="email"/><br/>
                <p>Unesite sifru:</p>
                <input type="password" id="password" name="password"/><br/>
            </article>
        </form>
            <button className="button">Login</button>
            <a className="link" href="signin">Nemate nalog?</a>
        </div>
    )
}

