import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "7e4390782fmshaeee5fbac97eccep1ae0bfjsn16ef7efac987",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url) => {
  return {
    url,
    headers: cryptoApiHeaders,
  };
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi", // what is this reducer for ?
  baseQuery: fetchBaseQuery({ baseUrl }), // what is the base url ?
  endpoints: (builder) => ({
    // this is the endpoint builder function.
    getCryptos: builder.query({
      // get cryptos endpoint, that uses url. baseURL/exchanges
      query: () => createRequest("/coins"),
    }),
  }),
});
