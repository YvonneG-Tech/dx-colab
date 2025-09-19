import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
interface useGetChannelsProps {
    workspaceId: Id<"workspaces"> | undefined;
}
export const useGetChannels = ({ workspaceId }: useGetChannelsProps) => {
    if (!workspaceId) {
        return { data: undefined, isLoading: false };
    }  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useQuery(api.channels.get, { workspaceId });
    const isLoading = data === undefined;
    return { data, isLoading };
}