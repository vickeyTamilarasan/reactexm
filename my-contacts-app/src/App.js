import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './Components/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateContact from './Components/CreateContact';
import EditContacts from './Components/EditContacts';
import TrashList from './Components/TrashList';

function App() {
  return (
    <div >
      {/* <MainPage /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<CreateContact />} path='/create' />
          <Route element={<EditContacts />} path='/edit' />
          <Route element={<TrashList/>} path='/trashlist'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
