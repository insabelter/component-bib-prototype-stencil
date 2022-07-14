import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tag-input',
  styleUrl: 'tag-input.css',
  shadow: true,
})
export class TagInput {

  render() {
    return (
      <Host>
        This is a tag-input component!
      </Host>
    );
  }

}
