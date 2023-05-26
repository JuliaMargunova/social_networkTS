const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";


export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    description: string
    location: {
        country: string
        city: string
    }
}

type InitialStateType = typeof initialState

let initialState = {
    users: [
       /* {
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
        }*/
    ] as UserType[]
}

export type ActionTypeUser = ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUser>

let usersReducer = (state = initialState, action: ActionTypeUser):InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id)
                        return {...u, followed: true}
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

export let follow = (idUser: number) => {
    return {type: FOLLOW, id: idUser} as const
}

export let unFollow = (idUser: number) => {
    return {type: UNFOLLOW, id: idUser} as const
}

export let setUser = (users: UserType[]) => {
    return {type: SET_USERS, users} as const
}
export default usersReducer;