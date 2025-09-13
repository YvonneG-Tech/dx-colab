import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

export const useCurrentuser = () => {
    const data = useQuery(api.users.currentUser);
    const isLoading = data === undefined;
    return { data, isLoading }
}