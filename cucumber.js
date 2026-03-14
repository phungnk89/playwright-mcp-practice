module.exports = {
  default: {
    requireModule: ['tsx'],
    require: ['features/support/**/*.ts', 'features/step-definitions/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: [
      './features/support/scenario-progress-formatter.ts',
      'html:cucumber-report.html',
    ],
    parallel: 10,
  },
};
