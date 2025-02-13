import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import "@mantine/core/styles.css";
import Layout from "./components/Layout";
import SizeIndicator from "./components/SizeIndicator.tsx";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <StrictMode>
      <Layout>
        <Header />
        <App />
        <Footer />
        <SizeIndicator />
      </Layout>
    </StrictMode>
  </MantineProvider>
);
