import React, { Component } from 'react';
import slugify from 'slugify';


class FeatureList extends Component {
   
    render() {
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const selected = this.props.selected;
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === selected[feature].name}
                    onChange={e => this.props.handleUpdate(e.target.value)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
          return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });
        return (
            <div className="featureList">{features}
            </div>
        )
    }
}

export default FeatureList;