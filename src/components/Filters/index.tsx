import React, { useState, useEffect } from "react";
import FiltersReponse from "../../models/FiltersResponse";

export default function Filters() {
  const [filters_data, setFilters_data] = useState<FiltersReponse>({});

  useEffect(() => {
    fetch("/data/filters.json")
      .then((response) => response.json())
      .then((data) => {
        setFilters_data(data);
      });
  }, []);

  return (
    <aside>
      <h2>Filtros</h2>
      <form className="filters">
        <section className="ft_prices">
          <h3>Preços</h3>

          {filters_data.prices?.map((price) => (
            <>
              <br />
              <input
                type="checkbox"
                id={"ft_price_" + price}
                name={"ft_price_" + price}
                value="1"
              />
              <label htmlFor={"ft_price_" + price}>{"R$ " + `${price}`}</label>
            </>
          ))}
        </section>
        <section className="ft_prices_range">
          <h3>Valores</h3>
          <label className="right" htmlFor="values_slider">
            {`${filters_data.values_range?.min || 0}` +
              " - " +
              `${filters_data.values_range?.max || 0}`}
          </label>
          <input
            type="range"
            id="values_slider"
            defaultValue="1"
            min="1"
            max="100"
          />
        </section>

        <section className="ft_categories">
          <h3>Categorias</h3>
          {filters_data.categories?.map((category) => (
            <>
              <br />
              <input
                type="checkbox"
                id={"ft_ct_" + category.id}
                name={"ft_ct_" + category.id}
                value="1"
              />
              <label htmlFor={"ft_ct_" + category.id}>{category.name}</label>
              <label className="right" htmlFor={"ft_ct_" + category.id}>
                {category.quantity}
              </label>
            </>
          ))}
        </section>

        <section>
          <h3>Avaliação</h3>
          {filters_data.rating?.map((rate) => (
            <>
              <br />
              <input
                className="hide"
                type="checkbox"
                name="ft_rating"
                id={"ft_rating_" + rate.stars}
              />
              <label htmlFor={"ft_rating_" + rate.stars}>
                <i className={"rating_" + rate.stars}></i>
              </label>
              <label className="right" htmlFor="ft_rating">
                {rate.quantity}
              </label>
            </>
          ))}
        </section>
        <button className="btn_dark h_g p_g" type="reset">
          <h4>Limpar Filtros</h4>
        </button>
      </form>
    </aside>
  );
}
