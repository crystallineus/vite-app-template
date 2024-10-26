import Footer from './components/Footer';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';

function App() {
  // return <RouterProvider router={router} />;
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <MovieGrid />
      </div>
      <Footer />
    </div>
  )
}

export default App;
