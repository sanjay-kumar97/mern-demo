import axios from "axios";
import { appEnv } from "../lib/constants";

const createUser = async (payload) => {
  const { userName, userAge, userGender, userProfession } = payload;

  const response = await axios({
    method: "POST",
    url: `${appEnv.API_URL}/users/add`,
    data: {
      name: userName,
      age: userAge,
      gender: userGender,
      profession: userProfession,
    },
  });

  return response?.data;
};

const readUser = async (payload = {}) => {
  const { userId } = payload;

  const response = await axios({
    method: "GET",
    url: `${appEnv.API_URL}/users/view${userId ? `/${userId}` : ""}`,
    data: {},
  });

  return response?.data;
};

const updateUser = async (payload) => {
  const { userId, userName, userAge, userGender, userProfession } = payload;

  const response = await axios({
    method: "PUT",
    url: `${appEnv.API_URL}/users/edit/${userId}`,
    data: {
      name: userName,
      age: userAge,
      gender: userGender,
      profession: userProfession,
    },
  });

  return response?.data;
};

const deleteUser = async (payload) => {
  const { userId } = payload;

  const response = await axios({
    method: "DELETE",
    url: `${appEnv.API_URL}/users/remove/${userId}`,
    data: {},
  });

  return response?.data;
};

export { createUser, readUser, updateUser, deleteUser };
