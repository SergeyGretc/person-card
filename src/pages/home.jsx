import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const date = new Date();
  const getAge = () => {
    return date.getFullYear() - data.age;
  };
  const getCorrectAgeEnding = () => {
    if (String(data.age).at(-1) === "1") {
      return "год";
    } else if (
      String(data.age).at(-1) === "2" ||
      String(data.age).at(-1) === "3" ||
      String(data.age).at(-1) === "4"
    ) {
      return "года";
    }
    return "лет";
  };
  return !data ? (
    <>
      <h1>Карточка студента</h1>
      <p>Нет данных</p>
      <Link to="/create">
        <button className="btn btn-primary">{"Добавить"}</button>
      </Link>
    </>
  ) : (
    <>
      <h1>Карточка студента</h1>
      <p>{data.name}</p>
      <p>{data.surname}</p>
      <p>{`${data.age}` + ` (${getAge()} ${getCorrectAgeEnding()})`}</p>
      <div>
        <Link to={data.log}> {data.log}</Link>
      </div>
      <Link to="/edit">
        <button className="btn btn-primary">{"Редактировать"}</button>
      </Link>
    </>
  );
};
export default Home;
