import {
  BrowserRouter as Router,
  Routes,
  Route,
}from  "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} ></Route>
      <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Detail />} ></Route>
    </Routes  >
  </Router>;
}
 
export default App;
 
/*
NPM은 패키지 관리자이며 NPM을 사용하여 node.js 패키지를 설치할 수 있습니다

NPX는 node.js 패키지를 실행하는 도구입니다.
*/ 