import { utils } from "../support/utils/utils"
const email1 = utils.generateEmailid(7)
export const testdata = [
    {
        eventName: '{eventname}',
        name: "{name}",
        Signup: {
            emailAddress: email1,
            password: '{password}'
        }
    },
]