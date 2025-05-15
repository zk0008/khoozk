import Background from "./Background";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <Background />
      {/* Main Layout Content (Header, Footer, and Dynamic Content) */}
      {children}
    </div>
  );
};

export default Layout;
