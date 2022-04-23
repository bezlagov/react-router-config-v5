import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';

const HomePage = (props) => {
  return (
    <div>
      <h2>This is the Home page</h2>
      {renderRoutes(props.route.routes)}
    </div>);
}
const AboutPage = (props) => {
  return (
    <div>
      <h2>This is the About page</h2>
      {renderRoutes(props.route.routes)}
    </div>

  );
}
const ShopPage = (props) => {
  return (
    <div>
      <h2>This is the Shop page</h2>
      {renderRoutes(props.route.routes)}
    </div>);
}
const ShopItemPage = (props) => {
  return (
    <div>
      <h2>This is the Shop Item</h2>
      {renderRoutes(props.route.routes)}
    </div>);
}
const ContactPage = (props) => {
  return (
    <div>
      <h2>This is the Contact page</h2>
      {renderRoutes(props.route.routes)}
    </div>);
}
const ErrorPage = (props) => {
  return (
    <div>
      <h2>404 Page not found</h2>
      {renderRoutes(props.route.routes)}
    </div>);
}

export { HomePage, AboutPage, ShopPage, ShopItemPage, ContactPage, ErrorPage };