import React, { Component } from 'react';

class Total extends Component {
    render() {
        const options = this.props.options;
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const total = Object.keys(options).reduce(
            (acc, curr) => acc + options[curr].cost,
            0
          );

        return(
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
            </div>
        )
    }
}

export default Total;