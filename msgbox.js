import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import io from 'socket.io-client'
import { Form, Button, Col } from 'react-bootstrap'
import Msgcontacts from './msgcontacts'
const Msgbox = () => {
    const con = useRef()
    const [msgs, setmsgs] = useState([])
    const [text, settext] = useState('');
    const id = useRef()
    useEffect(() => {
        id.current = prompt('enter the name','user')
        con.current = io.connect('/')
        con.current.emit('user', id.current)
        console.log(id);
        con.current.on('received', (msg) => {
            setmsgs(mesg => [...mesg, msg])
        })
    }, [])

    const changetext = (e) => {
        settext(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        const temp = {
            msg: text,
            id: id.current
        }
        settext('')
        console.log(temp);
        con.current.emit('chat message', temp)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <Msgcontacts />
                <div style={{ overflowY: 'scroll', display: 'flex', flexDirection: 'column', height: '60vh', width: '100%' }} >
                    {msgs.map((msg) => {
                        if (id.current === msg.id) {
                            return (
                                <div className="cont" style={{ width: '100%', display: 'flex', height: 'auto', justifyContent: 'flex-end' }}>
                                    <div className="box pl-2 m-2" style={{
                                        background: 'rgba( 10, 245, 245, 0.40 )',
                                        backdropFilter: 'blur( 20px )',
                                        WebkitBackdropFilter: 'blur( 20px )', border: '1px solid rgba( 255, 255, 255, 0.18 )', borderRadius: '20px 0px 20px 20px', width: '18rem', height: 'auto'
                                    }}>
                                        <p style={{color:'white'}}>you</p>
                                        <p className='m-0'style={{color:'white'}}>{msg.msg}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="cont" style={{ width: '100%', display: 'flex', height: 'auto', justifyContent: 'flex-start' }}>
                                    <div className="box pl-2 m-2" style={{
                                        background: 'rgba( 255, 255, 255, 0.40 )',
                                        backdropFilter: 'blur( 20px )',
                                        WebkitBackdropFilter: 'blur( 20px )',
                                        border: '1px solid rgba( 255, 255, 255, 0.18 )', borderRadius: '0px 20px 20px 20px', width: '18rem', height: 'auto'
                                    }}>
                                        <p style={{height:'10px'}}>{msg.id}</p>
                                        <p className='mb-2'>{msg.msg}</p>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div>
                <div className='container' style={{ height: '10vh', width: '100%', border: '2px solid rgba( 255, 255, 255, 0.18 )', borderRadius: '20px' }} >
                    <Form onSubmit={submit} >
                        <Form.Row className="align-items-center" style={{ alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
                            <Col sm={8} className="my-1">
                                <Form.Control
                                    required
                                    type="text"
                                    value={text}
                                    placeholder="Text"
                                    onChange={changetext}
                                    style={{ borderRadius: '10px' }}
                                />
                            </Col>
                            <Col sm={3} className="my-1">
                                <Button type="submit" style={{ borderRadius: '20px' }}><i class="fal fa-paper-plane"></i></Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Msgbox;