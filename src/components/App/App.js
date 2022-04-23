import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { routes } from '../../routes/routes';
import Menu from '../Menu/Menu';

function App() {
  return (
    <div className="App">
      react router config
      <Router>
        <Menu />
        {renderRoutes(routes)}
      </Router>
    </div>
  );
}

export default App;
