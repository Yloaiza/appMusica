import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Navbar } from './components/Navbar'
import { Toaster } from 'react-hot-toast';
import './App.css'


function App() {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
  )
}

export default App
