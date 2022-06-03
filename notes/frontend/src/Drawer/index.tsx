import React from 'react'
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Appbar from './Appbar'

const title = "DIY Cloud Gaming"

interface ListItemProps {
    text: string
    href: string
    icon: any
}
function ListItem_({text, href, icon}: ListItemProps) {
    return <ListItem
        key={text}
        disablePadding
    >
        <ListItemButton href={href}>
            <ListItemIcon>
                {/*index % 2 === 0 ? <InboxIcon /> : <MailIcon />*/}
                {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    </ListItem>
}

const sidelist = <>
    <ListItem_ text="About" href="/about" icon={null} />,
    <ListItem_ text="Notes" href="/about/notes" icon={null} />
</>


interface Props {
    children: React.ReactElement
}
export default function Drawer({children}: Props) {
    return <Appbar sidelist={sidelist} title={title} content={children} />
}