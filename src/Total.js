import React, { Component } from 'react';

class Total extends Component {
    render() {
        const selected = this.props.selected;
        const USCurrencyFormat = this.props.USCurrencyFormat;
        const total = Object.keys(selected).reduce(
            (acc, curr) => acc + selected[curr].cost,
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