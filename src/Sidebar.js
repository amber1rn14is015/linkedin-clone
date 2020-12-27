import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

const Sidebar = () => {

    const user = useSelector(selectUser)

    const recentItem = (topic) => {
        return(
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.wallpapertip.com/wmimgs/171-1714999_amazing-landscape-wallpaper-4k-wallpaper-minimalist-landscape.png" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoURL}>{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2178</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">5000</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("react")}
                {recentItem("reactjs")}
                {recentItem("frontend")}
                {recentItem("development")}
                {recentItem("javascript")}
                {recentItem("web")}
            </div>
        </div>
    )
}

export default Sidebar