import nodemailer from 'nodemailer'

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

const mailer = async (req, res) => {
  const { name, phone, email, message } = req.body

  let mailContent = ''

  mailContent += name ? `Имя: ${name}\n` : ''
  mailContent += phone ? `Телефон: ${phone}\n` : ''
  mailContent += email ? `Почта: ${email}\n` : ''
  mailContent += message ? `Сообщение: ${message}\n` : ''

  try {
    await transporter.sendMail({
      from: `Friendlyinn Group | <${process.env.SMTP_USER}>`,
      to: 'nickolaybuzinov@gmail.com',
      subject: `Заявка с сайта FriendlyInn Group`,
      text: mailContent,
    })
    res.status(200).json({ message: 'Сообщение успешно отправлено', code: 200 })
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при отправке формы', code: 500, error })
  }
}

export default mailer
