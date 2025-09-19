import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface UseCurrentMemberProps {
  workspaceId: Id<"workspaces"> | undefined;
}

export const useCurrentMember = ({ workspaceId }: UseCurrentMemberProps) => {
  if (!workspaceId) {
    return { 
      data: undefined,
      isLoading: false,
     };
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useQuery(api.members.current, { workspaceId: workspaceId!});
  const isLoading = data === undefined;

  return { data, isLoading };
};