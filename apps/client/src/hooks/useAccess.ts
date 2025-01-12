import { useCallback, useMemo } from "react";
import { Role } from "../types";

const user = {
  role: Role.Admin,
};

export const useAccess = () => {
  // const { data: user } = useGetProfile();

  const can = useCallback((role?: Role) => {
    const userRole = user?.role;

    return user && (userRole === Role.Admin || userRole === role);
  }, []);

  return useMemo(
    () => ({
      isAuth: !!user,
      can,
    }),
    [can],
  );
};
