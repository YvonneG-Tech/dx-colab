import { useQuery } from 'convex/react';

import { api } from '../../../../convex/_generated/api';
import { Id } from 'convex/_generated/dataModel';
interface UseGetWorkspaceProps {
  id: Id<'workspaces'> | undefined;
}

export const useGetWorkspace = ({ id }: UseGetWorkspaceProps) => {
  if (!id) {
    return {
      data: undefined,
      isLoading: false,
    };
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useQuery(api.workspaces.getById, { id: id!});
  const isLoading = data === undefined;

  return { data, isLoading };
};