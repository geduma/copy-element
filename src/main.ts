import { CopyElement } from './copy-element'
import { copyToClipboard, createTooltipElement } from './copy-clipboard'

customElements.define('copy-clipboard', CopyElement)

const copy = async (text: any): Promise<boolean> => {
  return await new Promise((resolve) => {
    void copyToClipboard(text)
      .then(() => {
        const btn = document.getElementsByTagName('copy-clipboard')[0] as HTMLElement
        const tooltip = createTooltipElement(btn.getAttribute('tooltip-position') ?? 'top', btn.getAttribute('tooltip-text') ?? 'copied!')
        btn.appendChild(tooltip)
        setTimeout(() => {
          tooltip.remove()
        }, 1000)
        resolve(true)
      })
  })
}

export {
  copy
}
