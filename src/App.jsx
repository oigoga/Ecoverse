import React, { useState, useEffect } from 'react'
import Splashscreen from './components/Splashscreen'
import AppContent from './components/AppContent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
   <>
 <BrowserRouter>
      {loading ? <Splashscreen /> : <AppContent />}
</BrowserRouter>
   </>
   
  )
}

export default App

