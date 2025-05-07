import React, { Children, createContext, useContext, useEffect, useState } from "react";
import { useGetAccount, useGetCurrentUser } from "../queries/queriesAndMutations";
import { Loader } from "lucide-react";
import { async } from "./../api/api";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const { mutateAsync: getUser, isPending } = useGetAccount();
  const [user, setuser] = useState({})

  console.log({user})

  const handleCheckUser = async () => {
    const response = await getUser();
    setuser(response)
  };

  useEffect(() => {
    handleCheckUser();
  }, []);

  if (isPending) {
    <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        user:user,
        isPending:isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
