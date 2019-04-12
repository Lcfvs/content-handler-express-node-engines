import { promises } from 'fs'
import jsdom from 'jsdom'
import ContentEngine from 'content-handler-express/content-engine.js'

function clone (fragment) {
  return fragment.cloneNode(true)
}

function load (name) {
  return promises.readFile(name)
    .then(response => response.toString())
}

export default function html (app) {
  const engine = new ContentEngine(app, load)

  return name => engine.render(name, clone, data => {
    const fragment = jsdom.JSDOM.fragment('')
    const body = fragment.ownerDocument.createElement('body')

    body.innerHTML = data
    fragment.appendChild(body)

    return fragment
  })
}
