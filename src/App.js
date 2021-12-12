import AppRouter from "./components/Router";
import "./styles/base.css";

function App() {
  return (
    <>
      <AppRouter />
      <footer> &copy;{new Date().getFullYear()} Movie Web</footer>
    </>
  );
}

export default App;

/*
NPM은 패키지 관리자이며 NPM을 사용하여 node.js 패키지를 설치할 수 있습니다

NPX는 node.js 패키지를 실행하는 도구입니다.
*/
