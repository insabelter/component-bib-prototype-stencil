import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lib-card',
  styleUrl: 'lib-card.css',
  shadow: true,
})
export class LibCard {

  @Prop() card_title: string;

  render() {
    return (
      <Host>
        <div class="card">
          {
            this.card_title
            ? <header><h2>{ this.card_title }</h2></header>
            : null
          }
          <slot></slot>
        </div>
      </Host>
    );
  }

}
