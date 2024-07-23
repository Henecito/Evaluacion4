import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import RequestForm from './components/RequestForm';
import RequestsTable from './components/RequestsTable';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [requests, setRequests] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('requestForm-'));
    const data = keys.map(key => JSON.parse(localStorage.getItem(key)));
    setRequests(data);
  }, []);

  const addNew = (formData) => {
    setRequests(prevRequests => {
      const updatedRequests = [...prevRequests, formData];
      localStorage.setItem(`requestForm-${formData.id}`, JSON.stringify(formData));
      return updatedRequests;
    });
  };

  const updateRecord = (updatedData) => {
    setRequests(prevRequests => {
      const updatedRequests = prevRequests.map(req => req.id === updatedData.id ? updatedData : req);
      localStorage.setItem(`requestForm-${updatedData.id}`, JSON.stringify(updatedData));
      return updatedRequests;
    });
    setEditMode(false);
  };

  const deleteRecord = (id) => {
    setRequests(prevRequests => {
      const filteredRequests = prevRequests.filter(req => req.id !== id);
      localStorage.removeItem(`requestForm-${id}`);
      return filteredRequests;
    });
  };

  const editRecord = (data) => {
    setEditData(data);
    setEditMode(true);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/request"
            element={
              <div className="container">
                <div className="form-container">
                  <RequestForm addNew={addNew} editMode={editMode} editData={editData} updateRecord={updateRecord} />
                </div>
                <div className="table-container">
                  <RequestsTable requests={requests} editRecord={editRecord} deleteRecord={deleteRecord} />
                </div>
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;