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
    super();
    this.header = document.querySelector('.header-wrapper');
    console.log(this.value)
  }

  /**
   * @description rewrite DetailsDisclosure onToggle
   * @returns 
   */
  onToggle() {
    if (!this.header) return;
    this.header.__preventHide = this.detailsEl.open;
  }
}

customElements.define('header-dropdown', HeaderDropdown);