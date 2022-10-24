import AllQuranPages from "./components/AllQuranPages";
import Main from "./components/Main";
import Search from "./components/Search";
import { Routes, Route, Navigate } from "react-router-dom";
import Setting from "./components/Setting";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/pages/:id" element={<AllQuranPages />}>
            <Route path=":surahNumberSearch" element={<AllQuranPages />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/main" />} />
          <Route path="/main" element={<Main />} />

          <Route path="/search" element={<Search />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
