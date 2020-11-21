module.exports = {
  "mount": {
    "public": "/",
    "src": "/_dist_"
  },
  "plugins": [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    [
      "snowpack-plugin-relative-css-urls"
    ]
  ],
  "install": [],
  "installOptions": {},
  "devOptions": {
    "port": 8080
  },
  "buildOptions": {},
  "proxy": {},
  "alias": {
    "src": "./src"
  }
}