
import './App.css';

// FILE IMPORTS//
import Navbar from './Components/Navbar/Navbar.js';
import StickyFooter from './Components/Footer/Footer.js';
import Legend from './Components/Legend/Legend.js'
import SectionSummaries from './Components/SectionSummaries/SectionSummaries';
import Dashboard from './Components/Dashboard/Dashboard.js';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <legend>
        <Legend />
        <br/>
        <br/>
      </legend>

      <body>
        <Dashboard/>
      </body>
      <br/>
        <br/>
      <section>
        <SectionSummaries />
      </section>
      <footer>
        <StickyFooter />
        </footer>
    </div>
  );
}

export default App;
