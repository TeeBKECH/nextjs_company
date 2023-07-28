import nodemailer from 'nodemailer'
import formidable from 'formidable'
import fetch from 'node-fetch'

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

  try {
    const [fields, files] = await form.parse(req)
    const { name, phone, email, message, captcha } = fields

    if (!captcha[0]) {
      return res.status(400).json({ message: 'Пройдите проверку "Я не робот"', code: 400 })
    }

    const result = await fetch(
      `https://smartcaptcha.yandexcloud.net/validate?secret=${process.env.CAPTCHA_SERVER_KEY}&token=${captcha[0]}`,
    )
    const captchaStatus = await result.json()
    if (captchaStatus.status !== 'ok') {
      return res
        .status(400)
        .json({ message: 'Проверка "Я не робот" не пройдена. Попробуйте снова', code: 400 })
    }

    let mailContent = ''
    let attachments = []

    mailContent += name ? `Имя: ${name[0]}\n` : ''
    mailContent += phone ? `Телефон: ${phone[0]}\n` : ''
    mailContent += email ? `Почта: ${email[0]}\n` : ''
    mailContent += message ? `Сообщение: ${message[0]}\n` : ''

    if (files?.file?.length) {
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
    res.status(500).json({ message: 'Ошибка при отправке формы', code: 500, err })
  }
}

export default mailer
