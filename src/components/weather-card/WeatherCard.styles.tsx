import { createStyles, makeStyles } from '@material-ui/core';
import { COLOR_DARK_BLUE } from '../../constants/colors.constants';

export const useStyles = makeStyles(() =>
  createStyles({
    cardContent: {
      padding: 16,
      '&:last-child': {
        paddingBottom: 16,
      },
    },
    title: {
      fontWeight: 700,
    },
    date: {
      color: COLOR_DARK_BLUE,
    },
    weather: {
      display: 'flex',
      alignItems: 'center',
    },
    weatherIcon: {
      height: 72,
      width: 72,
      marginLeft: -12,
      marginRight: 2,
    },
  })
);
