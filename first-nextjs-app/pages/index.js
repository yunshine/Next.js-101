import Link from 'next/link';

const Index = () => {
  console.log('running index...');
  return (
    <div>
      <h1>the index page...</h1>
      <Link href='/about'>
        <a>Link to the About Page</a>
      </Link>
      <br></br>
      <Link href='/contact'>
        <a>Link to the Contact Page</a>
      </Link>
    </div>
  );
};

export default Index;

// npm run start    =>  this will start the server; then use localhost3000...
