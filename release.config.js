//semantic-release export config object
module.exports = {
  branches: [
    'main',
    'develop',
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            type: 'docs',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'style',
            release: 'patch',
          },
          {
            type: 'chore',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'perf',
            release: 'patch',
          },
          {
            type: 'test',
            release: 'patch',
          },
          {
            type: 'build',
            release: 'patch',
          },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING CHANGES:', 'BREAKING CHANGES: '],
        }
      },
    ],
    ['@semantic-release/release-notes-generator', {
      preset: 'angular',
      releaseRules: [
        {
          type: 'docs',
          release: 'patch',
        },
        {
          type: 'refactor',
          release: 'patch',
        },
        {
          type: 'style',
          release: 'patch',
        },
        {
          type: 'chore',
          release: 'patch',
        },
        {
          type: 'ci',
          release: 'patch',
        },
        {
          type: 'perf',
          release: 'patch',
        },
        {
          type: 'test',
          release: 'patch',
        },
        {
          type: 'build',
          release: 'patch',
        },
      ],
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING CHANGES:', 'BREAKING CHANGES: '],
      }
    }],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
          'package.json',
        ],
      },
    ]
  ],
}