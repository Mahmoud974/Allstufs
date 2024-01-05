"use client"
import "../app/globals.css"
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body>
          {children}
          <ReactQueryDevtools />
        </body>
      </html>
    </QueryClientProvider>
  );
}
