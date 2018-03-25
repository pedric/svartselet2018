module.exports = {
  html        : false,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    }
  },

  browserSync: {
    proxy: {
      target: "https://svartselet2018.dev/"
    },
    files: ["../templates"]
    // server: {
    //   // should match `dest` in
    //   // path-config.json
    //   baseDir: 'public'
    // }
  },

  production: {
    rev: true
  }
}
