import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const budgetApi = createApi({
  reducerPath: "budgetApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/budget-record" }),
  endpoints: (builder) => ({
    getBudgetRecords: builder.query<{ _id: string; category: string; value: number }[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetBudgetRecordsQuery } = budgetApi;
