import { Component, Host, h, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'lib-tag-input',
  styleUrl: 'lib-tag-input.css',
  shadow: false,
})
export class LibTagInput {

  @Prop() placeholder: string;
  @Prop({mutable: true}) tags: string[] = [];

  @Event() tagsChanged: EventEmitter<string[]>;

  @Listen('tagDeleted')
  onTagDeleted(event: CustomEvent<string[]>){
    this.tags = [...event.detail];
    this.tagsChanged.emit(event.detail);
  }

  onInput(event) {
    if(event.key === 'Enter'){
      const inputElement: HTMLInputElement = event.target;
      const newTags = [...this.tags, inputElement.value];
      this.tags = newTags;
      this.tagsChanged.emit(newTags);
      inputElement.value = "";
    }
  }

  render() {
    return (
      <Host>
        <input title={this.placeholder} placeholder={this.placeholder} onKeyUp={(event) => {this.onInput(event)}} type="text" id="tag-input" name="tagInput" />
        <div class="tag-container">
          {
            this.tags.map((tag) => 
              <lib-tag class="tag-input-tag" tag={tag} tags={this.tags}></lib-tag>
            )
          }
        </div>
      </Host>
    );
  }

}
