import React, { useEffect } from "react";
import { Container, Row, Box } from "../../styledComponents";
import Graphics from "./Graphics";
import Download from "./Download";
import { Loader } from "../../common";
import Filters from "./Filters";
import { StatisticsStyled } from "./style";

const Statistics = ({ interest, isFetching, total, getStatistics, exl }) => {
  useEffect(() => {
    getStatistics();
  }, [])

  const interests = [interest.inProcessing, interest.underConsideration, interest.ready, interest.renouncement];
  const labels = ["В обработке", "На рассмотрении", "Одобрены", "Отказ"];
  const colors = ["#C4C4C4", "#FFD600", "#A2E697", "#FF8D8D"];

  return isFetching ? (
    <Loader />
  ) : (
    <StatisticsStyled>
      <Container className="container" padding="61px 15px 0">
        <Row className="row" align="flex-start" justify="space-around">
          <Filters labels={labels} colors={colors} interests={interests} />
          <Box width="500px" height="500px" className="grafic">
            <Graphics {...interest} colors={colors} />
          </Box>
        </Row>
        <Download exl={exl} />
      </Container>
    </StatisticsStyled>
  );
};

export default Statistics;

// inProcessing, underConsideration, ready, renouncement

