import Background from "./Background";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Background */}
      <Background />
      {/* Main Layout Content (Header, Footer, and Dynamic Content) */}
      {children}
    </div>
  );
};

export default Layout;
