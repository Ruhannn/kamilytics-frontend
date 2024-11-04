import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import router from "./routes/index.tsx";
import "./index.css";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";
import { Toaster } from "sonner";

const qc = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={qc}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="antialiased bg-background text-text">
          <Toaster />
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
