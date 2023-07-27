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
  let mailContent = ''
  let attachments = []

  try {
    const [fields, files] = await form.parse(req)
    const { name, phone, email, message } = fields
    mailContent += name ? `Имя: ${name[0]}\n` : ''
    mailContent += phone ? `Телефон: ${phone[0]}\n` : ''
    mailContent += email ? `Почта: ${email[0]}\n` : ''
    mailContent += message ? `Сообщение: ${message[0]}\n` : ''

    if (files?.file?.length) {
      console.log(files.file[0])
      attachments.push({ filename: files.file[0].originalFilename, path: files.file[0].filepath })
    }

    await transporter.sendMail({
      from: `Friendlyinn Group | <${process.env.SMTP_USER}>`,
      // to: 'hotel@friendlyinn.ru',
      to: 'nickolaybuzinov@gmail.com',
      subject: `Заявка с сайта FriendlyInn Group`,
      text: mailContent,
      attachments,
    })
    res.status(200).json({ message: 'Сообщение успешно отправлено', code: 200 })
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при отправке формы', code: 500, error })
  }
}

export default mailer
