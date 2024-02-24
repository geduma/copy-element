import { CopyElement } from './copy-element'
import { copyToClipboard, createTooltipElement } from './copy-clipboard'

customElements.define('copy-clipboard', CopyElement)

const copy = (text: any) => {
  copyToClipboard(text)
  const btn = document.getElementsByTagName('copy-clipboard')[0] as HTMLElement
  const tooltip = createTooltipElement(btn.getAttribute('tooltip-position') ?? 'top', btn.getAttribute('tooltip-text') ?? 'copied!')
  btn.appendChild(tooltip)
  setTimeout(() => {
    tooltip.remove()
  }, 1000)
}

export {
  copy
}
