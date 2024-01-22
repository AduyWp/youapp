import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	background: {
		background: '#09141A'
	},
	noCover: {
		background: '#162329',
		minHeight: '190px',
		borderRadius: '16px',
	},
	cover: {
		minHeight: '190px',
		width: '100%',
		borderRadius: '16px',
		background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0) 45.83%, #000000 100%)',
		position: 'absolute',

	},
	usernameBottom: {
		position: 'absolute',
		left: '30px',
		bottom: '10px',
	},
	imageCover: {
		'& .editTop': {
			position: 'absolute',
			right: '10px',
			top: '10px',
		},
	},
	backgroundDark: {
		background: '#0E191F',
		borderRadius: '16px',
		'& .tag': {
			background: '#FFFFFF0F',
			borderRadius: '100px',
			padding: '8px 16px 8px 16px',
			marginRight: '7px',
		}
	},
	white: {
		color: '#FFFFFF'
	},
	whiteColor: {
		color: '#FFFFFF85'
	},
	golden: {
		color: '#FEE3C0',
		textTransform: 'capitalize',
	},
	form: {
		'& input': {
			borderColor: "#ffffff",
			color: '#FFFFFF',
			padding: '18.5px 14px',
			borderRadius: '9px',
			textAlign: 'right',
		},
		'& .MuiSelect-select': {
			background: "#FFFFFF0F",
			borderColor: "#ffffff",
			color: '#FFFFFF',
			padding: '18.5px 14px',
			borderRadius: '9px',
			textAlign: 'right',
		},
		'& .MuiInput-formControl': {
			background: "#FFFFFF0F",
			borderColor: "#ffffff",
			color: '#FFFFFF',
			borderRadius: '9px',
			textAlign: 'right',
		},
		'& .MuiInputAdornment-positionEnd p': {
			color: '#ffffff',
			paddingRight: '14px',
		},
		'& input.Mui-disabled': {
			color: '#FFFFFF85'
		}
	},
	image: {
		'& Button': {
			background: '#FFFFFF14',
			width: '57px',
			minWidth: '57px',
			height: '57px',
			borderRadius: '17px'
		},
		'& img': {
			width: '57px',
			height: '57px',
			borderRadius: '17px',
			minWidth: '57px',
		},
		'& .MuiInput-formControl': {
			display: 'none',
		},
		'& .MuiFormHelperText-root': {
			position: 'absolute',
			top: '55px',
			width: '120px',
		}
	},
	horozo: {
		background: '#121615',
		padding: '8px 16px 8px 16px',
		borderRadius: '100px',
	}
}));

export default useStyles;