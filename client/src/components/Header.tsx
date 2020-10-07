import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'

import SignInModal from '@Modals/SignInModal'
import Avatar from '@Components/Avatar'
import AvatarWithDropDown from '@Components/Dropdown/AvatarWithDropdown'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
}))

type HeaderProps = {
    title: string
}
function Header({ title }: HeaderProps) {
    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Typography component="h2" variant="h5" color="inherit" className={classes.toolbarTitle}>
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small" onClick={handleOpen}>
                    로그인
                </Button>

                <AvatarWithDropDown source="https://api.adorable.io/avatars/42/abott@adorable.png" />
            </Toolbar>

            <SignInModal onClose={handleClose} open={open} />
        </>
    )
}

export default Header
