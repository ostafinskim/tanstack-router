import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact-us/$country/$city')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contact-us/$country/$city"!</div>
}
