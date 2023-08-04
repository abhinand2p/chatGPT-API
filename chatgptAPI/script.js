import { config } from "dotenv"
import { Configuration, OpenAIApi } from "openai"
config()

const openai = new OpenAIApi(new Configuration({
    apiKey : process.env.API_KEY
}))

openai.createChatCompletion({
    model : "gpt-3.5-turbo",
    messages : [{role : "user", content : "Hello Chat"}]
}).then(res => {
    console.log(res);
})