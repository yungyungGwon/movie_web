import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setvalue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setvalue((prev)=> prev + 1);

  useEffect(() => {
    console.log("I run Only once.");
  }, []);/*uesEffect는 한번만 실행되도록 하는 함수*/
  
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    if(keyword !== "" & keyword.length > 5){ 
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);/*[]안에 변수를 넣어주면 값이 변경될때에만 해당 함수가 시행되도록 해줌!*/
  
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange}
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
 
/*
NPM은 패키지 관리자이며 NPM을 사용하여 node.js 패키지를 설치할 수 있습니다

NPX는 node.js 패키지를 실행하는 도구입니다.
*/