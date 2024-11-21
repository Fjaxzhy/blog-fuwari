/// <reference types="mdast" />
import { h } from 'hastscript'

/**
 * Creates a Friend Card component.
 *
 * @param {Object} props
 * @param {string} props.data
 * @param {import('mdast').RootContent[]} c
 * @returns {import('mdast').Parent}
 */
export function FriendCardComponent(props, c) {
  const data = props.data.split('|')
  if (data.length !== 4)
    return h('div', { class: 'hidden' }, ['Invalid directive.'])
  const name = data[0]
  const site = data[1]
  const url = data[2]
  const description = data[3]

  const cardUuid = `FC${Math.random().toString(36).slice(-6)}`

  const nAvatar = h(`div#${cardUuid}-avatar`, { class: 'gc-avatar fc-avatar' })
  const nLink = h(`span#${cardUuid}-link`, { class: 'fc-link' }, url)
  const nTitle = h('div', { class: 'gc-titlebar' }, [
    h('div', { class: 'gc-titlebar-left' }, [
      h('div', { class: 'gc-owner' }, [
        nAvatar,
        h('div', { class: 'gc-user' }, name),
      ]),
      h('div', { class: 'gc-divider' }, '/'),
      h('div', { class: 'gc-repo' }, site),
    ]),
    h(`div#${cardUuid}-status`, { class: 'fc-ping' }, ' N/A'),
  ])
  const nDescription = h(
    `div#${cardUuid}-description`,
    { class: 'gc-description' },
    description,
  )
  const nScript = h(
    `script#${cardUuid}-script`,
    { type: 'text/javascript', defer: true },
    `
      fetch('https://api.kagurayayoi.top/favicon.php?site=${url}')
        .then(response => response.json())
        .then(data => {
          const avatarEl = document.getElementById('${cardUuid}-avatar');
          const statusEl = document.getElementById('${cardUuid}-status');
          avatarEl.style.backgroundImage = 'url(' + data.url + ')';
          if (data.code === 200) {
            statusEl.classList.add("--s");
            statusEl.innerText = ' OK';
          } else {
            statusEl.classList.add("--f");
            statusEl.innerText = ' NC';
          }
          console.log("[FRIEND-CARD] Loaded site favicon for ${site} | ${cardUuid}.");
        }).catch(err => {
          console.warn("[FRIEND-CARD] (Error) Loading site favicon for ${site} | ${cardUuid}.");
        });
      document.getElementById('${cardUuid}-card').classList.remove("fetch-waiting");
      console.log("[FRIEND-CARD] Loaded card for ${site} | ${cardUuid}.");
    `,
  )

  return h(
    `a#${cardUuid}-card`,
    {
      class: 'card-github fetch-waiting no-styling',
      href: `${url}`,
      target: '_blank',
      site,
    },
    [nTitle, nDescription, h('div', { class: 'gc-infobar' }, [nLink]), nScript],
  )
}
