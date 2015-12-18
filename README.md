Accoutrement-Color
==================

Sass color management tools.
Gather all your colors into a single map,
access them by name,
and check for [WCAG-appropriate][wcag] contrast.

[wcag]: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef


Quick Start
-----------

```bash
npm install accoutrement-color
```

Establish your color palette:

```scss
$colors: (
  // set explicit colors
  'brand-pink': hsl(330, 85%, 62%),
  'brand-light': #ddf,
  'brand-dark': #224,

  // reference existing colors
  'background': 'brand-light',
  'border': 'brand-dark',

  // make adjustments as needed
  'link': 'brand-pink' ('shade': 25%),
);
```

Access your colors from anywhere:

```scss
.example {
  // call any color
  border-color: color('border');

  // adjust on the fly
  text: color('brand-pink' ('saturate': -15%));
}

a:hover {
  // set a background, and get well-contrasted text
  @include contrasted('link');
}
```


About OddBird Accoutrement
--------------------------

[OddBird][oddbird]'s *Accourement* modules
are individual Sass toolkits
that work together to form
the central nervous system of a project.
They help to establish and access a projects configuration
in consistent and inter-connected ways.

[oddbird]: http://oddbird.net/
