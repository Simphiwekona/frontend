import './App.css';
import Counter from './components/counter/Counter';
import Employees from './components/listOfUsers/Employees';
import EmployerModal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid d-flex justify-content-between'>
          <h3 className='navbar-brand'>Employee Portal</h3>
          <EmployerModal />
        </div>
      </nav>

      <div className='container'>
        <div className='row'>
          {/* <div className='col-8'>
            <input type='text' placeholder='Search' className='form-control mt-4' />
            
          </div> */}
          {/* <div className='col-4'>
            <EmployerModal />
          </div> */}

          <Employees />
        </div>

      </div>
    </div>
  );
}

export default App;
