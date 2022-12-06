import React, { useState } from "react";
import '../../../src/App.css';

const Cards = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Luca",
            sureName: "Anders",
            status: true
        },
        {
            id: 2,
            name: "An",
            sureName: "Watson",
            status: true
        },
        {
            id: 3,
            name: "Sarah",
            sureName: "Smitih",
            status: false
        },
        {
            id: 4,
            name: "Johanna",
            sureName: "Jones",
            status: false
        },
    ])

    const changeStatus = (user) => {
        setData((prevData) => 
        prevData.map((oldUser) => {
            return (oldUser.id === user.id) ?  {...oldUser, status: !oldUser.status } : oldUser
        })
        );
    };

    return (
        <div className="slider">
            <table>
                <thead>Active users</thead>
                <tbody>{data.filter((data) => { return data.status === true })
                    .map((user) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.status ? 'Active' : ''}</td>
                                <td><button className='button' onClick={() => changeStatus(user)}>deactivate</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <table>
                <thead>Inactive users</thead>
                <tbody>{data.filter((data) => { return data.status === false })
                    .map((user) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.status ? '' : 'Inactive'}</td>
                                <td><button className='button' onClick={() => changeStatus(user)}>activate</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Cards