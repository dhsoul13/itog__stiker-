import nodemainer from "nodemailer"
import config from 'config';




export const sendActivationMail = async (to, link) =>{
    try {
    const transporter = await nodemainer.createTransport(
        {
            host: config.get('SMTP_HOST'),
            port: config.get('SMTP_PORT'),
            secure: true,
            auth:{
                user: config.get('SMTP_USER'),
                pass: config.get('SMTP_PASSWORD'),
            }
        }
    )
    
    await transporter.sendMail({
        from: config.get('SMTP_USER'),
        to: to,
        subject: 'Активация аккаунта на Stiker',
        text: '',
        html: `
            <div>
                <h1>Для активации перейдите по ссылке</h1>
                <a href=${link}>Ссылка</a>
            </div>
        `
    })
    } catch (e){
        return e
    }
}   