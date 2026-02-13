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

export function getLayoutOptions(layoutType: 'dagre' | 'cola') {
  return layoutType === 'dagre' ? { ...dagreOptions } : { ...colaOptions };
}

// Default export for backward compatibility
export default colaOptions;
