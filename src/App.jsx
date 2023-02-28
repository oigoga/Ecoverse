import React, { useState, useEffect } from 'react'
import Splashscreen from './components/Splashscreen'
import AppContent from './components/AppContent';

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
   <>
      {loading ? <Splashscreen /> : <AppContent />}

   </>
   
  )
}

export default App

