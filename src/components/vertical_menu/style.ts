import styled from "styled-components";

const VerticalMenu = styled.div`
  .v_menu_header {
    max-width: 280px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: baseline;
    padding: 24px;
    background: #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #2c2c2c;
    font-size: 16px;
  }

  .brand {
    padding: 20px;
  }

  .menu_box {
    margin-bottom: 30px;
    width: 100%;
    min-height: 36px;
    background: #ececec;
    border-radius: 4px;
    box-shadow: none;
  }

  .menu_box:before {
    content: url(/assets/home.svg);
    float: left;
    padding: 0 6px;
  }

  .menu_box:after {
    content: url(/assets/chevron-down.svg);
    display: block;
    float: right;
  }

  .menu_box p {
    font-weight: normal;
    font-size: 15px;
    line-height: 0;
    color: #2c2c2c;
    display: contents;
  }

  .menu_apps {
    width: 100%;
    padding: 48px 12px;
  }

  .menu_apps h3 {
    font-weight: normal;
    font-size: 14px;
    line-height: 36px;
    color: #999999;
    display: block;
  }

  .menu_apps ul {
    padding: 0;
    margin: 0;
  }
  .menu_apps li {
    font-weight: normal;
    font-size: 15px;
    line-height: 40px;
    color: #2c2c2c;
    padding: 0;
    margin: 0;
  }

  .menu_apps i {
    padding: 0 8px 0 0;
    height: 16px;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export default VerticalMenu;
