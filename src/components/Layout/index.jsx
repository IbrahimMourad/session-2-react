const Layout = (props) => {
  console.log('🚀 ~ Layout ~ props:', props);
  return (
    <div>
      <header>
        <h5>Hello</h5>
      </header>
      <hr />
      <main className='App'>{props.children}</main>
      <hr />

      <footer>copyright reserved</footer>
    </div>
  );
};

export default Layout;
