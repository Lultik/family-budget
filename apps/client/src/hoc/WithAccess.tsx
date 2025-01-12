import type { ComponentType, ReactElement } from "react";
import { Navigate } from "react-router";
import { useAccess } from "../hooks";
import type { Role } from "../types";

interface WithAccessOptions {
  role: Role | boolean;
}

export const withAccess = (
  Component: ComponentType,
  options?: WithAccessOptions,
  fallback: ReactElement = <Navigate to="/login" replace />,
) => {
  const { role } = options ?? {};

  return () => {
    const { isAuth, can } = useAccess();

    // role === true -> return component if 'user' is logged in,
    // role === false -> return component if not authorized
    if (typeof role === "boolean" && isAuth === role) {
      return <Component />;
    }

    // return component if user has the required role
    if (typeof role !== "boolean" && can(role)) {
      return <Component />;
    }

    //  return fallback if conditions aren't met
    if (fallback) {
      return fallback;
    }

    return null;
  };
};
