const { join } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;

// const protoDirs = [join(__dirname, '/../cosmos-sdk/proto'), join(__dirname, '/../celestia-app/proto'), join(__dirname, '/../cosmos-proto/proto'), join(__dirname, '/../proto'), join(__dirname, '/../celestia-core/proto'), join(__dirname, '/../celestia-core/third_party/proto')];
const protoDirs = [join(__dirname, '/../cosmos-sdk/proto'), join(__dirname, '/../celestia-app/proto'), join(__dirname, '/../cosmos-proto/proto'), join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
        duration: 'duration'
      },
      methods: {
        encode: true,
        decode: false,
        fromJSON: true,
        fromPartial: true,
      }
    },
    aminoEncoding: {
      enabled: true
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
