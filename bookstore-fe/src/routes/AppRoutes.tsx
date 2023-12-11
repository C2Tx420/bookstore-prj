import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import DefaultLayout from '../components/layout/DefaultLayout'
import Detail from '../pages/Detail'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}