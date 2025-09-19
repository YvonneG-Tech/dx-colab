# Copilot Instructions for AI Coding Agents

This codebase is a Next.js application with a modular structure and a Convex backend for real-time data and functions. Follow these guidelines to be productive and maintain project conventions:

## Architecture Overview
- **Frontend:** Located in `src/` using Next.js App Router. Pages and features are organized by domain (e.g., `auth`, `workspace`, `channels`). Shared UI components are in `src/components/ui/`.
- **Backend:** Convex functions live in `convex/`. Each file (e.g., `channels.ts`, `messages.ts`) defines query and mutation functions using Convex's API. See `convex/README.md` for function patterns.
- **Data Flow:** React components use Convex hooks (`useQuery`, `useMutation`) to interact with backend functions. Data is passed via validated arguments and returned as objects for rendering.

## Developer Workflows
- **Start Dev Server:**
  - Run: `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
  - App runs at [http://localhost:3000](http://localhost:3000)
- **Edit Frontend:**
  - Main entry: `src/app/page.tsx`
  - Add features in `src/features/` and UI in `src/components/`
- **Edit Backend:**
  - Add/modify Convex functions in `convex/`. Use `query` and `mutation` patterns as shown in `convex/README.md`.
- **TypeScript:**
  - Use strict typing. Shared types are in `src/features/[domain]/types.ts`.
- **Config Files:**
  - Project-wide configs: `tsconfig.json`, `eslint.config.mjs`, `next.config.ts`, `postcss.config.mjs`

## Project-Specific Patterns
- **Domain-Driven Structure:**
  - Features are grouped by domain (auth, channels, members, etc.) with their own API, components, and store folders.
- **Convex Function Pattern:**
  - Always validate arguments with `v` from `convex/values`.
  - Use `ctx.db.query("tablename")` for reads; mutations for writes.
- **UI Components:**
  - Reusable UI elements are in `src/components/ui/`. Follow existing patterns for props and styling.
- **Providers:**
  - Context providers (e.g., `Convex-Client-Provider.tsx`, `jotai-provider.tsx`) wrap the app for state and data access.

## Integration Points
- **Convex:**
  - All backend logic is in `convex/`. Frontend interacts via Convex hooks.
- **Authentication:**
  - Auth logic is in `src/features/auth/` and `convex/auth.ts`.
- **Workspace/Channels:**
  - Workspace and channel logic is split between `src/features/workspaces/`, `src/features/channels/`, and corresponding Convex files.

## Examples
- **Convex Query Example:**
  ```ts
  export const getMessages = query({
    args: { channelId: v.string() },
    handler: async (ctx, args) => ctx.db.query("messages").filter(...).collect(),
  });
  ```
- **React Usage:**
  ```ts
  const messages = useQuery(api.messages.getMessages, { channelId });
  ```

## References
- See `convex/README.md` for backend function patterns.
- See `src/features/` for domain-driven frontend structure.
- See `src/components/ui/` for reusable UI components.

---

If any section is unclear or missing important project-specific details, please provide feedback to improve these instructions.