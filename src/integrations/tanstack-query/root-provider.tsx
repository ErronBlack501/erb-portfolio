import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useState } from 'react'

export function getContext() {
  const queryClient = new QueryClient()

  return {
    queryClient,
  }
}
export default function TanstackQueryProvider({
  children,
}: {
  children: ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
