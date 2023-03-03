import { Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import LandingPage from './LandingPage.jsx'
import Homepage from './Homepage.jsx'
import { Provider } from 'react-redux'
import store from './LoginRedux/Store.js'

function App() {

  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Homepage /> } />
        {/* <Route path='/dashboard' element={sessionStorage.getItem('username') ? <Homepage /> : <Login />} /> */}
      </Routes>
    </Provider>
  );
}


export default App
