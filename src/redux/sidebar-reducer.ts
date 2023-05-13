import React from 'react'
export type SidebarType = {
    friends: FriendsType[]
}
export type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
let initialState = {
    friends: [
        {id: 1, name: "Marina", avatar: ''},
        {id: 1, name: "Marina", avatar: ''},
        {id: 1, name: "Marina", avatar: ''}
    ]
}
export const  sidebarReducer =(state:SidebarType = initialState,action:any)=>{
    return state;
}