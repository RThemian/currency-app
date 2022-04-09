import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
      This sucks! My money sucks!
      </h1>
      <div>
        <form>Input Dollars here
          <input
            type = "checkbox"/>
            <input type="time"/>
            <input type="url"/>
            <input type="week"/>

        </form>
        </div>
        <div>
        <p>Choose your favorite Web language:</p>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>
        </div>
      </div>
    
  );
}

export default App;
