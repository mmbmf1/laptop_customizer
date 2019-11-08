import React, { Component } from 'react';

class BuildSummary extends Component {
    render() {

        const USCurrencyFormat = this.props.USCurrencyFormat;
        const selected = this.props.selected;
        
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];

            console.log(selectedOption.name);

            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
      
        return (
            <div className="BuildSummary">
                {summary}
            </div>
        )
    }
}

export default BuildSummary;