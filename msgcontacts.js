import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import io from 'socket.io-client'

const Msgcontacts = () => {
    const [name, setname] = useState([]);
    const con = useRef()
    useEffect(() => {
        con.current = io.connect('/')
        con.current.on('details', (user) => {
            setname(name => [...name, user])
        })
    }, [])
    return (
        <div style={{ height: '65vh', overflowY: 'scroll', width: '30%', border: '2px solid rgba( 255, 255, 255, 0.18 )',borderRadius:'20px', padding: '10px' }} >
            <h6 style={{ alignItems:'center' }}>Online people</h6>
            {name.map((names) => {
                return (
                    <div className='contacts' style={{
                        margin: '10px', background: 'rgba( 9, 239, 197, 0.05 )',
                        backdropFilter: 'blur( 11.5px )',
                        webkitBackdropFilter: 'blur( 11.5px )',
                        borderRadius: '10px', width: '90%', height: '50px', alignItems: 'center', display: 'flex', border: '1px solid rgba( 255, 255, 255, 0.18 )', borderRadius: '10px'
                    }}>
                        <div style={{ height:'10px',width:'10px',borderRadius:'10px',background:'green',marginLeft:'5px' }}></div>
                        <h6 style={{ marginLeft: '5px' }}>{names}</h6>
                    </div>
                )
            })}
        </div>

    )
}
export default Msgcontacts;