export const colaOptions = {
  name: 'cola',
  animate: true,
  refresh: 1,
  maxSimulationTime: 3000,
  ungrabifyWhileSimulating: false,
  fit: true,
  padding: 90,
  boundingBox: undefined as undefined,
  nodeDimensionsIncludeLabels: false,

  ready: function () {},
  stop: function () {},

  randomize: false,
  avoidOverlap: true,
  handleDisconnected: true,
  convergenceThreshold: 0.01,
  nodeSpacing: function (node: any) {
    return 50;
  },
  flow: undefined as undefined,
  alignment: undefined as undefined,
  gapInequalities: undefined as undefined,

  edgeLength: undefined as undefined,
  edgeSymDiffLength: undefined as undefined,
  edgeJaccardLength: undefined as undefined,

  unconstrIter: 50,
  userConstIter: undefined as undefined,
  allConstIter: undefined as undefined,

  infinite: false,
};

export const dagreOptions = {
  name: 'dagre',
  rankDir: 'TB',
  nodeSep: 30,
  rankSep: 60,
  edgeSep: 20,
  padding: 30,
  fit: true,
  animate: true,
  animationDuration: 500,
  ready: function () {},
  stop: function () {},
};

export const breadthfirstOptions = {
  name: 'breadthfirst',
  fit: true,
  directed: true,
  padding: 30,
  circle: false,
  grid: false,
  spacingFactor: 1.25,
  avoidOverlap: true,
  nodeDimensionsIncludeLabels: false,
  animate: true,
  animationDuration: 500,
  ready: function () {},
  stop: function () {},
};

export const concentricOptions = {
  name: 'concentric',
  fit: true,
  padding: 30,
  startAngle: (3 / 2) * Math.PI,
  sweep: undefined as undefined,
  clockwise: true,
  equidistant: false,
  minNodeSpacing: 40,
  avoidOverlap: true,
  nodeDimensionsIncludeLabels: false,
  // Place nodes with more connections closer to center
  concentric: function (node: any) {
    return node.degree();
  },
  levelWidth: function (nodes: any) {
    return Math.max(1, Math.floor(nodes.maxDegree() / 4));
  },
  animate: true,
  animationDuration: 500,
  ready: function () {},
  stop: function () {},
};

export const circleOptions = {
  name: 'circle',
  fit: true,
  padding: 30,
  avoidOverlap: true,
  nodeDimensionsIncludeLabels: false,
  spacingFactor: undefined as undefined,
  radius: undefined as undefined,
  startAngle: (3 / 2) * Math.PI,
  sweep: undefined as undefined,
  clockwise: true,
  sort: undefined as undefined,
  animate: true,
  animationDuration: 500,
  ready: function () {},
  stop: function () {},
};

export const gridOptions = {
  name: 'grid',
  fit: true,
  padding: 30,
  avoidOverlap: true,
  avoidOverlapPadding: 10,
  nodeDimensionsIncludeLabels: false,
  spacingFactor: undefined as undefined,
  condense: false,
  rows: undefined as undefined,
  cols: undefined as undefined,
  sort: undefined as undefined,
  animate: true,
  animationDuration: 500,
  ready: function () {},
  stop: function () {},
};

const layoutMap: { [key: string]: any } = {
  dagre: dagreOptions,
  cola: colaOptions,
  breadthfirst: breadthfirstOptions,
  concentric: concentricOptions,
  circle: circleOptions,
  grid: gridOptions,
};

export function getLayoutOptions(layoutType: string) {
  const options = layoutMap[layoutType];
  return options ? { ...options } : { ...dagreOptions };
}

// Default export for backward compatibility
export default colaOptions;
