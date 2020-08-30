import Link from 'next/link';

const Navbar = () => {
  const styles = {
    display: 'flex',
    background: 'grey',
    justifyContent: 'space-between',
    padding: '1rem',
  };

  return (
    <div style={styles}>
      <Link href='/'>
        <a>Link to the Index Page</a>
      </Link>
      <Link href='/about'>
        <a>Link to the About Page</a>
      </Link>
      <Link href='/contact'>
        <button>Link to the Contact Page</button>
      </Link>
    </div>
  );
};

export default Navbar;
