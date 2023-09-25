import './App.css';

import Header from './components/Header';
import Post from './components/Post';

import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

function App() {
  return (
    <div>
      <Header/>
      
      <ul className='post-list'>
        
        <Post/>
        
        <li className='post-component'>
          <button>
            <img src={Robin} alt='Robin'/>
            <p>Robin</p>
          </button>
        </li>
        <li className='post-component'>
          <button>
            <img src={Maurice} alt='Maurice'/>
            <p>Maurice</p>
          </button>
        </li>
        <li className='post-component'>
          <button>
            <img src={Lesley} alt='Lesley'/>
            <p>Lesley</p>
          </button>
        </li>
        <li className='post-component'>
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
