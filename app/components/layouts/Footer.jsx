import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
    <section className="footer story-footer row">
      <div className="content small-24 medium-14 medium-centered columns text-center">
        <div className="row">
          <div className="small-24">
            Contribute to the story!
          </div>
        </div>
        <div className="row">
          <div className="small-offset-2 small-20 end">
            <a href="#">Download StoryAppy</a>
          </div>
        </div>
        <div className="row">
          <div className="small-24">
            We can't wait to read what you write!
          </div>
        </div>
      </div>
    </section>
    );
  }
}