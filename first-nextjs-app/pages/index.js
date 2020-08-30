import Navbar from '../components/Navbar';

const Index = () => {
  console.log('running index...');
  return (
    <div>
      <Navbar />
      <h1>the index page...</h1>
    </div>
  );
};

export default Index;

// npm run start    =>  this will start the server; then use localhost3000...
