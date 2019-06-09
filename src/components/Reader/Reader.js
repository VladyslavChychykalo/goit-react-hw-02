import React, { Component } from 'react';
import Publication from './Publication/Publication';


class Reader extends Component {
  static defaultProp = {};
  static propTypes = {};

  render() {
    return (
      <div className="reader">
        <article className="publication">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            molestiae dolore ipsa sed similique necessitatibus. Aut qui porro
            quibusdam esse libero est eius, repellendus unde nihil, sequi
            voluptate eaque officiis aliquam impedit laborum adipisci cumque
            sit.
          </p>
        </article>

        <p className="counter">3/10</p>

        <section className="controls">
          <button className="button" onClick={} >Назад</button>
          <button className="button" onClick={} >Вперед</button>
        </section>
      </div>
    );
  }
}

export default Reader;
