import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Videos from "./components/Videos";
import Profile from "./components/Profile";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import Navigation from "./components/Navigation";

const { persistor, store } = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            {/* <Route path="/videos" element={<Videos />} /> */}
            {/* <Route index element={<Videos />} /> */}
            <Route index element={<Login />} />
            <Route
              path="/videos"
              element={
                <>
                  <Navigation />
                  <Videos />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Navigation />
                  <Profile />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
