import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lib-tag-input',
  styleUrl: 'lib-tag-input.css',
  shadow: false,
})
export class LibTagInput {

  render() {
    return (
      <Host>
        <input title="Enter X" placeholder="Enter X" type="text" id="tag-input" name="tagInput" />
        <lib-tag>Test1</lib-tag>
        <lib-tag>Banana</lib-tag>
        Test1
      </Host>
    );
  }

}
