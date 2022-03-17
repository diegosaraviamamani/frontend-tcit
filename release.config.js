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
        ]
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
      },
    ],
    [
      '@semantic-release/github',
      {
        "assets": [
          "CHANGELOG.md",
          "package.json"
        ]
      }
    ],
  ],
}