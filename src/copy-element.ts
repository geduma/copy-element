import { createButtonElement } from './copy-clipboard'

export class CopyElement extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    const btn = createButtonElement(this.theme)
    this.appendChild(btn)
  }

  get theme (): string {
    return this.getAttribute('theme') ?? 'dark'
  }

  get tooltipPosition (): string {
    return this.getAttribute('tooltip-position') ?? 'top'
  }

  get tooltipText (): string {
    return this.getAttribute('tooltip-text') ?? 'copied!'
  }
}
