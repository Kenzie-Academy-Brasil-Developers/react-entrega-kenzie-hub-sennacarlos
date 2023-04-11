import { forwardRef } from "react";
import { ContainerInput } from "./styles";

export const Input = forwardRef(({ id, label, error, ...rest}, ref) => {
    return (
        <ContainerInput>
            {label ? <label htmlFor={id}> {label} </label> : null}
            <input id={id} ref={ref} {...rest} />
            {error ? <p>{error}</p> : null}
        </ContainerInput>
    )
})