import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	background: {
		background: 'radial-gradient(121.73% 121.49% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)'
	},
	noCover: {
		background: '#162329',
		minHeight: '190px',
		borderRadius: '16px',
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
		},
		'& .MuiFormControl-root': {
			width: '100%',
		},
		'& .MuiInput-formControl:before': {
			display: 'none',
		},
		'& .MuiInput-formControl:after': {
			display: 'none',
		},
		'& .tag': {
			padding: '8px',
			borderRadius: '4px',
			background: '#FFFFFF1A',
			marginRight: '7px',
			'& button': {
				marginLeft: '10px',
			}
		}
	},
	interestBackground: {
		background: '#FFFFFF0F',
		borderRadius: '10px',
	}
}));

export default useStyles;