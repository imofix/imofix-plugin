# imofix Plugin

## Banner

The banner is a way for your website's users to discover the services offered by you as well as the imofix renter service platform.

> [!NOTE]  
> To use the banner, the feature has to be enabled for your imofix account first. Contact [support@imofix.io](mailto:support@imofix.io) for any questions.

### Getting started

Add this script tag anywhere in your website's HTML. It has to be added on every page where you would like to show the banner.

```html
<script
  src="https://plugin.imofix.io/banner.js"
  defer
  data-imofix-id="your-imofix-id"
  data-imofix-url="https://service.your-website.com"
  data-auto-open
  data-show-button
></script>
```

Here is an overview of all supported attributes. If you have questions about the configuration or don't know some of the information, please contact [support@imofix.io](mailto:support@imofix.io).

| Attribute                     | Description                                                                                                             |
|-------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `data-imofix-id`              | Your imofix ID.                                                                                                         |
| `data-imofix-url`             | The URL of your imofix instance.                                                                                        |
| `data-lang` (optional)        | The language to use. Falls back to your `<html>` tag's `lang` attribute or the browser's language.                      |
| `data-auto-open` (optional)   | If set, the banner will open automatically. With some privacy settings (e.g. incognito tabs), this may not always work. |
| `data-show-button` (optional) | Display a floating button that will open the banner.                                                                    |

### Configuring the floating button

In addition to the above attributes, you can add the following attributes to the script tag to customize the floating button:

| Attribute                           | Description                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| `data-button-text` (optional)       | Custom text for the button (if set, this must be translated on your side).                |
| `data-button-background` (optional) | The background color to use for the button, if shown (e.g. `#B2031F`).                    |
| `data-button-color` (optional)      | The text color to use for the button, if shown (e.g. `#FFFFFF`).                          |
| `data-button-top` (optional)        | How far from the top the banner should float (e.g. `24px` - use either top or bottom).    |
| `data-button-right` (optional)      | How far from the right the banner should float (e.g. `24px` - use either right or left).  |
| `data-button-bottom` (optional)     | How far from the bottom the banner should float (e.g. `24px` - use either top or bottom). |
| `data-button-left` (optional)       | How far from the left the banner should float (e.g. `24px` - use either right or left).   |

If you want more customization, you can use CSS custom properties—see [button.css](src/button.css) for all options. If you want even more customization, it may be best to remove `show-button` altogether and open the banner imperatively with your own button.

### Opening the banner imperatively

You can also add your own button and open the banner imperatively. After the script has been loaded, you can open the banner anytime with JavaScript:

```js
imofix.openBanner();
```

To add your own button, add the function to your element's onclick listener:

```html
<button onclick="imofix.openBanner()">Open Banner</button>
```
