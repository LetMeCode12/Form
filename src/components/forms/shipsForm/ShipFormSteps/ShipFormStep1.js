import styled from "styled-components"
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import MyInput from "../../../inputs/MyInput";
import { validate } from "../ShipFormSubmit";
import { Button} from "@material-ui/core";
import { connect } from "react-redux";
import { format, fromUnixTime } from "date-fns";


const NavButtons = styled.div`
    display:flex;
    justify-content:space-around;
`
const Form = styled.form`
    display:contents;
`

function ShipFormStep1(Props) {


    const { handleSubmit } = Props;
    return (
        <Form onSubmit={handleSubmit}>
                <div style={{display:"flex"}}>
                    <Field name="Name" style={{margin:"0 .5rem 0 0"}} type="text" label="Imie" component={MyInput} />
                    <Field name="SurrName" style={{margin:"0 0 0 .5rem"}} type="text" label="Nazwisko" component={MyInput} />
                </div>
                <Field name="Sex" type="select" label="Płeć" values={[{ value: "Male", name: "Mężczyzna" }, { value: "Female", name: "Kobieta" }]} component={MyInput} none />   
            <NavButtons>
                <Button type="submit" variant="contained" color="primary" >Następny</Button>
            </NavButtons>
        </Form>
    )
}

export default compose(
    connect((state) => {
        return {
            initialValues: {
                Birthday: format(fromUnixTime(Date.now() / 1000), "yyyy-MM-dd"),
                Age: 0
            }
        }
    }),
    reduxForm({
        form: "ShipForm",
        destroyOnUnmount:false,
        validate, 
    })
)(ShipFormStep1);