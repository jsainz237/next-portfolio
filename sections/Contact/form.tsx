import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { a, config, useTransition } from 'react-spring';
import { useForm, useFormState, Controller, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/common';
import * as Styled from './styles';

type FormData = {
    name?: string;
    email: string;
    subject?: string;
    message: string;
}

const schema: yup.SchemaOf<FormData> = yup.object({
    name: yup.string(),
    email: yup.string().email().required(),
    subject: yup.string(),
    message: yup.string().required(),
}).defined();

export const ContactForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const { isSubmitted } = useFormState({ control });

    const onSubmit = handleSubmit(data => console.log(data));

    
    return (
        <Form onSubmit={onSubmit} noValidate>
            <Row>
                <Col>
                    <FormControl
                        name="name"
                        control={control}
                        type="text"
                        placeholder="Name"
                    />
                </Col>
                <Col>
                    <FormControl
                        name="email"
                        control={control}
                        type="email"
                        placeholder="Email"
                        rules={{ required: true }}
                        error={isSubmitted && errors.email}
                    />
                </Col>
            </Row>
                <FormControl
                    name="subject"
                    control={control}
                    type="text"
                    placeholder="Subject"
                />
                <FormControl
                    name="message"
                    control={control}
                    forwardedAs="textarea"
                    rows={4}
                    placeholder="Message"
                    rules={{ required: true }}
                    error={isSubmitted && errors.message}
                />
            <Button type="submit" color="#a9b4bf" style={{ opacity: 1 }}>send message</Button>
        </Form>
    )
}

type FormControlProps = 
    React.ComponentProps<typeof Styled.FormControl> & 
    {
        name: keyof FormData;
        control: Control<FormData, object>;
        error?: any;
        topError?: boolean;
    };

const FormControl: React.FC<FormControlProps> = ({ control, name, error, ...props }) => {
    const [focused, setFocused] = useState<boolean>(false);
    const [indicator, setIndicator] = useState<'focused' | 'error'>();

    const transitions = useTransition(indicator, {
        from: { bottom: 0.1 },
        enter: { bottom: -0.5 },
        leave: { bottom: 0.1 },
        config: {
            ...config.stiff,
            duration: 100,
        },
    });

    useEffect(() => {
        if(error) {
            return setIndicator('error');
        }
        else if(focused && !error) {
            return setIndicator('focused');
        }
        else {
            return setIndicator(undefined);
        }
    }, [focused, error]);

    return (
        <div style={{ position: "relative" }}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <>
                        <Styled.FormControl 
                            {...field}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            {...props}
                        />
                        { error && (
                            <Styled.FormControlFeedback type="invalid" top={name === "email"} tooltip>
                                {error.message}
                            </Styled.FormControlFeedback> 
                        )}
                    </>
                )}
            />
            { transitions(({ bottom }, indicator) => {
                if(indicator === 'focused') {
                    return <AnimatedStyledInputIndicator 
                        style={{ bottom: bottom.to(val => `${val}rem` )}} 
                    />
                }

                if(indicator === 'error') {
                    return <AnimatedStyledInputIndicator
                        color="red"
                        style={{ zIndex: 200, bottom: bottom.to(val => `${val}rem` )}} 
                    />
                }

                return null;
            })}
        </div>
    )
}

const AnimatedStyledInputIndicator = a(Styled.InputIndicator);