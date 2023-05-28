import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-element')
export class AppElement extends LitElement {
    /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css``
}

declare global {
  interface HTMLElementTagNameMap {
    'app-element': AppElement
  }
}
