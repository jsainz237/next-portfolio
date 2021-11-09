import type { NextApiRequest, NextApiResponse } from 'next'
import * as AWS from 'aws-sdk';
import * as yup from 'yup';

AWS.config.update({
    credentials: {
        accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY!,
    }
})

const SES = new AWS.SESV2({ region: 'us-east-1' });

interface EmailArgs {
    name?: string;
    email: string;
    subject?: string;
    message: string;
}

const schema: yup.SchemaOf<EmailArgs> = yup.object({
    name: yup.string(),
    email: yup.string().email().required(),
    subject: yup.string(),
    message: yup.string().required(),
}).defined();

export default async function email(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return res.status(404).json({ statusCode: 404, message: 'Not found' });
    }

    try {
        await schema.validate(req.body);
        await sendEmail(req.body);
        return res.status(201).json({ statusCode: 201, message: 'Message sent' });
    } catch(err) {
        if(err instanceof yup.ValidationError) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Bad Request',
                errors: err.errors
            });
        }

        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function sendEmail(args: EmailArgs) {
    const params: AWS.SESV2.SendEmailRequest = {
        FromEmailAddress: process.env.BOT_EMAIL!,
        Destination: {
            ToAddresses: [process.env.PERSONAL_EMAIL!],
        },
        Content: {
            Simple: {
                Subject: {
                    Data: args.subject ?? "Message from Website",
                },
                Body: {
                    Text: {
                        Data: `${args.message}\n\nFrom: ${args.name ?? 'unknown'} - ${args.email}`,
                    }
                }
            }
        }
    }

    await SES.sendEmail(params).promise();
}