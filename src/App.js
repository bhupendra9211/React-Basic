import './App.css'
import Header from './components/header'
import Footer from './components/Footer.jsx'
import Food from './components/Food.jsx'

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

function App(){
  return(
    <div>
      <Header />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
