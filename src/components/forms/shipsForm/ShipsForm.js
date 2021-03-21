import { useEffect, useState } from "react";
import styled from "styled-components"
import { compose } from "redux";
import ShipFormStep1 from "./ShipFormSteps/ShipFormStep1";
import ShipFormStep2 from "./ShipFormSteps/ShipFormStep2";
import ShipFormStep3 from "./ShipFormSteps/ShipFormStep3";
import {CgSun} from "react-icons/cg";
import {HiMoon} from "react-icons/hi";

const StyledBackground = styled.div`
    position:absolute;
    background:${props=>props.theme.pageBackground};
    width:100%;
    height:100%;
    transition: all .5s;
`

const StyleShipForm = styled.div`
       position:absolute;
       top:50%;
       left:50%;
       transform:translate(-50%, -50%);
       background:${props=>props.theme.formBackground};
       border:black 1px solid;
       box-shadow:0 0 10px black;
       transition: all .5s;       
    `

const InnerFormStyle = styled.div`
       display:flex;
       flex-direction:column;
       width:40vw;
       height:55vh;
       justify-content: space-around;
       margin:0 2rem;
       max-width:400px;
`
const MyButton = styled.div`
        position: relative;
        bottom: 0;
        right: 0;
        margin: 0 10px 10px auto;
        width: max-content;
        cursor: pointer;
    `

const MyLabel = styled.div`
    text-align: center;
    position:relative;
    font-size: 24px;
    padding:1rem 0;
    font-weight: 700;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;   
    border-bottom: 1px solid black;
    color: black;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-shadow:2px 2px 2px black;
    background:#303f9f;
`
function ShipForm(Props) {

    const [darkMode, setDarkMode] = useState(false);
    const [step, setStep] = useState(1);

    useEffect(() => {
        const { setTheme } = Props;
        if (localStorage.getItem("DarkMode") === "true") {
            setDarkMode(true);
            setTheme("dark")
        } else {
            setDarkMode(false);
            setTheme("light")
        }

    })

    const goPrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    const goFirstStep = () => {
        setStep(1);
    }

    const goNext = () => {
        if (step < 3) {
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
        <StyledBackground>
            <StyleShipForm >

                <MyLabel>Rejestracja krok: {step}</MyLabel>

                <InnerFormStyle>
                    {step === 1 &&
                        <ShipFormStep1 onSubmit={goNext} />
                    }
                    {step === 2 &&
                        <ShipFormStep2 goPrev={goPrev} onSubmit={goNext} />
                    }
                    {step === 3 &&
                        <ShipFormStep3 goPrev={goFirstStep} />
                    }
                </InnerFormStyle>
                <MyButton>
                    {!darkMode ? <HiMoon size={40} onClick={DarkMode}/> : <CgSun size={40} onClick={DarkMode}/>}
                </MyButton>
            </StyleShipForm>
        </StyledBackground>
    )
}


export default compose(
)(ShipForm);