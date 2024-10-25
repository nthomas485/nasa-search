import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `nasa-image`
 * 
 * @demo index.html
 * @element nasa-image
 */
export class nasaImage extends DDDSuper(I18NMixin(LitElement)) {
    constructor() {
        super();
        this.title = '';
        this.source = '';
        this.owner = "";
      }
    
      static get properties() {
        return {
            source: { type: String },
            title: { type: String },
            owner: { type: String },
        };
      }
    
      static get styles() {
        return [css`
        
    
        .image {
        display: inline-block;
        }
    
        .image div {
        max-width: 200px;
        font-size: 16px;
        font-weight: bold;
        }
    
        .image img {
        display: block;
        width: 240px;
        height: 240px;
        }
        .secondaryCreator{
        display: inline-block;
      }
      a{
        text-decoration: none;
      }
      a:hover{
        text-decoration: none;
        color: fuchsia;
      }
      a:visited{
        text-decoration: none;
      }
    
        `];
      }
    
      render() {
        return html`
        <a class="image" href="${this.source}" target="_blank">
        <img src="${this.source}" alt="${this.title}"/>
            <div>${this.title}</div>
            <div id="secondaryCreator">${this.owner}</div>
      </a>
        `;
      }
      static get tag() {
        return "nasa-image";
      }
    }
/*
    static get tag() {
        return "nasa-image";
    }

    constructor() {
        super();
        this.alt="";
        this.title = 'Moon';
        this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/1200px-FullMoon2010.jpg";
        this.owner = "BRo";
    }

    // Lit reactive properties
    static get properties() {
        return {
            ...super.properties,
            title: { type: String },
            alt: { type: String },
            image: { type: String },
            owner: { type: String },
        };
    }

    static get styles() {
        return [super.styles,
        css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .image{
        display: inline-block;
      }
      .image div{
        max-width: 200px;
        font-size: 16px;
        font-weight: bold;
      }
      .image :hover{
        color: fuchsia;
      }
      .secondaryCreator{
        display: inline-block;
      }
    `];
    }


    render() {
        return html`
        <div class="image">
<a href="${this.image}" target="_blank"> </a>
  <img src="${this.image}" style="width: 240px;" alt="${this.title}"> 
  <div class="pic-title">${this.title}</div>
  <div id="secondaryCreator">${this.owner}</div>
    </div>
  <slot></slot>
    </a>`;
    }

    /**
     * haxProperties integration via file reference
     *//*
    static get haxProperties() {
        return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
            .href;
    }
}
*/
globalThis.customElements.define(nasaImage.tag, nasaImage);