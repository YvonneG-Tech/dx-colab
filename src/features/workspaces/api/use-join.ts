"use client"
import { useQuery } from 'convex/react';
import { api } from 'convex/_generated/api';
import { useMutation} from 'convex/react';

export const useJoin = () => {
  const mutation = useMutation(api.workspaces.join);

  return {
    mutate: (args, callbacks) => mutation.mutate(args, callbacks),
    isPending: mutation.isPending,
  };
};

export const useGetWorkspaces = () => {
  const data = useQuery(api.workspaces.get);
  const isLoading = data === undefined;

  return { data, isLoading };
};