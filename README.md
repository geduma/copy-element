<h1 align="center">Copy to clipboard - Custom Html Element</h1>

<p align="center">
  <a href="https://github.com/geduramc/copy-element/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/geduramc/copy-element?color=0088ff" />
  </a>
  <a href="https://github.com/geduramc/copy-element/pulls">
    <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/geduramc/copy-element?color=0088ff" />
  </a>
</p>

<p align="center">
  <a href="https://copy.geduramc.com">🔗 Demo</a>
</p>

## Installation

Package install
```shell
npm i @geduramc/copy-clipboard-element
```

CDN
```html
<script type="module" src="https://unpkg.com/@geduramc/copy-clipboard-element@1.0.5/lib/copy-element"></script>
```

## Usage

```html
<copy-clipboard icon-theme="dark" tooltip-position="right"></copy-clipboard>
```
```js
import { copy } from '@geduramc/copy-clipboard-element'

copy('Lorem Ipsum')
```

## Attributes

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon-theme</td>
      <td>'light' | 'dark'</td>
      <td>'light'</td>
    </tr>
    <tr>
      <td>tooltip-position</td>
      <td>'top' | 'right' | 'bottom' | 'left'</td>
      <td>'right'</td>
    </tr>
    <tr>
      <td>tooltip-text</td>
      <td> string </td>
      <td>'copied!'</td>
    </tr>
  </tbody>
</table>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'feat: add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

<br>
<br>

<p align="center">
  <a href="https://geduramc.com">By @geduramc</a>
</p>