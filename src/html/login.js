export default function Login(){
    return (
        <div className="login-page background">
        <h1 className="login-page-header">DOBRODOSLI NA VECERNJE VESTI</h1>
        <form className="login-page-form">
            <article className="login-page-articleinput">
                <p>Unesite e-mail:</p>
                <input className="login-page-input" type="text" id="email" name="email"/><br/>
                <p>Unesite sifru:</p>
                <input className="login-page-input" type="password" id="password" name="password"/><br/>
            </article>
        </form>
            <button className="login-page-button">Login</button>
            <a className="login-page-link" href="signin">Nemate nalog?</a>
        </div>
    )
}

