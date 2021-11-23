import React, {useContext} from "react";
import './App.css';
import Navbar from "./components/navbar";
import AppRouter from "./components/appRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "./components/loader/loader";

function App() {
    const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader/>
    }

  return (
    <div>
        <Navbar/>
        <AppRouter/>
    </div>
  );
}

export default App;
