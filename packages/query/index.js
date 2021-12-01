import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from 'axios';

const queryClient = new QueryClient();

const defaultOption = {
  cacheTime: 60 * 1000, // query instance가 inactive 된 후 garbage collecting 되기 전까지의 캐시 유지 시간
  staleTime: 60 * 1000, // data가 stale하다고 인식하게 될 때 까지의 시간 (default 0)
}

const useGetAllTodosQuery = () =>
  useQuery(
    ['todos'],
    async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return result.data.slice(0, 10);
    },
    defaultOption,
  );


export {
  useGetAllTodosQuery,
  queryClient,
  QueryClientProvider,
}
