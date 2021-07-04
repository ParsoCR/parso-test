function Menu() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar main-menu">
      <ul className="nav flex-column mb-2">
        {["Home", "Mapas", "Pruebas", "Reporte"].map(item =>
          <MenuItem text={item} />
        )}
      </ul>   
    </nav>
  );
}
