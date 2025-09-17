import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { useMutation
  
 } from 'convex/react';
export const useJoin = () => {
  return useMutation(api.workspaces.join);
};
export const useGetWorkspaces = () => {
  const data = useQuery(api.workspaces.get);
  const isLoading = data === undefined;

  return { data, isLoading };
};

