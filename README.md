# Fayette County Geographic Data Layers
Sample of creating selectors and simple visualizations using FCPS data model for geographic data layers.

To view the example clone the repository:

```
git clone https://github.com/wbuchanan/fcpsGeoLayers
```

Install `browser-sync` if it is not already included on your system:

```
npm install browser-sync
```

Then use npm to serve up the project

```
cd fcpsGeoLayers
npm start
```

The current version works locally with these instructions but is failing to work on the GitHub pages branch.

# TODO
- [ ] Add zoom functionality
- [ ] Add tooltips to display geometry attributes
- [ ] Add mouseover to provide visual feedback to end users showing appropriate path element

## Additional Information
All of the data on display are currently - or planned - to be available from [Fayette County's Open Data Portal](http://data.lexingtonky.gov/).  The only data available are geographic boundaries and their associated attributes (e.g., names of the associated elected officials in the case of political boundaries, names of schools for school attendance zones, etc...).


