import Nav from "./Nav";

const Layout = () => {
  return (
    <div className="container-fluid">
      <h1>Galerie Photo</h1>

      <Nav
        links={[
          { name: "À propos", url: "/about" },
          { name: "Galerie", url: "/galerie" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* Les différentes vue de l'app seront affichées dans le main ci-dessous */}
      <main></main>
    </div>
  );
};

export default Layout;
