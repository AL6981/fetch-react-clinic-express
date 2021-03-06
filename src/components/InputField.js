import React from 'react'

const InputField = props => {

  return(
    <div>
      <label>{props.label}
        <input
          type="text"
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
    </div>
  )
}

export default InputField
