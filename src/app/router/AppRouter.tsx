import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthRouter } from "../views/auth/AuthRouter";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../views/auth/store/userSlice";
import Home from "../views/tasks/home/Home";
import { Layout } from "../components/Layout";
import CreateTask from "../views/tasks/create/CreateTask";
import RecycleBin from "../views/tasks/recycle-bin/RecycleBin";

export function AppRouter() {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <Router>
      {!loggedIn ? (
        <AuthRouter></AuthRouter>
      ) : (
        <Routes>
          <Route path="/home" element={<Layout><Home /></Layout>}></Route>
          <Route path="/create" element={<Layout><CreateTask /></Layout>}></Route>
          <Route path="/recycle-bin" element={<Layout><RecycleBin /></Layout>}></Route>
          <Route path="/*" element={<Navigate to={"/home"} replace/>}></Route>
        </Routes>
      )}
    </Router>
  );
}
