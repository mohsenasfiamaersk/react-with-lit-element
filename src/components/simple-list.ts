
import * as React from 'react';
import {createComponent} from '@lit-labs/react';
import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";

const styles = css`
`;

class SimpleList extends LitElement {
    private _items: string[] = [];

    static styles = styles;

    @property({type: Array })
    public animals: string[] = [];

    @property({type: Array })
    public get items() {
        return this._items;
    }

   
    public set items(value: string[]) {
        const oldVal = this._items;
        this._items = value;
        this.requestUpdate('items', oldVal);
    }

    render(): TemplateResult {
        return html`
        ${this.items.map(item => html`<div>${item}</div>`)}
        ${this.animals.map(animal => html`<div>${animal}</div>`)}
        `;
    }
}

if (!customElements.get("simple-list")) {
  customElement("simple-list")(SimpleList);
}


export const ReactSimpleList = createComponent(
  React,
  'simple-list',
  SimpleList
);