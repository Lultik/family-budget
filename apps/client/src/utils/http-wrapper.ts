/* eslint-disable no-console */
import Axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export const axiosCreate = (
  axiosSettings: AxiosRequestConfig = {},
  timeout = 10 * 1000,
  accept = "application/json",
) => {
  const instance = Axios.create({ ...axiosSettings });
  instance.defaults.timeout = timeout;
  instance.defaults.headers.common.Accept = accept;

  // Add api error response interceptor
  const apiErrorInterceptor = instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: unknown) => {
      console.log(error);
      return Promise.reject(error);
    },
  );

  return {
    instance,
    apiErrorInterceptor,
  };
};
