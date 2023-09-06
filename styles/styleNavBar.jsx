import InputBase from '@mui/material/InputBase';
import Badge from "@mui/material/Badge";
import { styled, alpha } from '@mui/material/styles';


export const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
	  right: 10,
	  top: 1,
	  border: `2px solid ${theme.palette.background.paper}`,
	  padding: "0 4px",
	},
  }));
export const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
  }));
export const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  }));
  
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
	  padding: theme.spacing(1, 1, 1, 0),
	  // vertical padding + font size from searchIcon
	  paddingLeft: `calc(1em + ${theme.spacing(4)})` 
	//   ,
	//   transition: theme.transitions.create('width')
	//   ,	  width: '100%',
	//   [theme.breakpoints.up('md')]: {
	// 	width: '25ch',
	// 	'&:focus': {
	// 	  width: '35ch',
	// 	},
		
	//   },
	//   [theme.breakpoints.down('md')]: {
	// 	width: '10ch', 
	// 	'&:focus': {
	// 	  width: '14ch', 
	// 	},
	//   },
	},
  }
  ));