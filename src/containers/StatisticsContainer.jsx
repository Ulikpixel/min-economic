import React from "react";
import { Statistics } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getStatistics } from "../redux/actions/statisticsActions";
import { Redirect } from "react-router-dom";

const StatisticsContainer = () => {
  const statistics = useSelector((state) => state.statistics);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  return isAuth ? (
    <Statistics {...statistics} getStatistics={() => dispatch(getStatistics())} />
  ) : (
    <Redirect to="login" />
  );
};

export default StatisticsContainer;
