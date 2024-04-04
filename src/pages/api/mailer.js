import nodemailer from 'nodemailer'
import formidable from 'formidable'

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const mailer = async (req, res) => {
  const form = formidable({})

  console.log('Получил данные из формы')

  try {
    console.log('провалился в блок try catch')
    const [fields, files] = await form.parse(req)
    const { name, phone, email, message } = fields

    console.log('распарсил форму')

    let mailContent = ''
    let attachments = []

    mailContent += name ? `Имя: ${name[0]}\n` : ''
    mailContent += phone ? `Телефон: ${phone[0]}\n` : ''
    mailContent += email ? `Почта: ${email[0]}\n` : ''
    mailContent += message ? `Сообщение: ${message[0]}\n` : ''

    console.log('составил сообщение')

    if (files?.file?.length) {
      attachments.push({ filename: files.file[0].originalFilename, path: files.file[0].filepath })
    }

    console.log('поработал с вложениями')

    // await transporter.sendMail({
    //   from: `Friendlyinn Group | <${process.env.SMTP_USER}>`,
    //   // to: 'hotel@friendlyinn.ru',
    //   to: 'nickolaybuzinov@gmail.com',
    //   subject: `Заявка с сайта FriendlyInn Group`,
    //   text: mailContent,
    //   attachments,
    // })

    const tgMessage = encodeURI(mailContent)
    console.log('перекодировал сообщение в урл формат')
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TG_API_KEY}/sendMessage?chat_id=${process.env.TG_CHAT_ID}&parse_mode=html&text=${tgMessage}`,
      { method: 'POST' },
    )
    console.log('отправил сообщение в тг чат')
    const data = await response.json()
    res.status(200).json({ message: 'Сообщение успешно отправлено', code: 200 })
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при отправке формы', code: 500, err })
  }
}

export default mailer
