import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { stringify } from "qs";
import { axiosCreate } from "./../utils/http-wrapper";

export interface CustomErrorType {
  status: number;
  data?: { message: string };
}

const axiosBaseQuery = (
  axiosConfig: AxiosRequestConfig<unknown>,
): BaseQueryFn<AxiosRequestConfig> => {
  const axiosInstance = axiosCreate(
    {
      paramsSerializer: {
        serialize: (params: unknown) =>
          stringify(params, { arrayFormat: "comma", skipNulls: true }),
      },
      ...axiosConfig,
    },
    0,
  ).instance;

  return async (reqConfig: AxiosRequestConfig) => {
    try {
      const { data } = await axiosInstance<unknown, AxiosResponse<unknown>>(reqConfig);
      return { data };
    } catch (error) {
      const err = error as AxiosError;

      return {
        error: {
          status: err.response?.status || 500,
          data: err.response?.data,
        },
      };
    }
  };
};

export default axiosBaseQuery;
