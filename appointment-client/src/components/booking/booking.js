import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Label, Flex, jsx, Heading } from "theme-ui";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Style
import styled, { css } from "styled-components";
import "./booking.css";


function Booking() {
  const {
    handleSubmit,
    control,
    errors,
    // formState: { isSubmitting },
    register,
    watch
  } = useForm({
    mode: "onChanges",
    reValidateMode: "onChange"
  });

  const dateReceived = watch("expiryAt");
  console.log(errors);

  const submit = form => {
    console.log("Submitted", form);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Heading sx={{ mb: "20px" }}>Choose a Date</Heading>

        <Box
          sx={{ maxWidth: "400px" }}
          as="form"
          onSubmit={handleSubmit(data => console.log(data))}
        >
          <Label htmlFor="date">Date</Label>

          <Controller
            as={
              <ReactDatePicker
                dateFormat="d MMM yyyy"
                minDate={new Date()}
                selected={
                  dateReceived?.value ? new Date(dateReceived.value) : null
                }
                showTimeSelect={false}
                todayButton="Today"
                customInput={<StyledInput errors={errors} />}
                dropdownMode="select"
                isClearable
                placeholderText="Click to select time"
                shouldCloseOnSelect
              />
            }
            errors={errors}
            control={control}
            register={register({ required: true })}
            name="expiryAt"
            onChange={([selected]) => {
              return { value: selected };
            }}
            required
          />

          <Controller
            as={
              <ReactDatePicker
                dateFormat="d MMM yyyy"
                minDate={new Date()}
                selected={
                  dateReceived?.value ? new Date(dateReceived.value) : null
                }
                showTimeSelect={false}
                todayButton="Today"
                customInput={<StyledInput errors={errors} />}
                dropdownMode="select"
                isClearable
                placeholderText="Click to select time"
                shouldCloseOnSelect
              />
            }
            errors={errors}
            control={control}
            register={register({ required: true })}
            name="expiryAt"
            onChange={([selected]) => {
              return { value: selected };
            }}
            required
          />

          <Flex
            sx={{
              justifyContent: "center"
            }}
          >
            <Button
              // disabled={isSubmitting}
              type="submit"
              sx={{
                cursor: "pointer",
                backgroundColor: "rebeccapurple",
                mt: "20px"
              }}
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
    </form>
  );
}



const StyledInput = styled.input.attrs(props => ({
  autoComplete: "off",
  autoFocus: false
  // errors: props.errors
}))`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: 0.25rem;
  box-sizing: border-box;
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    color: #9da7af;
    outline: 0;
  }

  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }

  :-ms-input-placeholder {
    color: #c0c0c0;
  }

  :-moz-placeholder {
    color: #c0c0c0;
    opacity: 1;
  }

  ${({ errors }) =>
  Object.keys(errors).length !== 0 &&
  errors &&
  css`
      background: rgb(251, 236, 242);
      border-color: rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80)
        rgb(236, 89, 144);
      border-image: initial;
      border-style: solid;
      border-width: 1px 1px 1px 10px;
    `}
`;

export default Booking;
