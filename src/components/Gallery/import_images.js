// Context module API exports (require) function, takes one argument (request) with exported function having 3 properties: resolve (function and returns the module id of the parsed request), keys (function that returns an array of all possible requests that the context module can handle), id (module id of the context module)
// https://webpack.js.org/guides/dependency-management/
function importAll(r) {
  return r.keys().map(r);
}

// require.context(), passing in directory to search, flag indicating whether subdirectories should be searched too and regular expression to match files against
export const imagesAnniv = importAll(require.context("./images_anniv", false, /\.(png|jpe?g|svg)$/));
export const imagesCouple = importAll(require.context("./images_couple", false, /\.(png|jpe?g|svg)$/));
export const imagesMemories = importAll(require.context("./images_memories", false, /\.(png|jpe?g|svg)$/));
