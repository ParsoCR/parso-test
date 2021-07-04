function MenuItem({ data: { label, link } }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link ? link : '#'}>
        <span data-feather="file-text"></span>
        {label}
      </a>
    </li>
  );
}