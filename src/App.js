import "./App.css";
import CustomHook from './hooks/customHook';
function App() {
  const [deletename, newArray, handleChange, handleDeletename] = CustomHook(); 
  return (
    <div className="App">
      <h4>学生一覧：[Huyen, Hoa, Hung, Long]</h4>
      <h4>削除値を入力してください</h4>
      <input onChange={handleChange} value={deletename}></input>
      <br/>
      <button onClick={() => handleDeletename(deletename)} style={{marginLeft: 120, marginTop: 20}}>
        確定
      </button>
      <h4>削除する名前: {deletename}</h4>
      <h4>新しい一覧：[{newArray}]</h4>
    </div>
  );
}

export default App;
