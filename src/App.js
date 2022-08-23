import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm  from './features/signup/signup';
import SignInForm  from './features/signin/signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <SignUpForm />}>
            <Route path="/signin" element={ <SignInForm />} />
          </Route>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
