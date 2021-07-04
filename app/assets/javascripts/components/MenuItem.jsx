function MenuItem({ text }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        <span data-feather="file-text"></span>
        {text}
      </a>
    </li>
  );
}