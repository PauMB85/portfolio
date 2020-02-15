import { createMuiTheme } from '@material-ui/core/styles';
import { lightGreen, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(33, 36, 46)'
		},
		secondary: {
			main: 'rgb(100, 255, 218)'
		},
		error: {
			main: red[400]
		},
		success: {
			main: lightGreen[600]
		}
	}
});

export default theme;
