import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div class="Form">
    <div class="col">
      <label for="Password" class="col-form-label">Password</label>
    </div>
    <div class="col">
      <input type="password" id="Password" class="form-control" aria-describedby="passwordHelpInline"></input>
    </div>
    <div class="col">
      <span id="passwordHelpInline" class="form-text">
      Must be 8-20 characters long.
      </span>
    </div>
  </div>
  );
}

export default App;
