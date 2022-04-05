export default function Dashboard() {
  return (
    <div className="dashboard-page background">
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        Dobro dosli na dashboard
      </h1>
      <article className="dashboard-page-article">
       <a className="dashboard-page-link" href="./allnews">Pregledajte nove vesti!</a>
       <a className="dashboard-page-link" href="./addnews">Dodajte novu vest!</a>
       <a className="dashboard-page-link" href="./yournews">Pregledajte svoje vesti!</a>
      </article>
    </div>
  );
}
