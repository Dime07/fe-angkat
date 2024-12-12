"use client";

interface IUserLocalStorage {
  id: string;
  name: string;
  email: string;
}

const useGetUserFromLocalstorage = () => {
  let storedUser = "";

  if (typeof window !== "undefined") {
    storedUser = localStorage.getItem("user") ?? "";
  }

  const removeUser = () => {
    localStorage.removeItem("user");
  };

  const handleSetUser = (data: IUserLocalStorage) => {
    localStorage.setItem("user", JSON.stringify(data));
  };

  const user: IUserLocalStorage | null = storedUser
    ? JSON.parse(storedUser)
    : null;

  return { user, removeUser, handleSetUser };
};

export default useGetUserFromLocalstorage;
