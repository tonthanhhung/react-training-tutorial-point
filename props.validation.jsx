import React from 'react';

class PropsValidation extends React.Component {
    render() {
        return (
            <div>
                <h3>Array Props: {this.props.propArray}</h3>
                <h3>Bool Props: {this.props.propBool}</h3>
                <h3>Number Props: {this.props.propNumber}</h3>
                <h3>String Props: {this.props.propString}</h3>
            </div>
        )
    }
}

PropsValidation.propTypes = {
    propArray : React.PropTypes.array,
    propBool : React.PropTypes.bool.isRequired,
    propNumber : React.PropTypes.number,
    propString : React.PropTypes.string
}

PropsValidation.defaultProps = {
    propArray: [1, 2, 3],
    propBool: true,
    propNumber: 2,
    propString: 'Lalaland'
}

export default PropsValidation;