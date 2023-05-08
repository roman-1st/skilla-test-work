import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Baze from "./components/Baze/Baze";
// import CallsPageContainer from "./components/CallsPageContainer/CallsPageContainer";
import CallsPageContainer from "./components/CallsPageContainer/CallsPageContainer";
import Contragents from "./components/Contragents/Contragents";
import Documents from "./components/Documents/Documents";
import Header from "./components/Header/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Messages from "./components/Messages/Messages";
import Navibar from "./components/Navibar/Navibar";
import Orders from "./components/Orders/Orders";
import Performances from "./components/Performances/Performances";
import Reports from "./components/Reports/Reports";
import Results from "./components/Results/Results";
import Settings from "./components/SettingsContainer/SettingsContainer";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Layout />
          <Routes>
            <Route path="results" element={<Results />} />
            <Route path="orders" element={<Orders />} />
            <Route path="messages" element={<Messages /> } />
            <Route path="callslist" element={<CallsPageContainer />} />
            <Route path="contragents" element={<Contragents />} />
            <Route path="documents" element={<Documents />} />
            <Route path="performances" element={<Performances />} />
            <Route path="reports" element={<Reports />} />
            <Route path="baze" element={<Baze />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
      </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
