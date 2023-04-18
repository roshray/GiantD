import express from "express"
import * as dotenv from "dotenv"
//import { Configuration,OpenAIApi } from "openai"

import { createClient } from 'pexels'

dotenv.config()

const router = express.Router()

const config = createClient({
    apiKey: process.env.OPENAI_API_KEY,
})

//const openai = new OpenAIApi(config)

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Hello from DALLE Routes"})
})

router.route("/").post( async (req,res) => {
    try {
        const { prompt } = req.body 
        const response = await config.photos.show({
            id: 2014422,
        }).then(photo => {

        })

        const image = response.data.data[0].b64_json

        res.status(200).json({ photo: image})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went error"})
        
    }
})

export default router