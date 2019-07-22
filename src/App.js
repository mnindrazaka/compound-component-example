import React from 'react'
import Search from './components/Search'
import './App.css'

function App() {
  return (
    <Search.Container>
      <Search.Filter keys={['name', 'phone']} />
      <Search.Input placeholder="Search Phone" />
      <Search.Result
        items={[
          { name: 'aka', phone: '085331247098' },
          { name: 'zaka', phone: '085331247097' },
          { name: 'dirga', phone: '085331247096' }
        ]}
      />
    </Search.Container>
  )
}

export default App
