import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  HStack,
  Textarea,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldProps } from "formik";
import React, { useEffect, useState } from "react";
import EmojiValidate from "./EmojiValidate";
import axios from "axios";

const ContactFrom = (): JSX.Element => {
  const [validName, setValidName] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validSubject, setValidSubject] = useState<boolean>(false);
  const [validMessage, setValidMessage] = useState<boolean>(false);

  const validateName = (inputName: string | undefined): string | undefined => {
    let nameError;

    if (!inputName) {
      nameError = "A name is required.";
      setValidName(false);
    } else if (/[\d]/gi.test(inputName)) {
      nameError = "Only words and spaces are allowed in this field.";
      setValidName(false);
    } else {
      setValidName(true);
    }

    return nameError;
  };

  const validateEmail = (
    inputEmail: string | undefined
  ): string | undefined => {
    let emailError;

    if (!inputEmail) {
      emailError = "Email is required.";
      setValidEmail(false);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(inputEmail)) {
      emailError = "Invalid email format.";
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
    return emailError;
  };

  const validateMessage = (
    inputMessage: string | undefined
  ): string | undefined => {
    let messageError;

    if (!inputMessage) {
      messageError = "A message is required.";
      setValidMessage(false);
    } else {
      setValidMessage(true);
    }

    return messageError;
  };

  const validateSubject = (
    inputLine: string | undefined
  ): string | undefined => {
    let subjectError;
    const subject = "Portfolio Website Contact | " + inputLine;

    if (!inputLine) {
      subjectError = "A subject is required.";
      setValidSubject(false);
    } else if (subject.length > 200) {
      subjectError = "Subject too long";
      setValidSubject(false);
    } else {
      setValidSubject(true);
    }

    return subjectError;
  };

  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    if (!validEmail || !validMessage || validName || validSubject) {
      setValid(false);
    }

    if (validEmail && validMessage && validName && validSubject) {
      setValid(true);
    }
  }, [validEmail, validMessage, validName, validSubject]);

  // Email the form
  interface FormFields {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const handleSubmit = (input: FormFields): Promise<unknown> => {
    return new Promise((resolve, reject) => {
      interface Body extends FormFields {
        key?: string;
      }
      const body: Body = input;
      body.key = process.env.NEXT_PUBLIC_ACCESS_KEY;

      axios
        .post("/api/contact", body)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return resolve(response.statusText);
          } else if (response.status >= 400 && response.status <= 499) {
            return reject(response.statusText);
          } else if (response.status >= 500 && response.status <= 599) {
            return reject(response.statusText);
          } else {
            return reject("An unknown error occurred");
          }
        })
        .catch((err) => {
          console.warn(err);
          return reject(err);
        });
    });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      onSubmit={(data, actions) => {
        handleSubmit(data)
          .then(() => {
            actions.setSubmitting(false);
            actions.resetForm({
              values: {
                name: "",
                email: "",
                subject: "",
                message: "",
              },
            });
          })
          .catch(() => {
            actions.setSubmitting(false);
          });
      }}
    >
      {(props) => (
        <Form
          style={{
            width: "90%",
            zIndex: 1,
          }}
        >
          <VStack h="auto" w="100%" spacing={6}>
            <Heading as="h4" size="md">
              Required fields indicated with <EmojiValidate type="Required" />
            </Heading>

            <HStack
              d={{ base: "none", md: "flex" }}
              h="auto"
              w="100%"
              alignItems="flex-start"
              spacing={8}
            >
              <Field name="name" validate={validateName}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={
                      form.errors.name && form.touched.name ? true : false
                    }
                  >
                    <HStack
                      h="auto"
                      w="auto"
                      spacing={0}
                      alignItems="flex-start"
                    >
                      <FormLabel htmlFor="name" mr={2}>
                        Name
                      </FormLabel>
                      {!form.touched.name && <EmojiValidate type="Required" />}
                      {form.errors.name && form.touched.name && (
                        <EmojiValidate type="Error" />
                      )}
                      {!form.errors.name && form.touched.name && (
                        <EmojiValidate type="Valid" />
                      )}
                    </HStack>
                    <Input
                      isDisabled={form.isSubmitting}
                      {...field}
                      id="name"
                      placeholder="David Franks"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateEmail}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={
                      form.errors.email && form.touched.email ? true : false
                    }
                  >
                    <HStack
                      h="auto"
                      w="auto"
                      spacing={0}
                      alignItems="flex-start"
                    >
                      <FormLabel htmlFor="email" mr={2}>
                        Email
                      </FormLabel>
                      {!form.touched.email && <EmojiValidate type="Required" />}
                      {form.errors.email && form.touched.email && (
                        <EmojiValidate type="Error" />
                      )}
                      {!form.errors.email && form.touched.email && (
                        <EmojiValidate type="Valid" />
                      )}
                    </HStack>
                    <Input
                      {...field}
                      id="email"
                      placeholder="me@davidfrnks7.dev"
                      isDisabled={form.isSubmitting}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>

            {/* Not duped components!! Different layouts for responsiveness. */}

            <VStack
              d={{ base: "flex", md: "none" }}
              h="auto"
              w="100%"
              alignItems="flex-start"
              spacing={8}
            >
              <Field name="name" validate={validateName}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={
                      form.errors.name && form.touched.name ? true : false
                    }
                  >
                    <HStack
                      h="auto"
                      w="auto"
                      spacing={0}
                      alignItems="flex-start"
                    >
                      <FormLabel htmlFor="name" mr={2}>
                        Name
                      </FormLabel>
                      {!form.touched.name && <EmojiValidate type="Required" />}
                      {form.errors.name && form.touched.name && (
                        <EmojiValidate type="Error" />
                      )}
                      {!form.errors.name && form.touched.name && (
                        <EmojiValidate type="Valid" />
                      )}
                    </HStack>
                    <Input
                      isDisabled={form.isSubmitting}
                      {...field}
                      id="name"
                      placeholder="David Franks"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validateEmail}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={
                      form.errors.email && form.touched.email ? true : false
                    }
                  >
                    <HStack
                      h="auto"
                      w="auto"
                      spacing={0}
                      alignItems="flex-start"
                    >
                      <FormLabel htmlFor="email" mr={2}>
                        Email
                      </FormLabel>
                      {!form.touched.email && <EmojiValidate type="Required" />}
                      {form.errors.email && form.touched.email && (
                        <EmojiValidate type="Error" />
                      )}
                      {!form.errors.email && form.touched.email && (
                        <EmojiValidate type="Valid" />
                      )}
                    </HStack>
                    <Input
                      {...field}
                      id="email"
                      placeholder="me@davidfrnks7.dev"
                      isDisabled={form.isSubmitting}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </VStack>

            <Field name="subject" validate={validateSubject}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={
                    form.errors.subject && form.touched.subject ? true : false
                  }
                >
                  <HStack h="auto" w="auto" spacing={0} alignItems="flex-start">
                    <FormLabel htmlFor="subject" mr={2}>
                      Subject
                    </FormLabel>
                    {!form.touched.subject && <EmojiValidate type="Required" />}
                    {form.errors.subject && form.touched.subject && (
                      <EmojiValidate type="Error" />
                    )}
                    {!form.errors.subject && form.touched.subject && (
                      <EmojiValidate type="Valid" />
                    )}
                  </HStack>
                  <Input
                    {...field}
                    id="subject"
                    placeholder="I am interested in..."
                    isDisabled={form.isSubmitting}
                  />
                  <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message" validate={validateMessage}>
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={
                    form.errors.message && form.touched.message ? true : false
                  }
                >
                  <HStack h="auto" w="auto" spacing={0} alignItems="flex-start">
                    <FormLabel htmlFor="message" mr={2}>
                      Message
                    </FormLabel>
                    {!form.touched.message && <EmojiValidate type="Required" />}
                    {form.errors.message && form.touched.message && (
                      <EmojiValidate type="Error" />
                    )}
                    {!form.errors.message && form.touched.message && (
                      <EmojiValidate type="Valid" />
                    )}
                  </HStack>
                  <Textarea
                    {...field}
                    isDisabled={form.isSubmitting}
                    id="message"
                    rows={4}
                    placeholder="I like your portfolio website and your list and stills and would like to discuss..."
                  />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <VStack h="auto" w="auto" spacing={2}>
              <Text fontSize="sm">
                Form ready to submit:{" "}
                {valid ? (
                  <EmojiValidate type="Valid" />
                ) : (
                  <EmojiValidate type="Error" />
                )}
              </Text>
              <Button
                fontSize="lg"
                py={2}
                px={4}
                isDisabled={!valid}
                background={valid ? "#00c17c" : "#FC8181"}
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </VStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactFrom;
