import './App.css';
import Form from './dynamic-form/form';
import { formData } from "./formTemplate";
function App() {
  return (
    <div className="App">
      <Form formData={formData} />
    </div>
  );
}

export default App;
