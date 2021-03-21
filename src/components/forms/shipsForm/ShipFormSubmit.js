import { getTime, fromUnixTime } from "date-fns"

export const submit = (values, dispatch, props) => {


    const {goPrev,reset} = props;

    console.log("SUBMIT:", values, dispatch, props);

    reset();
    goPrev();
}



export const validate = (values, props, state) => {


    const errors = {};

    if (props.BirthdayDate) {
        const birthDate = props.BirthdayDate.split("-");
        const initDate = props.formInitialValues.Birthday.split("-")
        console.log("Date",getTime(new Date(birthDate[0], birthDate[1], birthDate[2])))
        if ( birthDate && getTime(new Date(birthDate[0], birthDate[1], birthDate[2])) >= getTime(new Date(initDate[0], initDate[1], initDate[2]))) {
            errors.Birthday = "Należy podać date z przeszłości";
        }
    }

    if (!values.Name) {
        errors.Name = "Pole wymagane!";
    }
    if (!values.SurrName) {
        errors.SurrName = "Pole wymagane!";
    }
    if (!values.Sex) {
        errors.Sex = "Pole wymagane!";
    }

    if (!values.Birthday) {
        errors.Birthday = "Pole wymagane!";
    }

    if (!values.Age) {
        errors.Age = "Pole wymagane!";
    }

    if (!values.Ship) {
        errors.Ship = "Prosze wybrać statek";
    }

    if (values.Age <= 0) {
        errors.Age = "Wiek nie może być równy zero lub minusowy";
    }

    return errors;
}

