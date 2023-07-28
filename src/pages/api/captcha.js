import fetch from 'node-fetch'

const captcha = async (req, res) => {
  try {
    const { captchaToken } = req.body
    console.log(captchaToken)
    if (!captchaToken) {
      return res.status(400).json({ message: 'Токен captcha отсутствует', code: 400 })
    }

    const result = await fetch(
      `https://smartcaptcha.yandexcloud.net/validate?secret=${process.env.CAPTCHA_SERVER_KEY}&token=${captchaToken}`,
    )
    const captchaStatus = await result.json()
    console.log(captchaStatus)
    if (captchaStatus.status !== 'ok') {
      // console.log(captchaStatus)
      return res
        .status(400)
        .json({ message: 'Проверка "Я не робот" не пройдена. Попробуйте снова', code: 401 })
    }
    res.status(200).json({ message: 'Проверка пройдена', code: 200 })
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при проверке капчи', code: 500, err })
  }
}

export default captcha
