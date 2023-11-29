import './App.css';
import Counter from './components/counter/Counter';
import Employees from './components/listOfUsers/Employees';
import EmployerModal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <h1>Employee Portal</h1>

      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <input type='text' placeholder='Search' className='form-control mt-4' />
          </div>
          <div className='col-4'>
            <EmployerModal />
          </div>

          <Employees />
        </div>

        </div>
    </div>
  );
}

export default App;
