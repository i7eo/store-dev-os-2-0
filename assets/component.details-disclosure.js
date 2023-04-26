/**
 * @description 内容披露组件，相当于 dropdown
 * @example
 * template: 
 * <details-disclosure>
 *    <details>
 *        <summary>
 *           xxx
 *        </summary>
 *        <ul>
 *           xxx
 *       </ul>
 *    </details>
 * </details-disclosure>
 */
class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.detailsEl = this.querySelector('details')
    this.disclosureContentEl = this.detailsEl.querySelector('summary').nextElementSibling

    this.detailsEl.addEventListener('toggle', this.onToggle.bind(this));
    this.detailsEl.addEventListener('focusout', this.onFocusOut.bind(this));
  }

  onToggle() {
    if (!this.animations) this.animations = this.disclosureContentEl.getAnimations();

    if (this.detailsEl.hasAttribute('open')) {
      this.animations.forEach((animation) => animation.play());
      this.detailsEl.querySelector('summary').setAttribute('aria-expanded', true);
    } else {
      this.animations.forEach((animation) => animation.cancel());
      this.detailsEl.querySelector('summary').setAttribute('aria-expanded', false);
    }
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    });
  }

  close() {
    this.detailsEl.removeAttribute('open');
  }
}

customElements.define('details-disclosure', DetailsDisclosure);
