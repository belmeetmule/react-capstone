import React from 'react';
import PropTypes from 'prop-types';
// import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link, useParams } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useSelector, useDispatch } from 'react-redux';
// import { getLeaguesData } from '../../Redux/League/LeaguesSlice';

library.add(fas);
const LeagueDetails = ({ leaguesProp }) => {
  // const dispatch = useDispatch();
  // const { leagues } = useSelector((state) => state.leagues);
  const { leaguesId } = useParams();
  const league = leaguesProp?.find((league) => league.id === leaguesId);

  /*   useEffect(() => {
    dispatch(getLeaguesData());
  }, []); */

  return (
    <div>
      <div id="homePage_header" className="text-center">
        <Link className="navbar-brand me-2" to="/">
          <FontAwesomeIcon icon="fa-solid fa-chevron-left back-button" className="icon" />
          <span className="navbar-brand">Home</span>
        </Link>
        <div className="league-stat">
          <h1 id="main-header-text">
            <span className="text-white">
              {league.name}
            </span>
          </h1>
        </div>
      </div>
      <div id="details_container">
        <div className="top_leagues_img text-primary">
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={league?.logo} />
            <Card.Body>
              <Card.Title>
                League Title:
                <Badge bg="primary">
                  {league.name}
                </Badge>
              </Card.Title>
              <Card.Text>
                <p className="stats">
                  Number of teams:
                  <Badge bg="primary">
                    {league.teams.length}
                  </Badge>
                  {' '}
                  {' '}
                  {' '}
                  <br />
                  {}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <ul className="item-list">
          {league?.teams?.map((team) => (
            <li className="item card" key={team.id} style={{ marginTop: '3px' }}>
              <div className="item-img text-primary">
                <img className="team-img" src={team.logo} alt="logo" />
                {team.name}
              </div>
              <br />
              <ul>
                <li>
                  City:
                  {' '}
                  <Badge bg="primary">{team.city}</Badge>
                </li>

                {' '}

                <li>
                  Founded:
                  <Badge bg="primary">
                    {' '}
                    {team.founded}
                  </Badge>
                </li>

                <li>
                  {team.details}
                </li>

              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

LeagueDetails.propTypes = {
  leaguesProp: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      country: PropTypes.string,
      logo: PropTypes.string,
      teams: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        city: PropTypes.string,
        founded: PropTypes.string,
        details: PropTypes.string,
        logo: PropTypes.string,
      })),
    }),
  ).isRequired,
};
export default LeagueDetails;
