import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lib-tag',
  styleUrls: [
    'lib-tag.css'
  ],
  shadow: false,
})
export class LibTag {

  render() {
    return (
      <Host>
        <div class="badge">
          <slot></slot>
          <button>X</button>
        </div>
      </Host>
    );
  }

}
