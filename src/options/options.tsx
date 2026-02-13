import { PanelOptionsEditorBuilder } from '@grafana/data';
import { PanelSettings } from '../types';
import { TypeaheadTextField } from './TypeAheadTextfield/TypeaheadTextfield';
import { IconMapping } from './iconMapping/IconMapping';
import { DummyDataSwitch } from './dummyDataSwitch/DummyDataSwitch';
import { DefaultSettings } from './DefaultSettings';

export const optionsBuilder = (builder: PanelOptionsEditorBuilder<PanelSettings>) => {
  return (
    builder

      //Connection Mapping
      .addCustomEditor({
        path: 'dataMapping.aggregationType',
        id: 'aggregationType',
        editor: TypeaheadTextField,
        name: 'Component Column',
        category: ['Connection Mapping'],
        defaultValue: DefaultSettings.dataMapping.aggregationType,
      })

      .addCustomEditor({
        path: 'dataMapping.sourceColumn',
        id: 'sourceComponentPrefix',
        editor: TypeaheadTextField,
        name: 'Source Component Column',
        category: ['Connection Mapping'],
        defaultValue: DefaultSettings.dataMapping.sourceColumn,
      })

      .addCustomEditor({
        path: 'dataMapping.targetColumn',
        id: 'targetComponentPrefix',
        name: 'Target Component Column',
        category: ['Connection Mapping'],
        editor: TypeaheadTextField,
        defaultValue: DefaultSettings.dataMapping.targetColumn,
      })

      .addCustomEditor({
        path: 'dataMapping.namespaceColumn',
        id: 'namespaceColumn',
        name: 'Namespace Column',
        category: ['Connection Mapping'],
        editor: TypeaheadTextField,
        defaultValue: DefaultSettings.dataMapping.namespaceColumn,
      })

      .addCustomEditor({
        path: 'dataMapping.namespaceDelimiter',
        id: 'nameSpaceDelimiter',
        name: 'Namespace Delimiter',
        category: ['Connection Mapping'],
        editor: TypeaheadTextField,
        defaultValue: DefaultSettings.dataMapping.namespaceDelimiter,
      })

      .addCustomEditor({
        path: 'dataMapping.type',
        id: 'type',
        name: 'Type',
        category: ['Connection Mapping'],
        editor: TypeaheadTextField,
        defaultValue: DefaultSettings.dataMapping.type,
      })

      .addCustomEditor({
        path: 'dataMapping.extOrigin',
        id: 'externalOrigin',
        name: 'External Origin',
        category: ['Connection Mapping'],
        editor: TypeaheadTextField,
        defaultValue: DefaultSettings.dataMapping.extOrigin,
      })

      .addCustomEditor({
        path: 'dataMapping.extTarget',
        id: 'externalTarget',
        name: 'External Target',
        category: ['Connection Mapping'],
        editor: TypeaheadTextField,
        defaultValue: DefaultSettings.dataMapping.extTarget,
      })

      //Data Mapping
      .addCustomEditor({
        id: 'responseTime',
        path: 'dataMapping.responseTimeColumn',
        name: 'Response Time Column',
        editor: TypeaheadTextField,
        category: ['Data Mapping'],
        defaultValue: DefaultSettings.dataMapping.responseTimeColumn,
      })

      .addCustomEditor({
        id: 'requestRateColumn',
        path: 'dataMapping.requestRateColumn',
        name: 'Request Rate Column',
        editor: TypeaheadTextField,
        category: ['Data Mapping'],
        defaultValue: DefaultSettings.dataMapping.requestRateColumn,
      })

      .addCustomEditor({
        id: 'errorRateColumn',
        path: 'dataMapping.errorRateColumn',
        name: 'Error Rate Column',
        editor: TypeaheadTextField,
        category: ['Data Mapping'],
        defaultValue: DefaultSettings.dataMapping.errorRateColumn,
      })

      .addCustomEditor({
        id: 'responseTimeOutgoingColumn',
        path: 'dataMapping.responseTimeOutgoingColumn',
        name: 'Response Time Column (Outgoing)',
        editor: TypeaheadTextField,
        category: ['Data Mapping'],
        defaultValue: DefaultSettings.dataMapping.responseTimeOutgoingColumn,
      })

      .addCustomEditor({
        id: 'requestRateOutgoingColumn',
        path: 'dataMapping.requestRateOutgoingColumn',
        name: 'Request Rate Column (Outgoing)',
        editor: TypeaheadTextField,
        category: ['Data Mapping'],
        defaultValue: DefaultSettings.dataMapping.requestRateOutgoingColumn,
      })

      .addCustomEditor({
        id: 'errorRateOutgoingColumn',
        path: 'dataMapping.errorRateOutgoingColumn',
        name: 'Error Rate Column (Outgoing)',
        editor: TypeaheadTextField,
        category: ['Data Mapping'],
        defaultValue: DefaultSettings.dataMapping.errorRateOutgoingColumn,
      })

      .addCustomEditor({
        id: 'baselineRtUpper',
        path: 'dataMapping.baselineRtUpper',
        name: 'Response Time Baseline (Upper)',
        editor: TypeaheadTextField,
        category: ['Data Mapping'],
        defaultValue: DefaultSettings.dataMapping.baselineRtUpper,
      })

      //General Settings
      .addBooleanSwitch({
        path: 'showConnectionStats',
        name: 'Show Connection Statistics',
        category: ['General Settings'],
        defaultValue: DefaultSettings.showConnectionStats,
      })

      .addBooleanSwitch({
        path: 'sumTimings',
        name: 'Handle Timings as Sums',
        description:
          'If this setting is active, the timings provided' +
          'by the mapped response time columns are considered as a ' +
          'continually increasing sum of response times. When ' +
          'deactivated, it is considered that the timings provided ' +
          'by columns are the actual average response times.',
        category: ['General Settings'],
        defaultValue: DefaultSettings.sumTimings,
      })

      .addBooleanSwitch({
        path: 'filterEmptyConnections',
        name: 'Filter Empty Data',
        description:
          'If this setting is active, the timings provided by ' +
          'the mapped response time columns are considered as a continually ' +
          'increasing sum of response times. When deactivated, it is considered ' +
          'that the timings provided by columns are the actual average response times.',
        category: ['General Settings'],
        defaultValue: DefaultSettings.filterEmptyConnections,
      })

      .addBooleanSwitch({
        path: 'showDebugInformation',
        name: 'Show Debug Information',
        category: ['General Settings'],
        defaultValue: DefaultSettings.showDebugInformation,
      })

      .addCustomEditor({
        path: 'dataMapping',
        id: 'dummyDataSwitch',
        name: 'Show Dummy Data',
        editor: DummyDataSwitch,
        category: ['General Settings'],
        defaultValue: DefaultSettings.dataMapping,
      })

      .addBooleanSwitch({
        path: 'showBaselines',
        name: 'Show Baselines',
        category: ['General Settings'],
        defaultValue: DefaultSettings.showBaselines,
      })

      .addSelect({
        path: 'timeFormat',
        name: 'Maximum Time Unit to Resolve',
        description:
          'This setting controls to which time unit time values will be resolved to. ' +
          'Each value always includes the smaller units.',
        category: ['General Settings'],
        settings: {
          options: [
            { value: 'ms', label: 'ms' },
            { value: 's', label: 's' },
            { value: 'm', label: 'm' },
          ],
        },
        defaultValue: DefaultSettings.timeFormat,
      })

      //Appearance
      .addColorPicker({
        path: 'style.healthyColor',
        name: 'Healthy Color',
        category: ['Appearance'],
        defaultValue: DefaultSettings.style.healthyColor,
      })

      .addColorPicker({
        path: 'style.dangerColor',
        name: 'Danger Color',
        category: ['Appearance'],
        defaultValue: DefaultSettings.style.dangerColor,
      })

      .addColorPicker({
        path: 'style.noDataColor',
        name: 'No Data Color',
        category: ['Appearance'],
        defaultValue: DefaultSettings.style.noDataColor,
      })

      //Icon Mapping
      .addCustomEditor({
        path: 'icons',
        id: 'iconMapping',
        editor: IconMapping,
        name: '',
        description:
          'This setting controls which images should be mapped to your directly monitored nodes. ' +
          'The node names are matched by the regex pattern provided in the "Target Name(Regex) column.',
        category: ['Icon Mapping'],
        defaultValue: DefaultSettings.icons,
      })

      //External Icon Mapping
      .addCustomEditor({
        path: 'externalIcons',
        id: 'externalIconMapping',
        editor: IconMapping,
        name: '',
        description:
          'This setting controls which images should be mapped to the external nodes. ' +
          'The given type column is matched by the regex pattern provided in the "Target Name(Regex) column.',
        category: ['External Icon Mapping'],
        defaultValue: DefaultSettings.externalIcons,
      })

      //Layout
      .addSelect({
        path: 'layoutType',
        name: 'Layout Algorithm',
        description:
          'Dagre produces compact hierarchical layouts ideal for dependency graphs. ' +
          'Cola uses a force-directed physics simulation.',
        category: ['Layout'],
        settings: {
          options: [
            { value: 'dagre', label: 'Dagre (Hierarchical)' },
            { value: 'cola', label: 'Cola (Force-Directed)' },
          ],
        },
        defaultValue: DefaultSettings.layoutType,
      })

      //Particle Animation
      .addNumberInput({
        path: 'particleMaxCount',
        name: 'Max Particle Count',
        description: 'Maximum number of particles rendered at once. Lower values improve performance.',
        category: ['Particle Animation'],
        settings: {
          min: 0,
          max: 5000,
          integer: true,
        },
        defaultValue: DefaultSettings.particleMaxCount,
      })

      .addSliderInput({
        path: 'particleDensity',
        name: 'Particle Density',
        description: 'Controls particle spawn rate. 0 = no particles, 1 = maximum density.',
        category: ['Particle Animation'],
        settings: {
          min: 0,
          max: 1,
          step: 0.05,
        },
        defaultValue: DefaultSettings.particleDensity,
      })

      //TV Mode
      .addBooleanSwitch({
        path: 'tvMode',
        name: 'Enable TV Mode',
        description: 'Optimized for OPS TV screens: larger nodes, bigger fonts, always-visible labels.',
        category: ['TV Mode'],
        defaultValue: DefaultSettings.tvMode,
      })

      .addNumberInput({
        path: 'tvFontSize',
        name: 'TV Font Size (px)',
        description: 'Font size used in TV mode for labels and statistics.',
        category: ['TV Mode'],
        settings: {
          min: 6,
          max: 24,
          integer: true,
        },
        defaultValue: DefaultSettings.tvFontSize,
      })

      .addNumberInput({
        path: 'tvNodeRadius',
        name: 'TV Node Radius (px)',
        description: 'Node donut radius in TV mode.',
        category: ['TV Mode'],
        settings: {
          min: 15,
          max: 60,
          integer: true,
        },
        defaultValue: DefaultSettings.tvNodeRadius,
      })

      .addSliderInput({
        path: 'minZoomForLabels',
        name: 'Min Zoom for Labels',
        description: 'Labels and statistics are hidden below this zoom level. Set to 0 to always show.',
        category: ['TV Mode'],
        settings: {
          min: 0,
          max: 2,
          step: 0.1,
        },
        defaultValue: DefaultSettings.minZoomForLabels,
      })

      //Tracing Drilldown
      .addTextInput({
        path: 'drillDownLink',
        name: 'Backend URL',
        category: ['Tracing Drilldown'],
        defaultValue: DefaultSettings.drillDownLink,
      })
  );
};
