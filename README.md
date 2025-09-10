# imofix Plugin

## Banner

The banner is a way for your website's users to discover the services offered by you as well as the imofix renter service platform.

### Getting started

Add this script tag anywhere in your website's HTML. It has to be added on every page where you would like to show the banner.

```html
<script
  src="https://plugin.imofix.io/banner.js"
  defer
  data-customer-id="your-customer-id"
  data-imofix-url="https://service.your-website.com"
  data-auto-open
  data-show-button
></script>
```

Here is an overview of all supported attributes. If you have questions about the configuration or don't know some of the information, please contact [support@imofix.io](mailto:support@imofix.io).

| Attribute                     | Description                                                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `data-customer-id`            | Your imofix customer ID.                                                                                                |
| `data-imofix-url`             | The URL of your imofix instance.                                                                                        |
| `data-lang` (optional)        | The language to use. Falls back to your `<html>` tag's `lang` attribute or the browser's language.                      |
| `data-auto-open` (optional)   | If set, the banner will open automatically. With some privacy settings (e.g. incognito tabs), this may not always work. |
| `data-show-button` (optional) | Display a floating button that will open the banner.                                                                    |

### Configuring the floating button

In addition to the above attributes, you can use the following attributes to customize the floating button.

| Attribute                           | Description                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| `data-button-text` (optional)       | Custom text for the button (if set, this must be translated on your side).                |
| `data-button-background` (optional) | The background color to use for the button, if shown (e.g. `#B2031F`).                    |
| `data-button-color` (optional)      | The text color to use for the button, if shown (e.g. `#FFFFFF`).                          |
| `data-button-top` (optional)        | How far from the top the banner should float (e.g. `24px` - use either top or bottom).    |
| `data-button-right` (optional)      | How far from the right the banner should float (e.g. `24px` - use either right or left).  |
| `data-button-bottom` (optional)     | How far from the bottom the banner should float (e.g. `24px` - use either top or bottom). |
| `data-button-left` (optional)       | How far from the left the banner should float (e.g. `24px` - use either right or left).   |

For more styling options, please use CSS custom properties. You can find all supported properties in [button.css](src/button.css).

### Opening the banner imperatively

You can also add your own button and open the banner imperatively. After the script has been loaded, you can open the banner anytime with JavaScript:

```js
imofix.openBanner();
```

To add your own button, add the function to your element's onclick listener:

```html
<button onclick="imofix.openBanner()">Open Banner</button>
```
