import { Component, h } from '@stencil/core';

@Component({
  tag: 'custom-button',
  styleUrls: ['button.background.scss', 'button.text.scss'],
  shadow: true,
})
export class Button {
  render() {
    return <button class="button">Button Text</button>;
  }
}
