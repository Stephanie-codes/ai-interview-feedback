let userAccessToken = "INSERT TOKEN"
const clientID = process.env.REACT_APP_OPENAI_ORG_KEY

const GPT = {
    getAccessToken() {
        if (userAccessToken) {
            return userAccessToken;
        }
    },

    test() {
        const accessToken = GPT.getAccessToken();
        return fetch(`https://api.openai.com/v1/models`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            console.log(jsonResponse)
        }).catch(error => {
            console.log(error)
        })
    }
}

export default GPT;




// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//     organization: process.env.OPENAI_ORG_KEY,
//     apiKey: process.env.OPENAI_API_KEY,
// });

// export async function query(configuration) {

//     const openai = new OpenAIApi(configuration);

//     await openai.retrieveModel("text-davinci-003")
//     .then(result => {
//         console.log(result);
//         return
//     }).catch(error => {
//         console.log(error)
//         return 
//     });


//     // const completion = await openai.createChatCompletion({
//     //     model: "gpt-3.5-turbo",
//     //     messages: [
//     //         {"role": "system", "content": "You are a helpful assistant."}, 
//     //         {role: "user", content: "Hello world"}],
//     // }).then(result => {
//     //     console.log(result.data.choices[0].message);
//     //     return
//     // }).catch(error => {
//     //     console.log(error)
//     //     return 
//     // });

// }
