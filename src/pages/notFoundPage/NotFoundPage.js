import React from 'react';
import { Link } from 'react-router-dom';
import imagePath from '../../images/moviesError.png';
import { NotFoundContainer } from './NotFoundPageStyled';



const NotFoundPage = () => (
  <NotFoundContainer >
    <h1>404</h1>
    <img src={imagePath} alt="film stock" width="320" />
    <p>
      Woops. Looks like this page doesn't exist. Go back to the <Link to="/">homepage.</Link> 
    </p>
  </NotFoundContainer>
);

export default NotFoundPage;