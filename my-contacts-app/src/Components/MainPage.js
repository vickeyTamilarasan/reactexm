import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import GoogleContacts from '../images/GoogleContacts.png'
import '../Components/Main.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import IosShareIcon from '@mui/icons-material/IosShare';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactList from './ContactList';

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(true)
  const navi = useNavigate();
  function toggleDrawer() {
    setIsOpen((prevState) => !prevState)
  }


  function createCon() {
    navi('/create')

  }
  function Mycontacts() {
    navi('/')

  }

  function trashList() {
    navi('/trashlist')
  }

  return (
    <div >
      <div>
        
        <div id='menuHeader' className='ms-3 mt-3 row'>
          <div className='col-md-3 d-flex'>
            <MenuIcon id='menu' onClick={toggleDrawer} />
            <img className='ms-4' id='icons' src={GoogleContacts} alt='mycontact' />
            <h4 className='ms-3 text-primary'>
              Contacts
            </h4>
          </div>
          <div className='col-md-6'>
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback">
                <SearchIcon />
              </span>

              <input type="text" className="form-control" placeholder="Search" />
            </div>

          </div>
          <div id='menuHeadercol3' className='col-md-3 text-end'>
            <HelpOutlineIcon id='icons' />
            <SettingsIcon id='icons' />
          </div>
        </div>

        <div id='body' className='row mt-3'>
          <div className='col-3'>
            <div >
              <Drawer className='navDrawer' open={isOpen}
                onClose={toggleDrawer} direction='left'
                overlayOpacity={0}>
                <div className='mt-4' text-center>
                  <button className='btn btn-secondary w-75 createcon' onClick={createCon}>
                    <AddIcon /> Create Contact
                  </button>
                </div>
                <li id='navOp' onClick={Mycontacts}>
                  <div className='row container mt-3' >
                    <div className='col-2'>
                      <PersonOutlineIcon id='icons' />
                    </div>
                    <div className='col-10 mt-1'>
                      <p>Contacts</p>
                    </div>
                  </div>
                </li>
                <li id='navOp'>
                  <div className='row container mt-2'>
                    <div className='col-2'>
                      <ReplayOutlinedIcon id='icons' />
                    </div>
                    <div className='col-10 mt-1'>
                      <p>Frequants</p>
                    </div>
                  </div>
                </li>
                <li id='navOp'>
                  <div className='row container mt-2'>
                    <div className='col-2'>
                      <IosShareIcon id='icons' />
                    </div>
                    <div className='col-8 mt-1'>
                      <p>Other Contacts</p>
                    </div>
                    <div className='col-2 mt-1'>
                      <InfoOutlinedIcon id='icons' />
                    </div>
                  </div>
                </li>
                <li id='navOp' onClick={trashList}>
                  <div className='row container mt-2'>
                    <div className='col-2'>
                      <DeleteOutlineIcon id='icons' />
                    </div>
                    <div className='col-10 mt-1'>
                      <p>Trash</p>
                    </div>
                  </div>
                </li>
              </Drawer>
            </div>
          </div>
          <div className='col-9'>
            <ContactList />

          </div>
        </div>

        <div  >
          <button className='btn btn-primary m-5 flotingbtn' onClick={createCon}>
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
