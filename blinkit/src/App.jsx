import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Home from './redux/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Bread from './component/Bread'
import Muesli from './component/Muesli'
import Paneer from './component/Paneer'
import Butter from './component/Butter'
import Cheese from './component/Cheese'
import Bar from './component/Bar'
import Curd from './component/Curd'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <Header/> */}
        {/* <Home/> */}
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='Bread' element={<Bread/>}></Route>
                <Route path='Muesli' element={<Muesli/>}></Route>
                <Route path='Paneer' element={<Paneer/>}></Route>
                <Route path='Curd' element={<Curd/>}></Route>
                <Route path='Butter' element={<Butter/>}></Route>
                <Route path='Cheese' element={<Cheese/>}></Route>
                <Route path='Bar' element={<Bar/>}></Route>
              </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  )
}
