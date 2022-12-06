import React, { useState } from "react";
import '../../../src/App.css';

const Cards = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Luca",
            sureName: "Anders",
            state: true
        },
        {
            id: 2,
            name: "An",
            sureName: "Watson",
            state: true
        },
        {
            id: 3,
            name: "Sarah",
            sureName: "Smitih",
            state: false
        },
        {
            id: 4,
            name: "Johanna",
            sureName: "Jones",
            state: false
        },
    ])

    const deactivate = (user) => {
        setData((prevData) => 
        prevData.map((oldUser) => {
            console.log(prevData)
            return (oldUser.id === user.id) ? {...oldUser, state: false} : oldUser
        })
        );
        console.log(user)
    };
    const activate = (user) => {
        setData((prevData) => 
        prevData.map((oldUser) => {
            return (oldUser.id === user.id )? {...oldUser, state: true} : oldUser
        })
        );
        console.log(user)
    };

    return (
        <div className="slider">
            <table>
                <thead>Active users</thead>
                <tbody>{data.filter((data) => { return data.state === true })
                    .map((user) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.state ? 'Active' : ''}</td>
                                <td><button className='button' onClick={() => deactivate(user)}>deactivate</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <table>
                <thead>Inactive users</thead>
                <tbody>{data.filter((data) => { return data.state === false })
                    .map((user) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.state ? '' : 'Inactive'}</td>
                                <td><button className='button' onClick={() => activate(user)}>activate</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Cards