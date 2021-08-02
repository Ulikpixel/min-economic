import React, { useState } from "react";
import { Row, Button } from "../../../styledComponents";
import Select from "./Select";
import { STYLES } from "../../../constains";

const Sort = ({ region, organ, activity, cause, sortRegistry, sort }) => {
  const [show, setShow] = useState(false);
  return (
    <Row column justify="flex-start" align="flex-start" margin="0 0 10px">
      <Button
        margin="0 0 12px"
        onClick={() => setShow(!show)}
        bg={STYLES.blue}
        color="white"
        padding="10px 15px"
        radius="33px"
      >
        Сортировка
      </Button>
      {show && (
        <Row wrap justify="space-around" style={{ width: "100%" }}>
          <Select
            options={region}
            placeholder="Регионы"
            onChange={({ value }) => sortRegistry({ ...sort, region: value })}
          />
          <Select
            options={organ}
            placeholder="Орган"
            onChange={({ value }) => sortRegistry({ ...sort, organ: value })}
          />
          <Select
            options={activity}
            placeholder="Вид деятельности"
            onChange={({ value }) => sortRegistry({ ...sort, activity: value })}
          />
          <Select
            options={cause}
            placeholder="неблагоприятный фактор"
            onChange={({ value }) => sortRegistry({ ...sort, cause: value })}
          />
        </Row>
      )}
    </Row>
  );
};

export default Sort;
