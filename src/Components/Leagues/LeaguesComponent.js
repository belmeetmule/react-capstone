import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { getLeaguesData } from '../../Redux/League/LeaguesSlice';

const LeaguesComponent = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const { leagues } = useSelector((state) => state.leagues);

  useEffect(() => {
    dispatch(getLeaguesData());
  }, []);

  return (
    <>
      <div id="homePage_header" className="text-center">
        <h1 id="main-header-text">
          <span className="text-white">Soccer</span>
          {' '}
          Leagues
        </h1>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      <div id="consumePage">
        {leagues ? (
          leagues
            .filter((leagues) => leagues.name.toLowerCase().match(title.toLocaleLowerCase()))
            .map((leagues) => (
              <Link key={leagues.id} to={`/detail/${leagues.id}`} className="m-list1">
                <div className="card">
                  <img className="card-img-top" src={leagues.logo} alt="logo" />
                  <div className="card-body">
                    <h5 className="card-title">{leagues.name}</h5>
                    <p className="card-text">{leagues.country}</p>
                  </div>
                </div>
              </Link>
            ))) : (
              <div style={{
                color: 'red', display: 'flex', faAlignJustify: 'center', fontSize: '40px',
              }}
              >
                <Spinner />
                no Data
              </div>
        )}
      </div>
    </>
  );
};
export default LeaguesComponent;
