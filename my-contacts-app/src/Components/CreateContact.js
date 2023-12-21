import React, { useState } from 'react'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import '../Components/Createcon.css'
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleContacts from '../images/GoogleContacts.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';

import IosShareIcon from '@mui/icons-material/IosShare';
import AddIcon from '@mui/icons-material/Add';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CreateContact() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [company, setCompany] = useState('');
  const [jobTiltle, setJobtitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [notes, setNotes] = useState('');
  const [isOpen, setIsOpen] = useState(true)
  const navi = useNavigate()
  function toggleDrawer() {
    setIsOpen((prevState) => !prevState)
  }

  function createCon() {
    navi('/create')

  }

  function Save(event) {
    event.preventDefault();
    axios.post('http://localhost:4000/contact',
      {
        name: firstName + lastName,
        company: company,
        jobtitle: jobTiltle,
        email: email,
        phoneNo: phone,
        dateofbirth: birthday,
        userNotes: notes
      })
    setFirstname('')
    setLastname('')
    setCompany('')
    setJobtitle('')
    setEmail('')
    setPhone('')
    setBirthday('')
    setNotes()
    navi('/')
  }
  function Mycontacts() {
    navi('/')
    
  }

  function trashList(){
    navi('/trashlist')
  }
  return (
    <div>
      <div className='position-sticky'>
        <div className='ms-3 mt-3 row container sticky-top '>
          <div className='col-lg-2 d-flex'>
            <MenuIcon id='menu' onClick={toggleDrawer} />
            <img className='ms-4' id='icons' src={GoogleContacts} alt='mycontact' />
            <h4 className='ms-3 text-primary'>
              Contacts
            </h4>
          </div>
          <div className='col-lg-8'>
            <div className="form-group has-search col-12  ">
              <span className="fa fa-search form-control-feedback">
                <SearchIcon />
              </span>

              <input type="text" className="form-control" placeholder="Search" />
            </div>

          </div>
          <div className='col-lg-2'>
            <HelpOutlineIcon id='icons' />
            <SettingsIcon id='icons' />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='row container'>
          <div className='col-9'>

          </div>
          <div className='col-3'>
            <button onClick={Save} className='btn btn-primary w-50'>
              Save
            </button>
          </div>
        </div>
        <hr />
        <div className='row container mt-5'>
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
                  <div  className='row container mt-3'>
                    <div className='col-2'>
                      <PersonOutlineIcon id='icons' />
                    </div>
                    <div className='col-10 mt-1'>
                      <p>Contacts</p>
                    </div>
                  </div>
                </li>
                <li id='navOp'>
                  <div  className='row container mt-2'>
                    <div className='col-2'>
                      <ReplayOutlinedIcon id='icons' />
                    </div>
                    <div className='col-10 mt-1'>
                      <p>Frequants</p>
                    </div>
                  </div>
                </li>
                <li id='navOp'>
                  <div  className='row container mt-2'>
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
                <div  className='row container mt-2'>
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
          <div className='col-9' id='inputLayout'>
            <div className='row container'>
              <div className='col-md-3 text-end'>
                <PersonOutlineIcon className='mt-3' id='createicon' />
              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="text" className="form-control"
                  id="floatingInput"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)} />
                <label className='ms-3' for="floatingInput">First name</label>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-3 text-end'>

              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="text" className="form-control"
                  id="floatingInput"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)} />
                <label className='ms-3' for="floatingInput">Last name</label>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-3 text-end'>
                <CorporateFareIcon className='mt-3' id='createicon' />
              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="text" className="form-control"
                  id="floatingInput"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)} />
                <label className='ms-3' for="floatingInput">Company</label>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-3 text-end'>

              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="text" className="form-control"
                  id="floatingInput"
                  value={jobTiltle}
                  onChange={(e) => setJobtitle(e.target.value)} />
                <label className='ms-3' for="floatingInput">Job title</label>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-3 text-end'>
                <EmailOutlinedIcon className='mt-3' id='createicon' />
              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="email" className="form-control"
                  id="floatingInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <label className='ms-3' for="floatingInput">Email address</label>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-3 text-end'>
                <PhoneIcon className='mt-3' id='createicon' />
              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="text" className="form-control"
                  id="floatingInput"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} />
                <label className='ms-3' for="floatingInput">Phone</label>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-3 text-end'>
                <CakeIcon className='mt-3' id='createicon' />
              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="text" className="form-control"
                  id="floatingInput"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)} />
                <label className='ms-3' for="floatingInput">BirthDay</label>
              </div>
            </div>
            <div className='row container'>
              <div className='col-md-3 text-end'>
                <NoteOutlinedIcon className='mt-3' id='createicon' />
              </div>
              <div class="col-md-9 form-floating mb-3">
                <input type="text" className="form-control"
                  id="floatingInput"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)} />
                <label className='ms-3' for="floatingInput">Notes</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
