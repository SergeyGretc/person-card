import React, { useState } from "react";
import Field from "../components/Field";
import { validator } from "../utils/validator";
import { Link } from "react-router-dom";
import { getLocalStorageData } from "../utils/localStorage";

const Edit = () => {
  const [data, setData] = useState({
    name: getLocalStorageData("name"),
    surname: getLocalStorageData("surname"),
    age: getLocalStorageData("age"),
    log: getLocalStorageData("log"),
  });

  const [errors, setErrors] = React.useState({});
  React.useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validationConfig);

    setErrors(errors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { name, surname, age, log } = data;

  const validationConfig = {
    name: {
      required: { message: "Это поле является обязательным для заполнения" },
    },
    surname: {
      required: { message: "Это поле является обязательным для заполнения" },
    },
    age: {
      number: { message: "Вы не могли родиться так поздно" },
      trueNumber: { message: "Введите число" },
    },
    log: {
      login: { message: "Введите данные корректно" },
    },
  };
  console.log(errors);
  return (
    <div>
      <h2>Редактор профиля</h2>

      <form onSubmit={handleSubmit}>
        <Field
          id="name"
          name="name"
          label="Имя"
          value={name}
          onChange={handleChange}
          error={errors}
        />
        <Field
          id="surname"
          name="surname"
          label="Фамилия"
          value={surname}
          onChange={handleChange}
          error={errors}
        />
        <Field
          id="age"
          name="age"
          label="Возраст"
          value={age}
          onChange={handleChange}
          error={errors}
        />
        <Field
          id="log"
          name="log"
          label="Портфолио"
          value={log}
          onChange={handleChange}
          error={errors}
        />

        <div>
          <Link to="/">
            <button className="btn btn-secondary" type="submit">
              Назад
            </button>
          </Link>
          <button className="btn btn-primary" type="submit">
            Обновить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
