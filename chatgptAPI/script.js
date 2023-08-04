import { config } from "dotenv"
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"
config()

const openai = new OpenAIApi(new Configuration({
    apiKey : process.env.API_KEY
}))

const UserInterface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

UserInterface.prompt()
UserInterface.on("line", async input => {
    const res = await openai.createChatCompletion({
        model : "gpt-3.5-turbo",
        messages : [{role : "user", content : input}]
    })
    console.log(res.data.choices[0].message.content);
    UserInterface.prompt()
})

