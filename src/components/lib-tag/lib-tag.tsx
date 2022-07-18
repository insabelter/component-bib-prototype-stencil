import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'lib-tag',
  styleUrls: [
    'lib-tag.css'
  ],
  shadow: false,
})
export class LibTag {

  @Prop() tag: string;
  @Prop() tags: string[];

  @Event() tagDeleted: EventEmitter<string[]>;

  deleteTag() {
    const index = this.tags.indexOf(this.tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

    this.tagDeleted.emit(this.tags);
  }

  render() {
    return (
      <Host>
        <div class="badge">
          { this.tag }
          <button onClick={() => this.deleteTag()}>X</button>
        </div>
      </Host>
    );
  }

}
