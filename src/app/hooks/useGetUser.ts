"use client";

const useGetUser = () => {
  const user = localStorage.getItem("user");

  return { user: user ? JSON.parse(user) : {} };
};

export default useGetUser;
