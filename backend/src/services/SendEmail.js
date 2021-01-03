import { Transporter } from '../configs'

const SendEmail = async (data) => {
    if (!data) {
        return false
    }
    const mailOptions = {
        from: 'accounts@venu.io',
        to: data.email,
        subject: 'Welcome to VENU',
        text: `
            Username: ${data.username}
            Email: ${data.email}
            Password: ${data.password}
        `,
        html: `
        Username: ${data.username}<br/>
        Email: ${data.email}<br/>
        Password: ${data.password}<br/>
    `
    }
    Transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error)
        }
    })
    return true
}

export default SendEmail
