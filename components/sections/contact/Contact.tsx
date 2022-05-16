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
  Box,
  BoxProps
} from "@chakra-ui/react";
import { Field, Form, Formik, FieldProps } from "formik";
import React, { useEffect, useState } from "react";
import EmojiValidate from "./EmojiValidate";
import axios from "axios";
import Captcha from "./Captcha";
import { motion } from "framer-motion";

export const MotionBox = motion<BoxProps>(Box);

const Contact = (): JSX.Element => {
  const environment = process.env.NODE_ENV || "development";

  // Validate
  const [validName, setValidName] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validSubject, setValidSubject] = useState<boolean>(false);
  const [validMessage, setValidMessage] = useState<boolean>(false);

  // Captcha
  const [token, setToken] = useState<null | string>(null);

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
    if (
      !validEmail ||
      !validMessage ||
      !validName ||
      !validSubject ||
      token === null
    ) {
      setValid(false);
    }

    if (validEmail && validMessage && validName && validSubject && token) {
      setValid(true);
    }
  }, [validEmail, validMessage, validName, validSubject, token]);

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
      body.key =
        environment === "development"
          ? "ABc123$%^"
          : process.env.NEXT_PUBLIC_ACCESS_KEY;

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

  // Captcha reset
  const [reset, setReset] = useState<boolean>(false);

  // Field theme
  const fieldTheme = {
    bg: "gray.900",
    borderColor: "white",
    _placeholder: {
      color: "gray.400",
      fontWeight: "light"
    },
    _focus: {
      bg: "#000",
      color: "#FFF",
      borderColor: "#63b3ed",
      boxShadow: "0 0 0 1px #63b3ed",
      zIndex: "1"
    }
  };

  return (
    <VStack
      w="100%"
      h="100%"
      justifyContent="center"
      alignContent="center"
      py="10vh"
      spacing={6}
      id="contact"
      px={{ base: 3, md: 8, "2xl": "10%" }}
    >
      <VStack
        boxShadow="rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
        borderRadius="2xl"
        border="1px solid white"
        w="100%"
        zIndex={0}
        h="100%"
        py={12}
        bg="brand.content"
      >
        <Heading as="h3" size="xl" mb={6}>
          {"Contact Me"}
        </Heading>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: ""
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
                    message: ""
                  }
                });
                setToken(null);
                setReset(true);
              })
              .catch(() => {
                actions.setSubmitting(false);
                setToken(null);
                setReset(true);
              });
          }}
        >
          {(props) => (
            <Form
              style={{
                width: "90%",
                height: "100%"
              }}
            >
              <VStack h="auto" w="100%" spacing={6}>
                <Heading as="h4" size="md">
                  {"Required fields indicated with: "}
                  <EmojiValidate type="Required" />
                </Heading>

                <HStack
                  display={{ base: "none", lg: "flex" }}
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
                            {"Name"}
                          </FormLabel>
                          {!form.touched.name && (
                            <EmojiValidate type="Required" />
                          )}
                          {form.errors.name && form.touched.name && (
                            <EmojiValidate type="Error" />
                          )}
                          {!form.errors.name && form.touched.name && (
                            <EmojiValidate type="Valid" />
                          )}
                        </HStack>
                        <Input
                          required
                          {...fieldTheme}
                          type="text"
                          isDisabled={form.isSubmitting}
                          {...field}
                          id="name"
                          placeholder="David Franks"
                          {...(!form.errors.name && form.touched.name
                            ? {
                                borderColor: "brand.valid",
                                boxShadow: "0 0 0 1px #00c17c",
                                _hover: {
                                  borderColor: "brand.valid",
                                  boxShadow: "0 0 0 1px #00c17c"
                                }
                              }
                            : "")}
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
                            {"Email"}
                          </FormLabel>
                          {!form.touched.email && (
                            <EmojiValidate type="Required" />
                          )}
                          {form.errors.email && form.touched.email && (
                            <EmojiValidate type="Error" />
                          )}
                          {!form.errors.email && form.touched.email && (
                            <EmojiValidate type="Valid" />
                          )}
                        </HStack>
                        <Input
                          required
                          {...fieldTheme}
                          {...field}
                          type="email"
                          id="email"
                          placeholder="contact@davidfrnks7.dev"
                          isDisabled={form.isSubmitting}
                          {...(!form.errors.email && form.touched.email
                            ? {
                                borderColor: "brand.valid",
                                boxShadow: "0 0 0 1px #00c17c",
                                _hover: {
                                  borderColor: "brand.valid",
                                  boxShadow: "0 0 0 1px #00c17c"
                                }
                              }
                            : "")}
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </HStack>

                {/* Not duped components!! Different layouts for responsiveness. */}

                <VStack
                  display={{ base: "flex", lg: "none" }}
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
                            {"Name"}
                          </FormLabel>
                          {!form.touched.name && (
                            <EmojiValidate type="Required" />
                          )}
                          {form.errors.name && form.touched.name && (
                            <EmojiValidate type="Error" />
                          )}
                          {!form.errors.name && form.touched.name && (
                            <EmojiValidate type="Valid" />
                          )}
                        </HStack>
                        <Input
                          required
                          {...fieldTheme}
                          type="text"
                          isDisabled={form.isSubmitting}
                          {...field}
                          id="name"
                          placeholder="David Franks"
                          {...(!form.errors.name && form.touched.name
                            ? {
                                borderColor: "brand.valid",
                                boxShadow: "0 0 0 1px #00c17c",
                                _hover: {
                                  borderColor: "brand.valid",
                                  boxShadow: "0 0 0 1px #00c17c"
                                }
                              }
                            : "")}
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
                            {"Email"}
                          </FormLabel>
                          {!form.touched.email && (
                            <EmojiValidate type="Required" />
                          )}
                          {form.errors.email && form.touched.email && (
                            <EmojiValidate type="Error" />
                          )}
                          {!form.errors.email && form.touched.email && (
                            <EmojiValidate type="Valid" />
                          )}
                        </HStack>
                        <Input
                          required
                          {...fieldTheme}
                          {...field}
                          type="email"
                          id="email"
                          placeholder="contact@davidfrnks7.dev"
                          isDisabled={form.isSubmitting}
                          {...(!form.errors.email && form.touched.email
                            ? {
                                borderColor: "brand.valid",
                                boxShadow: "0 0 0 1px #00c17c",
                                _hover: {
                                  borderColor: "brand.valid",
                                  boxShadow: "0 0 0 1px #00c17c"
                                }
                              }
                            : "")}
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
                        form.errors.subject && form.touched.subject
                          ? true
                          : false
                      }
                    >
                      <HStack
                        h="auto"
                        w="auto"
                        spacing={0}
                        alignItems="flex-start"
                      >
                        <FormLabel htmlFor="subject" mr={2}>
                          {"Subject"}
                        </FormLabel>
                        {!form.touched.subject && (
                          <EmojiValidate type="Required" />
                        )}
                        {form.errors.subject && form.touched.subject && (
                          <EmojiValidate type="Error" />
                        )}
                        {!form.errors.subject && form.touched.subject && (
                          <EmojiValidate type="Valid" />
                        )}
                      </HStack>
                      <Input
                        required
                        {...fieldTheme}
                        {...field}
                        type="text"
                        id="subject"
                        placeholder="I am interested in..."
                        isDisabled={form.isSubmitting}
                        {...(!form.errors.subject && form.touched.subject
                          ? {
                              borderColor: "brand.valid",
                              boxShadow: "0 0 0 1px #00c17c",
                              _hover: {
                                borderColor: "brand.valid",
                                boxShadow: "0 0 0 1px #00c17c"
                              }
                            }
                          : "")}
                      />
                      <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="message" validate={validateMessage}>
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={
                        form.errors.message && form.touched.message
                          ? true
                          : false
                      }
                    >
                      <HStack
                        h="auto"
                        w="auto"
                        spacing={0}
                        alignItems="flex-start"
                      >
                        <FormLabel htmlFor="message" mr={2}>
                          {"Message"}
                        </FormLabel>
                        {!form.touched.message && (
                          <EmojiValidate type="Required" />
                        )}
                        {form.errors.message && form.touched.message && (
                          <EmojiValidate type="Error" />
                        )}
                        {!form.errors.message && form.touched.message && (
                          <EmojiValidate type="Valid" />
                        )}
                      </HStack>
                      <Textarea
                        required
                        {...fieldTheme}
                        {...field}
                        isDisabled={form.isSubmitting}
                        id="message"
                        rows={4}
                        placeholder="I like your portfolio website and your list of stills. I am contacting you to discuss..."
                        {...(!form.errors.message && form.touched.message
                          ? {
                              borderColor: "brand.valid",
                              boxShadow: "0 0 0 1px #00c17c",
                              _hover: {
                                borderColor: "brand.valid",
                                boxShadow: "0 0 0 1px #00c17c"
                              }
                            }
                          : "")}
                      />
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <VStack h="auto" w="100%" spacing={6}>
                  <VStack h="auto" w="100%" spacing={2}>
                    <strong>
                      <Text fontSize="sm" color="brand.danger">
                        {"Do not contact with unsolicited services or offers"}
                      </Text>
                    </strong>
                    <Text fontSize="sm">
                      {"Form ready to submit? "}
                      {valid ? (
                        <EmojiValidate type="Valid" />
                      ) : (
                        <EmojiValidate type="Error" />
                      )}
                    </Text>
                  </VStack>
                  <VStack h="auto" w="100%" spacing={6}>
                    <Captcha
                      updateToken={setToken}
                      shouldReset={reset}
                      updateReset={setReset}
                    />
                    <MotionBox
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="submit"
                        isDisabled={!valid}
                        background={valid ? "brand.valid" : "brand.danger"}
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        {"Submit"}
                      </Button>
                    </MotionBox>
                  </VStack>
                </VStack>
              </VStack>
            </Form>
          )}
        </Formik>
      </VStack>
    </VStack>
  );
};

export default Contact;
