import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IItem } from '../reducers/itemSlice';

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        getItems: builder.query<IItem[], string>({
            query: (name) => `items`,
        })
    })
})

export const { useGetItemsQuery } = itemsApi;