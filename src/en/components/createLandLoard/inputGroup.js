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
      keyboardType={keyboard}
      placeholderTextColor="rgba(35, 36, 42, 0.3)"
      onChangeText={onChangeText}
      onChange={onChange}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      maxLength={maxLength}
      editable={editable}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
    {labelSecend && <span className="labelSecend-styling" >{labelSecend}</span>}
    {error && <span className="error-txt-input" >{error}</span>}
    
  </div>

)

export default TextFieldGroup