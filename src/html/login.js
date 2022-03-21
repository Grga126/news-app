export default function Login(){
    return (
        <div>
        <h1 class="header">DOBRODOSLI NA VECERNJE VESTI</h1>
        <form>
            <p class="paragraph" >Unesite e-mail:</p>
            <input class="input" type="text" id="email" name="email"/><br/>
            <p class="paragraph">Unesite sifru:</p>
            <input class="input" type="password" id="password" name="password"/><br/>
        </form>
        <button>Login</button>
        <a href="signin">Nemate nalog?</a>
        </div>
    )
}

