import React from 'react' 
 import './style.css';

 

const TextFieldGroup = (
  {
    label,
    value,
    placeholder,
    keyboard,
    onChangeText,
    onChange,
    error,
    labelSecend,
    secureTextEntry,
    multiline,
    maxLength,
    style,
    editable,
    labelStyle,
    fontSize,
    ...props
  } = { labelStyle: null, fontSize: 20},
) => (

  <div {...props} className="txt-input-container">
    {label && <span className="lbl-text-input"  >{label}</span>}
    <input 
      className="txt-input"
      value={value}
      placeholder={placeholder}   
      onChange={onChange} 
      multiline={multiline}
      maxLength={maxLength}
      editable={editable} 
      autoCapitalize="none"
    />
    {labelSecend && <span className="labelSecend-styling" >{labelSecend}</span>}
    {error && <span className="error-txt-input" >{error}</span>}
    
  </div>

)

export default TextFieldGroup