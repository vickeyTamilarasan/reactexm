import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';
import GoogleContacts from '../images/GoogleContacts.png'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddIcon from '@mui/icons-material/Add';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { APITrash } from './APITrash'

export default function TrashList() {
    let [dataarr, setDataArr] = useState([]);
    const [isOpen, setIsOpen] = useState(true)
    const navi = useNavigate()
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

    useEffect(() => {
        axios.get('http://localhost:4000/contact').then((s) => {
            setDataArr(s.data);
            console.log(s.data);
        })
    }, [])


    function recover(id, names, mail, num, birth, comp, jobt, no) {
        axios.post('http://localhost:4000/contact',
            {
                _id: id,
                name: names,
                company: comp,
                jobtitle: jobt,
                email: mail,
                phoneNo: num,
                dateofbirth: birth,
                userNotes: no
            })

        axios.delete(`${APITrash}/${id}`).then(() => {
            axios.get('http://localhost:4000/contact').then((s) => {
                setDataArr(s.data);
            })
        })
    }

    function deleteitem(ids) {
        axios.delete(`${APITrash}/${ids}`).then(() => {
            axios.get('http://localhost:4000/contact').then((s) => {
                setDataArr(s.data);
            })
        })
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
                                <div className='row container mt-3'>
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
                    <div className='row position-relative container'>
                        <table className='table-hover'>
                            <thead>
                                <tr className='text-secondary'>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Why in Trash?
                                    </th>
                                    <th>
                                        Date Delete
                                    </th>
                                </tr>
                            </thead>
                            {dataarr.map((data) => (
                                <tbody>
                                    <tr >
                                        <td className='p-3'>
                                            {data.name}
                                        </td>
                                        <td>
                                            {data.email}
                                        </td>
                                        <td>
                                            {data.phoneNo}
                                        </td>
                                        <td>
                                            <SystemUpdateAltIcon id='listicon' onClick={() => recover(data._id,
                                                data.name, data.email, data.phoneNo, data.dateofbirth,
                                                data.company, data.jobtitle, data.userNotes)} />
                                            <DeleteOutlineIcon id='listicon' className='ms-2' onClick={() => deleteitem(data._id)} />
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
