import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .label {
        font-weight: 600;
    }
    
    textarea {
        border-radius: var(--border-md);
        border: 1px solid var(--white-3);
        resize: none;
        padding: 20px;
    }

    input {
        margin-bottom: 25px;
        padding: 20px;
        border-radius: var(--border-md);
        border: 1px solid var(--white-3);
    }
`

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
    return (
        <StyledLabel>
            {labelName && (
                <span className='label'>{labelName}</span>
            )}
            {isTextArea ? (
                <textarea
                    required
                    value={value}
                    onChange={handleChange}
                    rows={5}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    required
                    value={value}
                    onChange={handleChange}
                    type={inputType}
                    step="0.1"
                    placeholder={placeholder}
                />
            )}
        </StyledLabel>
    )
}

export default FormField