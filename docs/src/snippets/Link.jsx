ReactDOM.render((
  <div>
    <Link>Enabled</Link>
    {' '}
    <Link use="success">Success</Link>
    {' '}
    <Link use="danger">Danger</Link>
    {' '}
    <Link use="grayed">Grayed</Link>
    {' '}
    <Link disabled>Disabled</Link>
  </div>
), mountNode);
