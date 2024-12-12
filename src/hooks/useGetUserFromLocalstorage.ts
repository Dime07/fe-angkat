"use client";

interface IUserLocalStorage {
  id: string;
  name: string;
  email: string;
}

const useGetUserFromLocalstorage = () => {
  const removeUser = () => {
    localStorage.removeItem("user");
  };

  const handleSetUser = (data: IUserLocalStorage) => {
    localStorage.setItem("user", JSON.stringify(data));
  };

  const userLocalStorage = localStorage.getItem("user");
  const user = userLocalStorage ? JSON.parse(userLocalStorage) : null;

  return { user, removeUser, handleSetUser };
};

export default useGetUserFromLocalstorage;
