import { useEffect, useState } from "react";
import styled from "styled-components"
import { compose } from "redux";
import { Button } from "@material-ui/core";
import ShipFormStep1 from "./ShipFormSteps/ShipFormStep1";
import ShipFormStep2 from "./ShipFormSteps/ShipFormStep2";
import ShipFormStep3 from "./ShipFormSteps/ShipFormStep3";
import { reset } from "redux-form";


const StyleShipForm = styled.div`
       position:absolute;
       top:50%;
       left:50%;
       transform:translate(-50%, -50%);
       background:rgba(0,0,0,.1);
       padding:1rem 2rem;
       padding-top:1rem;
       border-radius:10px;
       border:black 1px solid;
       box-shadow:0 0 10px black;
       display:flex;
       flex-direction:column;
       width:40vw;
       height:70vh;
       justify-content: space-evenly;
    `
const MyButton = styled.div`
        position:absolute;
        bottom:0;
        right:0;
        margin:20px
    `

const MyLabel = styled.div`
    position:absolute;
    top: 1rem;
    font-size: 21px;
    font-weight: 700;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;   
`
function ShipForm() {

    const [darkMode, setDarkMode] = useState(false);
    const [step,setStep] = useState(1);

    useEffect(() => {

        if (localStorage.getItem("DarkMode") === "true") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    
    })

    const goPrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    const goFirstStep= () =>{
        setStep(1);
    }

    const goNext = () =>{
        if(step<3){
            setStep(step + 1)
        }
    }

    const DarkMode = () => {
        if (localStorage.getItem("DarkMode") === "true") {
            localStorage.setItem("DarkMode", false);
            setDarkMode(false);
        } else {
            localStorage.setItem("DarkMode", true);
            setDarkMode(true);
        }
    }


    return (
        <StyleShipForm >
            <MyLabel>Krok: {step}</MyLabel>
            {step===1&&
            <ShipFormStep1 onSubmit={goNext}/>
            }
            {step===2&&
            <ShipFormStep2 goPrev={goPrev} onSubmit={goNext}/>
            }
            {step===3&&
            <ShipFormStep3 goPrev={goFirstStep}/>
            }
            <MyButton>
                <Button type="button" variant="outlined" color="primary" onClick={DarkMode} >{!darkMode ? "Dark Mode" : "Light Mode"}</Button>
            </MyButton>
        </StyleShipForm>
    )
}


export default compose(
)(ShipForm);