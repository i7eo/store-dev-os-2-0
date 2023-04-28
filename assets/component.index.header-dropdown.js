/**
 * @description header 中菜单展开组件
 * @example
 * template:
 * <header-dropdown>
 *    <details>
 *        <summary>
 *           xxx
 *        </summary>
 *        <ul>
 *           xxx
 *       </ul>
 *    </details>
 * </header-dropdown>
 */
class HeaderDropdown extends DetailsDisclosure {
  constructor() {
    super()
    this.header = document.querySelector('.header-wrapper')
    
    if (this.toggle === 'open') {
      // TODO: focus el to trigger clickoutside hide el
      // this.disclosureContentEl.focus()
      this.detailsEl.setAttribute('open', true)
    } else {
      this.detailsEl.removeAttribute('open')
    }
  }

  /**
   * @description rewrite DetailsDisclosure onToggle
   * @returns
   */
  onToggle() {
    if (!this.header) return
    this.header.__preventHide = this.detailsEl.open
  }

  set toggle(value) {
    this.setAttribute('toggle', value)
  }

  get toggle() {
    return this.getAttribute('toggle')
  }
}

customElements.define('header-dropdown', HeaderDropdown)
