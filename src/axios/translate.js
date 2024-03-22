import axios from "axios"

const translate = async (from , to , msg) => {
    console.log(msg  + from + to)
    try {
        const res = await axios.post("https://transilate-api.netlify.app/.netlify/functions/api/translate" , {
            langFrom : from , 
            langTo : to , 
            msg : msg
        })
        console.log(res.data.msg)
        return res.data.msg
    } catch (error) {
        console.log(error)
        return "something went wrong"
    }
}

export default translate