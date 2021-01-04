import Navigation from "./Navigation";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
