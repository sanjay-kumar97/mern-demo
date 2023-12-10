import { genderList } from "../lib/constants";

const SchemaValidator = (formValues) => {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(formValues);
    const filteredArr = keys.filter((key) => !formValues[key]);

    if (filteredArr.length === 0) {
      resolve(formValues);
    } else {
      reject({ message: "Fields are missing", fields: filteredArr });
    }
  });
};

const getGenderLabel = (value) => {
  const gender = genderList.find((gender) => gender.value === value);
  return gender?.label || "Prefer not to say";
};

export { SchemaValidator, getGenderLabel };
