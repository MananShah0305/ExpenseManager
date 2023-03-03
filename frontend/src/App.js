import { Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import LandingPage from './LandingPage.jsx'
import { Provider } from 'react-redux'
import store from './LoginRedux/Store.js'

function App() {

  return (
    <Provider store={store}>
      <Routes>
        {/* <Route path='/' element={sessionStorage.getItem('username') ? <Page /> : <Login />} /> */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Provider>
  );
}


export default App
