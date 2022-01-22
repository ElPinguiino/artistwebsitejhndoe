import { StyledH1 } from './ContactComponentElements';
import { Formik, Field, Form } from 'formik';
import { StyledFormikContainer, StyledForm, StyledField, StyledButton } from './ContactComponentElements';

const FormComponent = () => {
    return (
        <>
            <StyledFormikContainer>
            <StyledH1>Contact Jhn Doe.</StyledH1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        email: '',
                    }}
                >
                    <StyledForm>
                        <label htmlFor='firstName'>First Name</label>
                        <StyledField id="firstName" name="firstName" placeholder="Jhn" />

                        <label htmlFor='lastName'>Last Name</label>
                        <StyledField id="lasttName" name="lastName" placeholder="Doe." />
                        <br />
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <StyledField id="phoneNumber" name="phoneNumber" placeholder="Doe." />

                        <label htmlFor="email">Email</label>
                        <StyledField
                          id="email"
                          name="email"
                          placeholder="jane@acme.com"
                          type="email"
                        />
                        <br />
                        <StyledButton type="submit">Submit</StyledButton>
                    </StyledForm>
                </Formik>
            </StyledFormikContainer>
        </>
    )
}

export default FormComponent
