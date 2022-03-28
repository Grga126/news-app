import axios from 'axios';

export default function Signin(){

    const handleRegister = (e) => {
        e.preventDefault();

        axios.post('/api/auth/register', {
            'email' : "jhon@jhon.com",
            'username' : "someone",
            'password' : "someone"
          }).then(() => {
                alert("sve je proslo dobro")
          }).catch((error) => {
                alert("nije dobar zahtev")
          });
    }

  

    return (
        <div className="sign-page background">
            <h1>Napravite nalog!</h1>
                <article className="sign-page-article">
                <p className="sign-page-header">Unesite ime:</p>
                <input className="sign-page-input" type="text" id="ime" name="ime"/><br/>
                <p className="sign-page-header">Unesite E-mail:</p>
                <input className="sign-page-input" type="email" id="email" name="email"/><br/>
                <p className="sign-page-header">Unesite broj godina:</p>
                <input className="sign-page-input" type="number" id="number" name="number"/><br/>
                <p className="sign-page-header">Unesite sifru</p>
                <input className="sign-page-input" type="password" id="password" name="password"/><br/>
                <div className="sign-page-redirection">
                    <a className="sign-page-link" href="login"> Imate vec postojeci nalog?</a>
                </div>
            <button onClick={handleRegister} className="sign-page-button">Kreiraj nalog!</button>
            </article>
        </div>
    )
}