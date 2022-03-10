import { Typography, Paper } from '@material-ui/core'
import { Box } from '@mui/system'
import {Grid} from '@mui/material'
import Menu from "../../utils/Menu"
import {Statistic} from "./Statistic";
import {Dashboard} from "./Dashboard";
import {useState} from "react";
import {ChiefAnalyticsMenu} from "./ChiefAnalyticsMenu";

export const ChiefAnalytics = () => {

    const [option, setOption] = useState('Dashboard');

    // Заглушки
    const dataFromDB = {
        name: 'Олег Руководитель',
        menuIsOpened: false,
        date: '12.06.2002',
    }

    const onMenuItemClick = (option) => {
        setOption(option);
    };

    return (
        <>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={1}>
                    <Menu menuItem={ChiefAnalyticsMenu(onMenuItemClick)}/>
                </Grid>
                <Grid item xs={11}>
                    <Typography align="left" variant="h3">
                        {dataFromDB.name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <Grid container alignItems="center" gap={2}>
                            <Grid item xs={12}>
                                <Box sx={{p: 2}}>
                                    <Typography align="left" variant="h4">
                                        {option}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                {(option === 'Dashboard') ? <Dashboard/>
                                    : (option === 'Statistic') ? <Statistic/>
                                        : <></> }
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}