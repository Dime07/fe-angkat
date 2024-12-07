"use client";

import { useEffect, useState } from "react";

interface IUserLocalStorage {
  name: string;
  email: string;
}

const useGetUserFromLocalstorage = () => {
  const [user, setUser] = useState<IUserLocalStorage | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user ? JSON.parse(user) : {});
  }, []);

  return { user };
};

export default useGetUserFromLocalstorage;
