import React, { useEffect } from 'react'

const BitrixForm = ({ b24, url }) => {
  useEffect(() => {
    ;(function (w, d, u) {
      var s = d.createElement('script')
      s.async = true
      s.src = u + '?' + ((Date.now() / 180000) | 0)
      var h = d.getElementsByTagName('script')[0]
      h.parentNode.insertBefore(s, h)
    })(window, document, url)
  }, [])

  return (
    <script
      data-b24-form={b24}
      data-skip-moving='true'
    />
  )
}

export default BitrixForm
