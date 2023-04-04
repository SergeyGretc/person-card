export const validator = (data, configParams) => {
  const errors = {};

  function validate(method, value, config) {
    const regex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]{1,}\/?$/;
    const currentDate = new Date().getFullYear();
    switch (method) {
      case "required":
        if (value.trim() === "") {
          return config.message;
        }
        break;

      case "number":
        if (Number(value) >= currentDate || Number(value) <= 1900) {
          return config.message;
        }
        break;
      case "trueNumber":
        if (!Number(value)) {
          return config.message;
        }
        break;
      case "login":
        if (!regex.test(value)) {
          return config.message;
        }
        break;
      default:
        break;
    }
  }
  for (const elem in data) {
    for (const method in configParams[elem]) {
      const error = validate(method, data[elem], configParams[elem][method]);

      if (error) {
        errors[elem] = error;
      }
    }
  }
  return errors;
};

// const githubUrl = "https://github.com/octocat";
// const regex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]{1,}\/?$/;

// if (regex.test(githubUrl)) {
//   console.log("Ссылка является действительной ссылкой на профиль GitHub");
// } else {
//   console.log("Недействительная ссылка на профиль GitHub");
// }
