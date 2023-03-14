import React, {useEffect, useState} from 'react';

/**
 * Example error object:
 * {
 *   "email": {
 *   "type": "required",
 *   "message": "Email is required"
 *   },
 *   "name": {
 *   "type": "required",
 *   "message": "Name is required"
 *   }
 * }
 * @param errorObj
 * @constructor
 */

const OutputErrors = ({errorObj}) => {
 const [errors, setErrors] = useState([]);

 useEffect(() => {
    if (errorObj) {
      const errors = Object.keys(errorObj).map(key => {
        return errorObj[key].message;
      });
      setErrors(errors);
    }
 }, [errorObj]);

  if (!errors.length) {
    return null;
  } else {
    return (
      <div className="error">
        {errors.map((error, index) => (
          <div className="footer-form__error" key={index}>
            {error}
          </div>
        ))}
      </div>
    );
  }

};

export default OutputErrors;