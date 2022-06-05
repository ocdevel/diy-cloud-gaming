import React from 'react'
import Wrapper from './Wrapper'
import Account from './Account'
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from '@mui/icons-material/Login';

interface Props {
    children: React.ReactElement
}

export default function Index(
    {children}: Props
) {
    const title = "DIY Cloud Gaming"
    const appBarLinks = [
        <Button href='/login' color="inherit">Login</Button>,
        // <Button href='/about' color="inherit">About</Button>
    ]
    const sideBarLinks = [

        {text: "About", href: "/about", icon: null},
        {text: "Notes", href: "/about/notes", icon: null},
        {text: "Account", href: '/Drawer/Account', icon: null},

    ].map(({text, href, icon}, index) => (
        <ListItem key={text} disablePadding>
            <ListItemButton href={href}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    ))

    return <Wrapper
        title={title}
        sideBarLinks={sideBarLinks}
        appBarLinks={appBarLinks}
    >
        {children}
    </Wrapper>
}