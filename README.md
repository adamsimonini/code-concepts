# Coding Challenges and Concepts

## What

This repo is place for me to test concepts I am learning through courses and online coding challenges. Key concepts are data structures, algorithms, common design patterns, sorting, and big O notation. It is also a place to test out new languages. For example, TypeScript and its Types and Interfaces.

## Why

I need a better grasp of these concepts to remain competitive in coding interviews.

## A note on running TypeScript with Node

This repo uses Node.js to transpile TS into JS

Specifically, the typescript package is listed as a dependency, and a tsconfig.json file exists on the root directory. You have a few choices for running TS directly from Node.

1. you may use the following command to have the TypeScript package watch the root folder for changes, and propogate them to the transpiled JS in the dist folder.

```
tsc -w
```

2. you need not run the JS in the dist folder, however. Simply globally install typescript and ts-node to your instance of Node.js, like so:

```
// TS and TS-Node Global install commands:
npm install -g typescript
npm install -g ts-node
```

Next, change directory to where the ts files of interest are, and run the following:

```
ts-node {filename}.ts
```
