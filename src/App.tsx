import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useRouterContextState } from "./lib/use-router-context-state";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPendingMs: 0,
  defaultPreload: 'intent',
  context: {
    role: null,
    login: () => {},
    logout: () => {},
    isAdmin: false,
    isClient: false,
    isAuthenticated: false
  }
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const routerContextState = useRouterContextState()
  return <RouterProvider router={router} context={routerContextState} />
}