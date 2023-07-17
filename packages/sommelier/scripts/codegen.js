import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { rimrafSync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../sommelier/proto'), join(__dirname, '/../cosmos-sdk/proto'), join(__dirname, '/../tendermint/proto'), join(__dirname, '/../sommelier/third_party/proto')];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    experimentalGlobalProtoNamespace: true,
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
      enabled: false
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
