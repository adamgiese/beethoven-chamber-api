# Installation

1. Create a [Webtask](https://webtask.io/) account and login.
1. [Install and initialize](https://webtask.io/cli) the Webtask CLI.
1. Clone the repository with `git clone https://github.com/adamgiese/beethoven-chamber-api`.
1. Enter the directory and deploy the project with `wt create index.js --watch --bundle`.
1. To run tests, run `yarn test`.

# API Documentation

## URL:

`/works`

## Query Params:

`key` is a string. Should be between letters `A` and `G`, and maybe include a `s` or `b` modifier for sharp or flat respectively; for example, `Eb`, `Fs`.

`genre` is a string. Should be a 'sluggified' genre; for example, `piano-trio`.

`mode` is a string. Should be `major` or `minor`.

`opus` is an integer.

`instruments` is a string. Should be a comma separated list of instruments. For example, `flute`, `piano,violin`, or `oboe,bassoon`.


## Success:

__Code:__ 200
__Sample Content:__
```
[
  {
    title: "Piano Trio #1",
    key: "Eb",
    mode: "Major",
    genre: "Piano Trio",
    opus: 1,
    instrumentation: [
      "Violin",
      "Cello",
      "Piano"
    ]
  }
]
```
