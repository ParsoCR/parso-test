function Menu() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar main-menu">
      <ul className="nav flex-column mb-2">
        {[
            { label: "Home", link: "/" }, 
            { label: "Mapas", link: "/maps" }, 
            { label: "Pruebas" }, 
            { label: "Reporte" },
          ].map((item, index) =>
          <MenuItem key={index} data={item} />
        )}
      </ul>   
    </nav>
  );
}
