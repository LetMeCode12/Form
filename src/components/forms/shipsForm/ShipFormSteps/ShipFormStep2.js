import styled from "styled-components"
import { compose } from "redux";
import { Field, reduxForm,getFormInitialValues, formValueSelector} from "redux-form";
import MyInput from "../../../inputs/MyInput";
import { validate } from "../ShipFormSubmit";
import { Button } from "@material-ui/core";
import { differenceInCalendarYears,addYears, format } from "date-fns";
import { connect } from "react-redux";


const NavButtons = styled.div`
    display:flex;
    justify-content:space-around;
`

const Form = styled.form`
    display:contents;
`


function ShipFormStep2(Props) {

    const calcAge=()=>{
        const {change,formInitialValues:{Birthday},BirthdayDate} = Props;
        const diff = differenceInCalendarYears(new Date(Birthday),new Date(BirthdayDate))

        change("Age",diff)
    }

    const calcDate = () =>{
        const {change,formInitialValues:{Birthday},AgeSelector} = Props;
        const result = format(addYears(new Date(Birthday),-AgeSelector),"yyyy-MM-dd")
        change("Birthday",result)
    }

    const { handleSubmit,  goPrev } = Props;
    return (
        <Form onSubmit={handleSubmit}>
                     
                <Field name="Birthday" type="date" label="Data urodzenia" component={MyInput} onBlur={calcAge} />
                <Field name="Age" type="number" label="Wiek" inputProps={{min:0}} component={MyInput} onBlur={calcDate} />
                
            <NavButtons>
                <Button type="button" variant="contained" color="secondary" onClick={goPrev}>Poprzedni</Button>
                <Button type="submit" variant="contained" color="primary" >Następny</Button>
            </NavButtons>
        </Form>
    )
}


const selector = formValueSelector('ShipForm')

export default compose(
    connect((state) => {
        const formInitialValues = getFormInitialValues('ShipForm')(state)
        const BirthdayDate = selector(state,"Birthday")
        const AgeSelector = selector(state,"Age")
        return {
            formInitialValues,
            BirthdayDate,
            AgeSelector
        }
    }),
    reduxForm({
        form: "ShipForm",
        destroyOnUnmount:false,
        validate,
    })

)(ShipFormStep2);