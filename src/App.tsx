import { Routes, Route } from 'react-router-dom'
import './components/Base.scss'
import Layout from './components/Layout'
import List from './pages/List'
import Edit from './pages/Edit'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="edit" element={<Edit />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
