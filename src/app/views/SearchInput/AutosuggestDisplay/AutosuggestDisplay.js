import React, {PropTypes } from 'react';
import autosuggestDisplayCSS from './autosuggestDisplay.css';

const AutosuggestDisplay = props => {


  let _handleKeyPress = e =>{
    if (e.key === 'Enter') {
      props.updateTextField(e);
    }
  };

  console.log(props, 'props');
  console.log('AutosuggestDisplay rendering');
  return (
    <div className={ autosuggestDisplayCSS['container'] }>
      <div className={ autosuggestDisplayCSS['item-list'] }>
        <ul>
          { props.autosuggestResults.map((data, i) => {
            return (
              <li className={ autosuggestDisplayCSS['item'] }
                key={ i }
                tabIndex="0"
                role="presentation"
                onClick={ props.updateTextField }
                onKeyPress={_handleKeyPress }
                >{ data }</li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
};

AutosuggestDisplay.propTypes = {
  autosuggestResults: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  updateTextField: PropTypes.func.isRequired
};

export default AutosuggestDisplay;
