import React, { useEffect, useState } from 'react'
import PrintIcon from '@mui/icons-material/Print';
import IosShareIcon from '@mui/icons-material/IosShare';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { API } from './API'

export default function ContactList() {
  let [dataarr, setDataArr] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/contact').then((s) => {
      setDataArr(s.data);
      console.log(s.data);
    })
  }, [])

  function editContact(id, personName, personNumber) {
    localStorage.setItem("_id", id);
    localStorage.setItem("name", personName);
    localStorage.setItem("phoneNo", personNumber);
    navi('/edit')
  }

  function deleteContact(id, personNames, personNumbers, personEmail, personCompany, personJobtitle, personBirthday) {
    axios.post('http://localhost:4000/contact',
      {
        _id: id,
        name: personNames,
        company: personCompany,
        jobtitle: personJobtitle,
        email: personEmail,
        phoneNo: personNumbers,
        dateofbirth: personBirthday
      })

    axios.delete(`${API}/${id}`).then(() => {
      axios.get('http://localhost:4000/contact').then((s) => {
        setDataArr(s.data)
      })
    })
  }
  return (
    <div>
      <div className='row position-relative container'>
        <table className='table-hover'>
          <thead>
            <tr className='text-secondary'>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Phone number
              </th>
              <th>
                Job title & Company
              </th>
              <th>
                <PrintIcon />
                <IosShareIcon className='ms-2' />
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
                  {data.company}
                  {data.jobtitle}
                </td>
                <td>
                  <StarBorderIcon id='listicon' />
                  <EditOutlinedIcon id='listicon'
                    className='ms-2' onClick={() => editContact(data._id, data.name, data.phoneNo)} />
                  <DeleteOutlineIcon id='listicon' className='ms-2'
                    onClick={() => deleteContact(data._id, data.name, data.phoneNo, data.email,
                      data.company, data.jobtitle, data.dateofbirth)} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  )
}
