import * as _73 from "./abci/types";
import * as _74 from "./blockchain/types";
import * as _75 from "./consensus/types";
import * as _76 from "./consensus/wal";
import * as _77 from "./crypto/keys";
import * as _78 from "./crypto/proof";
import * as _79 from "./libs/bits/types";
import * as _80 from "./mempool/types";
import * as _81 from "./p2p/conn";
import * as _82 from "./p2p/pex";
import * as _83 from "./p2p/types";
import * as _84 from "./privval/types";
import * as _85 from "./rpc/grpc/types";
import * as _86 from "./state/types";
import * as _87 from "./statesync/types";
import * as _88 from "./store/types";
import * as _89 from "./types/block";
import * as _90 from "./types/canonical";
import * as _91 from "./types/events";
import * as _92 from "./types/evidence";
import * as _93 from "./types/params";
import * as _94 from "./types/types";
import * as _95 from "./types/validator";
import * as _96 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._73
  };
  export const blockchain = {
    ..._74
  };
  export const consensus = {
    ..._75,
    ..._76
  };
  export const crypto = {
    ..._77,
    ..._78
  };
  export namespace libs {
    export const bits = {
      ..._79
    };
  }
  export const mempool = {
    ..._80
  };
  export const p2p = {
    ..._81,
    ..._82,
    ..._83
  };
  export const privval = {
    ..._84
  };
  export namespace rpc {
    export const grpc = {
      ..._85
    };
  }
  export const state = {
    ..._86
  };
  export const statesync = {
    ..._87
  };
  export const store = {
    ..._88
  };
  export const types = {
    ..._89,
    ..._90,
    ..._91,
    ..._92,
    ..._93,
    ..._94,
    ..._95
  };
  export const version = {
    ..._96
  };
}