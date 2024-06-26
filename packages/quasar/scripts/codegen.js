import { join } from 'path';
import telescope from '@cosmology/telescope';
import { rimrafSync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../quasar/proto'), join(__dirname, '/../cosmos-sdk/proto'), join(__dirname, '/../quasar/third_party/proto'), join(__dirname, '/../wasmd/proto'), join(__dirname, '/../proto')];
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
