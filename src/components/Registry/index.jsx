import React, { useEffect } from "react";
import { Title, Container, Row } from "../../styledComponents";
import { Table } from "../../common";
import { STYLES, COLUMNS } from "../../constains";
import Cart from "./Cart";
import Sort from "./Sort";
import Search from "./Search";
import { useParams, useHistory } from "react-router-dom";
import { Loader } from "../../common";
import { RegisrtyStyled, LinkPage } from "./style";
import { parseParams } from "../../utils";

const Registry = ({
  dots,
  list,
  isFetching,
  role,
  getRegistry,
  sort,
  select,
  sortRegistry,
}) => {
  const { page } = useParams();
  const history = useHistory();

  const getSort = () => {
    const params = history.location.search.substring(1);
    const body = parseParams(params.length ? params : `?pageNumber=${page}`);
    sortRegistry(body);
  };

  useEffect(() => {
    getSort();
  }, []);

  useEffect(() => {
    const body = { ...sort, pageNumber: +page };
    getRegistry(body);
  }, [sort, page]);

  const setRequest = (e) => {
    const item = e.target;
    if (item.tagName === "TD") {
      const id = item.dataset.id;
      history.push("/request/" + id);
    }
  };

  const searchRequest = ({ text }) => {
    if (text) {
      history.push(
        `/registry/${page}?economicActivity=${text}&fullname=${text}&inn=${text}`
      );
    } else {
      history.push(`/registry/${page}`);
    };
    getSort();
  };

  return isFetching ? (
    <Loader />
  ) : (
    <RegisrtyStyled>
      <Container padding="25px 15px">
        <Title margin="0 0 12px" color={STYLES.blue} weight="700" size="24px">
          Заявки:
        </Title>
        {role ? (
          <>
            <Sort {...select} sortRegistry={sortRegistry} sort={sort} />
            <Search onSubmit={searchRequest} />
          </>
        ) : (
          <Search onSubmit={searchRequest} />
        )}
        {list.length ? (
          <Table data={list} columns={COLUMNS} onClick={setRequest} />
        ) : (
          <h3 className="warning">Ничего не найдено!</h3>
        )}
        <Row wrap={true} className="slider">
          {list.length ? (
            list.map((item) => <Cart {...item} key={item.id} />)
          ) : (
            <h3 className="warning">Ничего не найдено!</h3>
          )}
        </Row>
        <Row justify="flex-start" className="pagination">
          {dots.map((item) => (
            <LinkPage
              key={item}
              className={+page === item ? "active" : ""}
              to={`/registry/${item}`}
            >
              {item}
            </LinkPage>
          ))}
        </Row>
      </Container>
    </RegisrtyStyled>
  );
};

export default Registry;
