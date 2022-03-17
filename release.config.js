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
        preset: 'conventionalcommits',
        rules: {
          type: 'hotfix',
          release: 'patch',
        }
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog',
        changelogGeneratorOpts: {
          preset: 'conventionalcommits',
        },
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