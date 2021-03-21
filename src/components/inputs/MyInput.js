import { FormControl, TextField, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core"
import { useEffect, useState } from "react"

export default function MyInput(Props) {

    const [_error, setError] = useState(false);

    const checkError = () => {
        const { meta: { touched, error } } = Props;
        if (touched && error) {
            setError(true);
        } else {
            setError(false);
        }
    }

    useEffect(() => {
        checkError();
    })
    const { input, label, type, meta: { error }, none, values, inputProps } = Props;
    return (
        <>
            
            {type === "select" && <FormControl>
                <InputLabel error={_error} >{label}</InputLabel>
                <Select
                    error={_error}
                    value={20}
                    {...input}
                >
                    {none &&
                    <MenuItem value="">
                        <em>Brak</em>
                    </MenuItem>
                    }
                    {values.map((e)=><MenuItem value={e.value}>{e.name}</MenuItem>)}
                </Select>
                {_error&& <FormHelperText error={_error}>{error}</FormHelperText>} 
            </FormControl>}
            {(["text","date","number"]).includes(type) &&
                <TextField error={_error} {...input} label={label} inputProps={inputProps} helperText={_error ? error : ""} type={type} />
            }
        </>
    )

}