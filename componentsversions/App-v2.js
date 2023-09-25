import './App.css';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

function App() {
  return (
    <div>
      <header>
        <h1>Ottergram</h1>
      </header>
      <ul>
        <li>
          <button>
            <img src={Barry} alt='Barry'/>
            <p>Barry</p>
          </button>
        </li>
        <li>
          <button>
            <img src={Robin} alt='Robin'/>
            <p>Robin</p>
          </button>
        </li>
        <li>
          <button>
            <img src={Maurice} alt='Maurice'/>
            <p>Maurice</p>
          </button>
        </li>
        <li>
          <button>
            <img src={Lesley} alt='Lesley'/>
            <p>Lesley</p>
          </button>
        </li>
        <li>
          <button>
            <img src={Barbara} alt='Barbara'/>
            <p>Barbara</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
