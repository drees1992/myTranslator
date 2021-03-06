import { Fragment } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import { CircularProgress } from "@material-ui/core";

import Chart from "components/Chart";

const useStyles = makeStyles((theme) => ({
  chart: {
    height: 200,
    width: 300,
    [theme.breakpoints.down("sm")]: {
      height: 120,
      width: 170,
      margin: "auto",
    },
  },
  chartLoading: {
    height: 200,
    width: 300,
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      height: 120,
      width: 170,
      margin: "auto",
    },
  },
  showChart: {
    height: "100%",
    width: "100%",
  },
  hideChart: {
    visibility: "hidden",
  },
  wrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  spacer: {
    height: 200,
    width: 300,
    [theme.breakpoints.down("sm")]: {
      height: 120,
      width: 170,
      margin: "auto",
    },
    visibility: "hidden",
  },
}));

const ChartGrid = ({
  hide: { hide },
  translations: { chartData },
  indexData,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12} sm={12} md={4}>
        {!hide && hide !== "" && !indexData && (
          <Paper className={classes.chart}>
            <div className={classes.showChart}>
              <Chart data={chartData} />
            </div>
          </Paper>
        )}
        {indexData && (
          <Paper className={classes.chart}>
            <div className={classes.showChart}>
              <Chart data={indexData} />
            </div>
          </Paper>
        )}
        {hide && (
          <Paper className={classes.chartLoading}>
            <Skeleton
              animation="wave"
              variant="rect"
              height="100%"
              width="100%"
            />
          </Paper>
        )}
        {hide === "" && (
          <Paper className={classes.spacer}>
            <div>a</div>
          </Paper>
        )}
      </Grid>
    </Fragment>
  );
};

ChartGrid.propTypes = {
  translations: PropTypes.object.isRequired,
  hide: PropTypes.object.isRequired,
  // rollbar: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  translations: state.translations,
});

export default connect(mapStateToProps)(ChartGrid);
