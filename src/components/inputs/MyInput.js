import { FormControl, TextField, InputLabel, Select, MenuItem, FormHelperText } from "@material-ui/core"
import { useEffect, useState } from "react"

export default function MyInput(Props) {

    const isError =()=>{
        const { meta: { touched, error } } = Props;
        return touched && !!error
    }


    const { input, label, type, meta: { error,touched }, none, values, inputProps } = Props;
    return (
        <>            
            {type === "select" && <FormControl>
                <InputLabel error={isError()} >{label}</InputLabel>
                <Select
                    error={isError()}
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
                {isError()&& <FormHelperText error={isError()}>{error}</FormHelperText>} 
            </FormControl>}
            {(["text","date","number"]).includes(type) &&
                <TextField error={isError()} {...input} {...Props} helperText={isError() ? error : ""} />
            }
        </>
    )

}