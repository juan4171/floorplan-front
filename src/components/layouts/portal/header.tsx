/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { AppBar, Box, IconButton, Toolbar, Avatar, Button, Menu, MenuItem, Divider, ListItemIcon, Typography, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import classes from './classes'
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "@/utils/functions";
import { ROUTES_NAVIGATION } from "@/constants/routes";
import theme from "@/styles/muiTheme";
import './styles.css'
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
    onLogout: () => void
    onClick: () => void
}

const LayoutPortalHeader = ({ onClick, onLogout}: Props) => {
	const { user } = useAuth0();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { pathname } = useLocation()
    const currentPath = pathname.split('/')[1]
    const currentPathTag = pathname.split('/')[2]
    const findRoute = ROUTES_NAVIGATION.find(info => info.reference === currentPath)
    const responsive = useMediaQuery(theme.breakpoints.down('sm'))
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
		<AppBar
			position='fixed'
			sx={classes.headerContainer}
		>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='start'
					onClick={onClick}
					sx={classes.buttoniconHeader}
				>
					<MenuIcon color='primary' />
				</IconButton>

				<Box sx={classes.headerContent}>
					{!responsive && (
						<Box sx={classes.containerPosition}>
							{findRoute && (
								<Box sx={classes.boxPosition}>
									{findRoute.icon}

									<Box sx={classes.boxTextPosition}>
										<Typography sx={classes.textPrimaryPosition}>
											{capitalizeFirstLetter(findRoute.label)}
										</Typography>

										{currentPathTag && (
											<Typography sx={classes.textSecondaryPosition}>
												{capitalizeFirstLetter(decodeURIComponent(currentPathTag))}
											</Typography>
										)}
									</Box>
								</Box>
							)}
						</Box>
					)}
					<Box sx={classes.boxDarkMode}>
						<Button
							onClick={handleClick}
							sx={classes.boxAvatar}
						>
							<Avatar
								src={user?.picture}
								alt={user?.name}
							/>
							<ArrowDropDownIcon />
						</Button>
					</Box>
				</Box>

				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem sx={classes.itemMenuUser}>
						<Avatar
							src={user?.picture}
							alt={user?.name}
							sx={classes.avatarSize}
						/>

						<Box>
							<Typography sx={classes.nameUser}>{user?.name}</Typography>
							<Typography sx={classes.nameUser}>{user?.email}</Typography>
						</Box>
					</MenuItem>

					<Divider />

					<MenuItem onClick={onLogout}>
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>
						Cerrar sesión
					</MenuItem>
				</Menu>
			</Toolbar>
			
		</AppBar>
	)
};

export default LayoutPortalHeader;