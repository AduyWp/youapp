import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	form: {
		'& input': {
			background: "#FFFFFF0F",
			borderColor: "#ffffff",
			color: '#FFFFFF',
			padding: '18.5px 14px',
			borderRadius: '9px'
		}
	},
	formWithIcon: {
		'& input': {
			background: "#FFFFFF0F",
			borderColor: "#ffffff",
			color: '#FFFFFF',
			padding: '18.5px 50px 18.5px 14px',
			borderRadius: '9px'
		},
		'& .buttonToggle': {
			marginRight:  '0',
			borderRadius: '0',
			padding: '16px 12px',
			color: '#FFFFFF',
			position:'absolute',
			right: '32px',
		},
	},
	bgCustom: {
		background: "#FFFFFF0F",
		borderColor: "#ffffff",
		'& div':{
			margin: 0,
		},
	},
	button: {
		background: 'linear-gradient(108.32deg, #62CDCB 24.88%, #4599DB 78.49%)',
	},
	golden: {
		color: '#FEE3C0',
		textDecoration: "underline",
	},
}));

export default useStyles;