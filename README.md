Accoutrement-Color
==================

Sass color [Accoutrement][accoutrement]
by [OddBird][oddbird].
Gather all your colors into a single map,
access them by name,
and check for [WCAG-appropriate][wcag] contrast.

[accoutrement]: http://oddbird.net/accoutrement/
[oddbird]: http://oddbird.net/
[wcag]: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef


Quick Start
-----------

```bash
npm install accoutrement-color
```

Import the library:

```scss
@import 'path/to/accoutrement-color/sass/color';
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
  color: color('brand-pink' ('saturate': -15%));
}
```

You can also define your colors in smaller maps,
and then add them to the global `$colors` variable
using the `merge-color()` function,
or `add-colors()` mixin.

```scss
$brand: (
  'brand-pink': hsl(330, 85%, 62%),
  'brand-light': #ddf,
  'brand-dark': #224,
);

$patterns: (
  'background': 'brand-light',
  'border': 'brand-dark',
  'link': 'brand-pink' ('shade': 25%),
);

// use the function to return a single map:
$colors: merge-colors($brand, $patterns);

// or use the mixin to add everything to $colors automatically:
@include add-colors($brand, $patterns);
```

We'll even help you calculate WCAG-appropriate color contrasts
(this feature requires a `pow()` function
like the one available in [MathSass][mathsass].

```scss
a:hover {
  // set a background, and get well-contrasted text
  @include contrasted('link');
}
```

[mathsass]: https://github.com/terkel/mathsass
