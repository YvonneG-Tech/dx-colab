import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export const useGetWorkspaces = () => {
  const data = useQuery(api.workspaces.get);
  const isLoading = data === undefined;

  return { data, isLoading };
};

export function useJoin(): { mutate: unknown; isPending: unknown; } {
  throw new Error("Function not implemented.");
}
