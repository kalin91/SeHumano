
import './App.css';
//import NavigationBar from './components/NavigatonBar';
import CustomNavbar from './components/CustomNavbar'
import Footer from './components/Footer'
import Posts from './components/Posts';
import { Provider } from 'react-redux'
import store from './redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RUTAS } from './helpers/rutas';
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {/* <NavigationBar /> */}
          <CustomNavbar />
          <div className="Content">
            <Routes>
              {RUTAS}
            </Routes>
          </div>
          <Posts />
        </div>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
