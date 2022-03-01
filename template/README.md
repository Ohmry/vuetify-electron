# Vuetify X Electron
## Create Vue Project
```
vue create vuetify-electron
```

## Install electron-builder
```
# select electron version 13
vue add electron-builder
```

## Add Vuetify
```
vue add vuetify

# Custom preset
# Use a pre-mad template? Yes
# Use custom theme? Yes
# Use custom properties? Yes
# Select icon font? Material Design icons (deleted after add vuetify in packaga.json and main.js)
# Use fonts as a dependency? Yes
# Use a-la-carte components? Yes
# Select locale Korean
```

## Install Noto Sans kr
```
npm install noto-sans-kr
```
### insert `import 'noto-sans-kr/styles.css'` in main.js
```
# in main.js
import 'noto-sans-kr/styles.css'
```
### create new file in src/styles/variables.sass
### override family font
```
# in src/styles/variables.sass
$body-font-family: 'Noto Sans Korean', 'Roboto', sans-serif
$title-font: 'Noto Sans Korean', 'Roboto', sans-serif
```

## Install material-design-icons-iconfont
```
# install
npm install material-design-icons-iconfont --save-dev

# import in src/plugins/vuetify.js
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

# configure icon font in src/plugins/vuetify.js
icons: {
  iconfont: 'md' || 'mdi'
}
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
