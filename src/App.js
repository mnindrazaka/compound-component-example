import React from 'react'
import Search from './components/Search'
import './App.css'

function App() {
  return (
    <Search.Container>
      <Search.Filter fields={['name', 'phone']} />
      <Search.Input />
      <Search.Result
        items={[
          { name: 'aka', phone: '085331247098' },
          { name: 'zaka', phone: '085331247097' },
          { name: 'nindra', phone: '085331247096' }
        ]}
      />
    </Search.Container>
  )
}

export default App
