import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    InputNumber,
    RadioChangeEvent,
    Row,
    Select,
    Input, Radio, Space
} from 'antd';
import { FormContainer, RadioContent } from './styles';

const { Option } = Select;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export function SignUpContent() {
    const [form] = Form.useForm();
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onWebsiteChange = (value: string) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
        }
    };

    const websiteOptions = autoCompleteResult.map(website => ({
        label: website,
        value: website,
    }));

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            style={{ width: '70vw' }}
            scrollToFirstError
        >
            <FormContainer>
                <Form.Item
                    name="name"
                    label="Nome"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Senha"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="residence"
                    label="Localização"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your habitual residence!' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Celular"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="name"
                    label="Área de atuação"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="donation"
                    label="tempo de experiência "
                    rules={[{ required: true, message: 'Please input donation amount!' }]}
                >
                    <RadioContent>
                        <Radio.Group onChange={onChange} value={value} style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', margin: '8px 0 20px 05px' }}>
                            <Space direction="vertical">
                                <Radio value={1}>
                                    <p style={{ fontSize: '14px', lineHeight: '0.4' }}>1 a 2 anos</p>
                                </Radio>
                                <Radio value={2}>
                                    <p style={{ fontSize: '14px', lineHeight: '0.4' }}>3 a 5 anos</p>
                                </Radio>
                                <Radio value={3}>
                                    <p style={{ fontSize: '14px', lineHeight: '0.4' }}>6 a 9 anos</p>
                                </Radio>
                                <Radio value={3}>
                                    <p style={{ fontSize: '14px', lineHeight: '0.4' }}>10 ou mais</p>
                                </Radio>
                            </Space>
                        </Radio.Group>
                    </RadioContent>
                </Form.Item>

                <Form.Item
                    name="donation"
                    label="CPF"
                    rules={[{ required: true, message: 'Please input donation amount!' }]}
                >
                    <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="donation"
                    label="Pretenção salarial"
                    rules={[{ required: true, message: 'Please input donation amount!' }]}
                >
                    <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item
                    name="donation"
                    label="Nível de inglês"
                    rules={[{ required: true, message: 'Please input donation amount!' }]}
                >
                    <RadioContent>
                        <Radio.Group onChange={onChange} value={value} style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', margin: '8px 0 20px 0px' }}>
                            <Space direction="vertical">
                                <Radio value={1}>
                                    <p style={{ fontSize: '14px', lineHeight: '0.4' }}>Ótimo</p>
                                    <p style={{ fontSize: '12px', lineHeight: '0.4' }}>Consigo manter conversas, me comunicar de forma clara e documentar o meu processo de trabalho</p>
                                </Radio>
                                <Radio value={2}>
                                    <p style={{ fontSize: '14px', lineHeight: '0.4' }}>Até que é bom</p>
                                    <p style={{ fontSize: '12px', lineHeight: '0.4' }}>Consigo ler e escrever, mas tenho dificuldade na hora de manter uma conversa.</p>
                                </Radio>
                                <Radio value={3}>
                                    <p style={{ fontSize: '14px', lineHeight: '0.4' }}>Básico</p>
                                    <p style={{ fontSize: '12px', lineHeight: '0.4' }}>consigo ler e escrever com a ajuda de um tradutor</p>
                                </Radio>
                            </Space>
                        </Radio.Group>
                    </RadioContent>
                </Form.Item>

                <Form.Item {...tailFormItemLayout} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="primary" htmlType="submit">
                        Salvar
                    </Button>
                </Form.Item>
            </FormContainer>
        </Form >
    );
};
