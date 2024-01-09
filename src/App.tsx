import { Provider } from 'react-redux';
import Header from './Header';
import ProductSalesView from './ProductSalesView';
import jsonData from './stackline_frontend_assessment_data_2021.json';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <ProductSalesView {...jsonData[0]}/>
        <p>Icons by <a href="https://icons8.com/icons">Icons8</a></p>
      </div>
    </Provider>
  );
}

export default App;
