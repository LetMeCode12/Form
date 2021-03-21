import { useEffect, useRef} from "react";
import styled from "styled-components"
import { compose, bindActionCreators } from "redux";
import { Field, reduxForm} from "redux-form";
import MyInput from "../../../inputs/MyInput";
import { submit, validate } from "../ShipFormSubmit";
import { Button } from "@material-ui/core";
import { getShips,removeShips } from "../ShipsFormUtils";
import {connect} from "react-redux";
import {isEqual} from "lodash";
import {show} from "redux-modal";
import SubmitModal from "../../../modals/submitModal/SubmitModal";



const NavButtons = styled.div`
    display:flex;
    justify-content:space-around;
`

const Form = styled.form`
    display:contents;
`




function ShipFormStep3(Props) {

    const clearForm = () => {
        const { goPrev, reset} = Props;
        reset();
        goPrev();
    }

    useEffect(()=>{
        const {getShips,removeShips} = Props;
        getShips();
        return () =>{
            removeShips();
        }
    },[])

    const prevShips = useRef();
    useEffect(()=>{
        const {ships} = Props;
        if(!isEqual(ships,prevShips.current)){
            getShips();
        }
        prevShips.current=ships;
    })

    const { handleSubmit, ships} = Props;
    return (
        <Form onSubmit={handleSubmit}>
               
            <Field name="Ship" type="select" label="Wybierz statek" values={ships.map(e=>({ value: e.name, name: e.name }))} component={MyInput} none />   
               
            <NavButtons>
                <Button type="button" variant="contained" color="secondary" onClick={clearForm}>Wyczyść</Button>
                <Button type="submit" variant="contained" color="primary" >Wyślij</Button>
            </NavButtons>
            
        </Form>
    )
}

export default compose(
    connect((state)=>({
        ships: state.ships.Data
    }),(dispatch)=>({
        getShips: ()=>dispatch(getShips()),
        removeShips: ()=>dispatch(removeShips()),
        show:(name,value)=>dispatch(show(name,value))
    })),
    reduxForm({
        form: "ShipForm",
        destroyOnUnmount:false,
        onSubmit: submit,
        validate     
    })
)(ShipFormStep3);