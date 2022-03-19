import './App.css';

function App() {
  return (
    <div>
    <h1 class="header">Dobrodosli na vecernje vesti</h1>
    
    <div class="div1">
        <p class="paragraph">Unesite Vas email</p>
        <input class="input" type="text" id="Email" name="Email"/><br/>

        <p class="paragraph">Unesite Vasu lozinku</p>
        <input class="input" type="password" id="password" name="password"/><br/>

        <button type="button">Prijava</button>
    </div>

    <a class="links" href="sign.html">Otvorite nalog!</a>
    <a class="links" href="login.html">Zaboravili ste sifru?</a>
   </div>
  );
}

export default App;
