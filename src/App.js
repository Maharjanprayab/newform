import logo from './logo.svg';
import './App.css';
import './app-animation.css';
import Basic, { SignupForm } from './form';
import { New } from './testForm';

function App() {
  return (
    <section>

      <div>
        <div>

          <New />
          <SignupForm />
      
        </div>
      </div>

    </section>
  );
}

export default App;
