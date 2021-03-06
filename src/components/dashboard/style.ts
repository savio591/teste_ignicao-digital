import styled from "styled-components"


const ResultsDashboard = styled.div`
.dashboard {
    display: flex;
    flex-direction: row;
    padding: 1.2rem 12px;
}

.dashboard form {
    display: flex;
}

.dashboard h2 {
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: #2C2C2C;
}

.results_header {
    display: flex;
    flex-direction: column;
}

.list_types {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1.2rem 0;
}

.dashboard .list_types_form select, .dashboard .list_types_form button {
    margin: 0 0 0 12px;
}

.dashboard select {
    padding: 0 72px 0 12px;
    background: url("../../assets/chevron-down.svg") no-repeat right white;
    background-position-x: 90%;
    appearance: none;
}

.dashboard select:before {
    display: contents;
    content: url("../../assets/chevron-down.svg");
}

.search_form {
    height: 62px;
    margin: 12px 0;
    width: -webkit-fill-available;
}

.search_form input {
    width: -webkit-fill-available;
    padding: 0 24px;
}

.search_form button {
    box-shadow: none;
    background: none;
    margin: 0 -64px;
}

.dashboard article {
    display: flex;
    flex-direction: column;
}

.results {
    margin: 0 1.2rem;
    display: flex;
    flex-direction: column;
    width: -webkit-fill-available;
}

.results_cards {
    display: flex;
    flex-direction: column;
}

.results_cards .card {
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    margin: 1.2rem 0;
}

.results_cards .card img {
    max-width: 21.3rem;
    padding: 1.2rem;
    object-fit: cover;
}

.results_cards .card_data {
    display: flex;
    padding: 1.2rem;
    flex-grow: 1;
    flex-direction: column;
}

.results_cards .card_actions {
    padding: 1.2rem 2.0rem 2%.0rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
}

.card_actions button {
    height: 4.5rem;
    width: 18.5rem;
}

.card_data h1 {
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #2C2C2C;
}

.card_data h2 {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #7E7E7E;
}

.card_data p {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.3rem;
    color: #2C2C2C;
}

.card_actions h2 {
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: #2C2C2C;
    display: block;
    padding: 0 6.4rem 0 0;
}

.card_rating {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #787878;
    border-radius: 3px;
    padding: 0.6rem;
}

.card_rating p {
    font-size: 1.4rem;
    margin: auto;
    font-size: 1.4rem;
    line-height: 1.7px;
    color: #FFFFFF;
}

.card_actions button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn_light {
    background: #EDEDED;
    color: #2C2C2C;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
}

.btn_dark {
    background: #686868;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.8rem;
}

.btn_dark:hover {
    background: #1c1c1c;
}

.dashboard aside {
    width: 371px;
    flex-direction: column;
    display: flex;
    margin: 0 12px 0 0;
    padding: 32px 0 0 0;
    flex-shrink: 0;
    margin: 0 1.2rem 0 1.2rem;
}

.filters {
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    margin: 2.3rem 0 0 0;
    padding: 32px;
}

.filters h3 {
    display: block;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #2C2C2C;
    margin: 0 0 6px 0;
}

.filters h4 {
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
}

.filters p, label {
    font-weight: 300;
    font-size: 16px;
    line-height: 32px;
    color: #2C2C2C;
    padding: 0 0 0 12px;
    cursor: pointer;
}

.filters section {
    display: block;
}

.filters section+section:before {
    content: "";
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #d6d6d6;
    display: block;
    margin: 16px 0 32px 0;
}

.ft_prices_range h3 {
    display: contents;
}

.pagination {
    display: flex;
    justify-content: center;
    margin: 48px 0;
}

.pagination div {
    background: #EDEDED;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin: 0 16px;
}

.pagination a {
    font-weight: normal;
    font-size: 1.8rem;
    background: #EDEDED;
    border-radius: 50%;
    color: #2C2C2C;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
}

.pagination a:hover {
    background-color: #c6c6c6;
    border-radius: 50%;
    color: white;
}

.pagination a.pg_active {
    background-color: #686868;
    border-radius: 50%;
    color: white;
}

@media (max-width: 1230px) {
    .dashboard {
        flex-wrap: wrap;
    }
    .dashboard aside {
        order: 4;
        width: 100%;
    }
}

@media (max-width: 863px) {
    .dashboard {
        flex-wrap: wrap;
    }
    .list_types_form {
        width: -webkit-fill-available;
        justify-content: flex-end;
    }
    .list_types h2 {
        margin: auto auto 24px auto;
        display: flex;
    }

    .filters {
    margin: 2.3rem 2.3rem 0 0;
}
    .results_cards .card {
        flex-wrap: wrap;
    }
    .results_cards .card img {
        margin: auto;
        padding: 12px;
    }
    .results_cards .card_data {
        display: flex;
        flex-direction: column;
        max-width: initial;
    }
    .results_cards .card_actions {
        padding: 12px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: -webkit-fill-available;
    }
    .results_cards .card_actions button {
        margin: 16px 0 0 0;
    }
    .btn_dark {
        margin: 40px 0 0 0;
    }
    .btn_light {
        margin: 0 0 0 6px;
    }
    .pagination div {
        display: none;
    }
    .pagination a {
        margin: 0 8px;
    }
}
`
export default ResultsDashboard