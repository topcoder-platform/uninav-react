function loadUninavLib(url) {
  if (typeof window === 'undefined'
    || typeof document === 'undefined') {
    return
  }

  !(function (n, t, e, a, c, i, o) {

      n.TcUnivNavConfig = c

      n[c] = n[c] || function () {
          (n[c].q = n[c].q ?? []).push(arguments)
      }

      n[c].l = 1 * new Date()

      i = t.createElement(e)

      o = t.getElementsByTagName(e)[0]

      i.async = 1

      i.type = 'module'

      i.src = a

      o.parentNode.insertBefore(i, o)

  }(window, document, 'script', url, 'tcUniNav'))
}

export default loadUninavLib
