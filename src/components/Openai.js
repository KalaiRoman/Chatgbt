import React from 'react'
import { Configuration, OpenApi } from 'openai';

const configuartion = new Configuration({ apikey: "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" });
const openai = new OpenApi(configuartion);

export async function SendMsgopenai(message) {

    const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.7,
        max_tokers: 256
    });


    return (
        <div>Openai</div>
    )
}
