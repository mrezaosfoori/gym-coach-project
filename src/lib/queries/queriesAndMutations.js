import { useMutation, useQuery } from "@tanstack/react-query";

import { getIranCities } from "../api/api";
import { createUserAccount, signInAccount } from "../appwrite/api";

export const useCreateNewUser = () => {
  return useMutation({
    mutationFn: (data) => createUserAccount(data),
  });
};
export const useSignInUser = () => {
  return useMutation({
    mutationFn: (data) => signInAccount(data),
  });
};
export const useGetIranCities = () => {
  return useQuery({
    queryKey: ["getIranCities"],
    queryFn: () => getIranCities(),
  });
};
