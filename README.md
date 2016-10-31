# angularis
Group of cool angular directives.

## Requirements
- jquery
- angularjs

## Installation
```
npm install angularis
```

or

```
bower install angularis
```

Then include `dist/angularis.min.css` and `dist/angularis.min.js` files, and inject angularis.

```
  app.module('yourModule', ['angularis']);
```

## Usage

### overlay
Simple complete overlay
```html
<overlay show-overlay='ctrl.showOverlay' overlay-style='"vertical"'>
  Here is the overlay content
</overlay>
<div id='overlayed-item' overlayed='ctrl.showOverlay'>
  Here is the overlayed content
</div>

```

On overlay, simply bind a variable to show-overlay that when true shows overlay, and false hides it. An optional
attribute overlay-style can be used to say whether you want vertical or horizontal overlay (default vertical).
Optionally you can bind the show-overlay variable to another div's overlayed directive, say the overlayed content.
This will fade out the overlayed content on overlay show.
### widget
Simple carousel like action for divs.

```html
<widget active-page="ctrl.activePageVariable">
  <widget-page>
    <p>I am page 1</p>
    <a ng-click='ctrl.activePageVariable = 1'>Click here to go to page 2</a>
  </widget-page>
  <widget-page>
    <p>I am page 2</p>
    <a ng-click='ctrl.activePageVariable = 0'>Click here to go to page 1 again</a>
    <a ng-click='ctrl.activePageVariable = 2'>Click here to go to page 3</a>
  </widget-page>
  <widget-page>
    <p>I am page 3</p>
    <a ng-click='ctrl.activePageVariable = 1'>Click here to go to page 2 again</a>
  </widget-page>
</widget>
```

Only attribute to bind is the activePage - the currently active widget page. Then to switch
the active page, simply switch the variable to the number of the page you want (0 index) like
above.

## Contributing
1. Fork off master,
2. Create directive in directives.
3. Create template in templates.
4. Create css in styles.
5. Require directive in index.js
6. Import css styles/index.less
7. Change package.json version
8. Run grunt build
9. Create pull-request

