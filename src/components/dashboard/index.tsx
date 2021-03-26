import React, { useEffect, useState } from "react";
import ResultsDashboard from "./style";
import Results from "../../models/Results";
import Filters from "../Filters";

const Dashboard: React.FC = () => {
  const [results_data, setResults_data] = useState<Results>({
    quantity: 0,
  });



  useEffect(() => {
    fetch("/data/results.json")
      .then((response) => response.json())
      .then((data) => {
        setResults_data(data);
      });
  }, []);

  return (
    <ResultsDashboard>
      <div className="dashboard">
        <Filters />
        <section className="results">
          <header className="results_header">
            <div className="list_types">
              <h2>{`${results_data.quantity}` + " resultados encontrados"}</h2>
              <form className="list_types_form" method="get" action="./">
                <select
                  id="list_opts"
                  aria-placeholder="Listagem"
                  name="list_opt"
                >
                  <option disabled>Listagem</option>
                  <option value="list_type_list">Listagem</option>
                  <option value="list_type_grid">Grade</option>
                </select>
                <button className="btn_simple">
                  <img
                    src="../../assets/grid_view.svg"
                    alt="Visualizar em grade"
                  />
                </button>
                <button className="btn_simple">
                  <img
                    src="../../assets/list_view.svg"
                    alt="Visualizar em lista"
                  />
                </button>
              </form>
            </div>
            <form className="search_form">
              <input type="search" placeholder="Search" name="search_input" />
              <button type="submit">
                <img src="../../assets/search_btn.svg" alt="" />
              </button>
            </form>
          </header>
          <article>
            <ul className="results_cards">
              {results_data.data?.map((result) => (
                <li className="card">
                  <img src={result.image} alt={result.name} />
                  <div className="card_data">
                    <h1>{result.name}</h1>
                    <h2>{result.author}</h2>
                    <p>{result.description}</p>
                  </div>
                  <div className="card_actions">
                    <div className="card_rating">
                      <p>{result.rating}</p>
                      <i className="star_white"></i>
                    </div>
                    <h2>{"R$ " + `${result.price}`}</h2>
                    <button className="btn_light">
                      <i className="like"></i>AMEI
                    </button>
                    <button className="btn_dark">
                      <i className="buy"></i>COMPRAR
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
      <footer className="pagination">
        <a href="#">
          <i className="arrow_left"></i>
        </a>
        <div className="pg_numbers">
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a className="pg_active" href="#">
            6
          </a>
          <a href="#">7</a>
          <a href="#">8</a>
          <a href="#">9</a>
          <a href="#">10</a>
        </div>
        <a href="#">
          <i className="arrow_right"></i>
        </a>
      </footer>
    </ResultsDashboard>
  );
};

export default Dashboard;
