import { Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
// import Homepage from './Homepage.js'
import Meeting from './Meeting.jsx'
import { Provider } from 'react-redux'
import store from './LoginRedux/Store.js'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Meeting />} />
        {/* <Route path='/' element={sessionStorage.getItem('username')?<Homepage />:<Login />} /> */}
        {/* <Route path='/' element={sessionStorage.getItem('username')?<Meeting />:<Login />} /> */}
      </Routes>
    </Provider>
  );
}


export default App
