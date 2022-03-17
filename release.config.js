//semantic-release export config object
module.exports = {
  branches: [
    'main',
    'develop',
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING CHANGES:', 'BREAKING CHANGES: '],
      },
      preset: 'angular',
      releaseRules: [
        { type: 'build', release: 'patch' },
        { type: 'chore', release: 'patch' },
        { type: 'ci', release: 'patch' },
        { type: 'docs', release: 'patch' },
        { type: 'hotfix', release: 'minor' },
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'style', release: 'patch' },
        { type: 'test', release: 'patch' },
      ],
    },
    ],
    ['@semantic-release/release-notes-generator', {
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING CHANGES:', 'BREAKING CHANGES: '],
      },
      preset: 'conventionalcommits',
      presetConfig: {
        types: [
          { type: 'build', section: 'Build System', hidden: false },
          { type: 'chore', section: 'Build System', hidden: false },
          { type: 'ci', section: 'Continuous Integration', hidden: false },
          { type: 'docs', section: 'Documentation', hidden: false },
          { type: 'feat', section: 'Features', hidden: false },
          { type: 'fix', section: 'Bug Fixes', hidden: false },
          { type: 'hotfix', section: 'Hotfixes', hidden: false },
          { type: 'perf', section: 'Performance Improvements', hidden: false },
          { type: 'refactor', section: 'Code Refactoring', hidden: false },
          { type: 'style', section: 'Styles', hidden: false },
          { type: 'test', section: 'Tests', hidden: false },
        ],
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      }
    }],
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
      changelogTitle: '# Changelog',
    }],
    '@semantic-release/github',
    ['@semantic-release/git', {
      assets: [
        'CHANGELOG.md',
        'package.json',
      ],
    }]
  ],
}