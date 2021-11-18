import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const initialState={};

function TemplateName(props) {
    const [state, setState] = useState(initialState);
    useEffect(() => {
        return () => {
        };
    }, [state]);
    return <div data-testid="TemplateName">templateName</div>
}

TemplateName.propTypes = {};
TemplateName.defaultProps = {};
export default TemplateName;