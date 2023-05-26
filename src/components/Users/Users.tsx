import axios from "axios";
import React, {FC} from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user_icon.png';
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    users: UserType[],
    follow: (idUser: number) => void,
    unFollow: (idUser: number) => void,
    setUsers: (users: UserType[]) => void
}
let Users: FC<PropsType> = ({users, ...props}) => {

    let getUsers = () => {
        props.setUsers([
            {
                id: 1, fullName: 'Julia',
                photoUrl: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
                followed: false, description: 'Merry and Fragrant', location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2, fullName: 'Valery',
                photoUrl: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
                followed: true, description: 'Merry and Fragrant', location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3, fullName: 'Marina',
                photoUrl: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
                followed: false, description: 'Merry and Fragrant', location: {country: 'Belarus', city: 'Minsk'}
            }, {
                id: 4, fullName: 'Irina',
                photoUrl: 'https://www.ogorod.ru/images/cache/460x389/crop/images%7Ccms-image-000036753.jpg',
                followed: false, description: 'Merry and Fragrant', location: {country: 'Belarus', city: 'Minsk'}
            }
        ])
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            users.map((u, index) =>
                <div key={index}>
                    <div className={s.imgProfile}>
                        <img src={userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.description}
                    </div>
                    <div>
                        {u.location.country}
                    </div>
                    <div>
                        {u.location.city}
                    </div>
                </div>
            )}
    </div>
}

export default Users;