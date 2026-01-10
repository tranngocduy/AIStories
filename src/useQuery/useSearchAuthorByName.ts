import { ServiceAPI } from '@/apis';
import { useQuery, QUERY_KEYS } from '@/useQuery/constants';

const _loadData = async ({ search }: { search: string }) => {
  const result = await ServiceAPI.searchAuthorByName(search);

  return result?.data?.items || [];
}

export const useSearchAuthorByName = ({ search }: { search: string }) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.SEARCH_AUTHOR_BY_NAME, { search }],
    queryFn: async () => await _loadData({ search }),
    enabled: !!search
  });

  return query;
};
