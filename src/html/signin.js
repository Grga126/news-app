export default function Signin(){
    return (
        <div className="div">
            <h1 className="header">Napravite nalog!</h1>
                <article className="articlesign">
                <p className="paragraph">Unesite ime:</p>
                <input className="input2" type="text" id="ime" name="ime"/><br/>
                <p className="paragraph">Unesite E-mail:</p>
                <input className="input2" type="email" id="email" name="email"/><br/>
                <p className="paragraph">Unesite broj godina:</p>
                <input className="input2" type="number" id="number" name="number"/><br/>
                <p className="paragraph">Unesite sifru</p>
                <input className="input2" type="password" id="password" name="password"/><br/>
            </article>
            <a className="link2" href="login"> Imate vec postojeci nalog?</a>
            <button className="button2">Kreiraj nalog!</button>
        </div>
    )
}