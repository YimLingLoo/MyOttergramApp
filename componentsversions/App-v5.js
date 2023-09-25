import './App.css';

import Header from './components/Header';
import Post from './components/Post';

import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

function App() {
  return (
    <div>
      <Header/>
      <ul className='post-list'>
        
        <Post image={Barry} name='Barry' />
        <Post image={Robin} name='Robin' />
        <Post image={Maurice} name='Maurice' />
        <Post image={Lesley} name='Lesley' />
        <Post image={Barbara} name='Barbara'/>
 
      </ul>
    </div>
  );
}

export default App;
