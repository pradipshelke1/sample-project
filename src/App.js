import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Videos from "./components/Videos";
import Profile from "./components/Profile";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import Navigation from "./components/Navigation";
import RecordedSection from "./components/recorded-section/RecordedSection";
import InterPlaySeries from "./components/Inter-Play-Series/InterPlaySeries";
import CgpiNavratna from "./components/cgpi-navratna/CgpiNavratna";
import NorthZone from "./components/north-zone/NorthZone";
import Other from "./components/other/Other";
import PaperPresentation from "./components/paper-presen/PaperPresentation";
import Refundunder from "./components/refund-under-gst/Refundunder";
import AuditAnnual from "./components/gst-audit-annualreturn/AuditAnnual";

const { persistor, store } = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route index element={<Login />} />
            <Route
              path="/inter-play-series"
              element={
                <>
                  <Navigation />
                  <InterPlaySeries />
                </>
              }
            />
            <Route
              path="/recorded-section"
              element={
                <>
                  <Navigation />
                  <RecordedSection />
                </>
              }
            />
            <Route
              path="/cgpi-navratna-web-series"
              element={
                <>
                  <Navigation />
                  <CgpiNavratna />
                </>
              }
            />

            {/* old routes */}
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
            <Route
              path="/north-zone"
              element={
                <>
                  <Navigation />
                  <NorthZone />
                </>
              }
            />
            <Route
              path="/other"
              element={
                <>
                  <Navigation />
                  <Other />
                </>
              }
            />
            <Route
              path="/paper-presentation"
              element={
                <>
                  <Navigation />
                  <PaperPresentation />
                </>
              }
            />
            <Route
              path="/refund-under-gst"
              element={
                <>
                  <Navigation />
                  <Refundunder />
                </>
              }
            />
            <Route
              path="/gst-audit-annual-return"
              element={
                <>
                  <Navigation />
                  <AuditAnnual />
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
