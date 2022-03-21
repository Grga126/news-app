export default function Signin(){
    return (
        <div>
            <h1>Napravite nalog!</h1>
            <p>Unesite ime:</p>
            <input type="text" id="ime" name="ime"/><br/>
            <p>Unesite E-mail:</p>
            <input type="email" id="email" name="email"/><br/>
            <p>Unesite broj godina:</p>
            <input type="number" id="number" name="number"/><br/>
            <p>Unesite sifru</p>
            <input type="password" id="password" name="password"/><br/>
            <a href="login"> Imate vec postojeci nalog?</a>
            <button>Kreiraj nalog!</button>
        </div>
    )
}