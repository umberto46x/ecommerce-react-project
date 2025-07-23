import { HotProducts } from './features/homepage/components/HotProducts';
import { useGetProductsByAPI } from './hooks/useGetProductsByAPI';
import { Navbar } from './layouts/Navbar';
import './styles/App.css';

function App() {
useGetProductsByAPI();

  return (
    <>
      <Navbar></Navbar>
      <HotProducts ></HotProducts>
    </>
  );
}

export default App;
