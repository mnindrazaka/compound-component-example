import React from 'react'
import Search from './components/Search'
import './App.css'

function App() {
  return (
    <div>
      <Search
        fields={['name', 'phone']}
        items={[
          { name: 'aka', phone: '085331247098' },
          { name: 'zaka', phone: '085331247097' },
          { name: 'nindra', phone: '085331247096' }
        ]}
      />
    </div>
  )
}

export default App
