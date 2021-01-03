import { createTransport } from 'nodemailer'

const Transporter = createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9b227c7356bcd8",
        pass: "ac07fc87b7c6a0"
    }
})

export default Transporter
