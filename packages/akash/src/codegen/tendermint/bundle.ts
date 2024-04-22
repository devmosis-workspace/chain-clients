import * as _70 from "./abci/types";
import * as _71 from "./blockchain/types";
import * as _72 from "./consensus/types";
import * as _73 from "./consensus/wal";
import * as _74 from "./crypto/keys";
import * as _75 from "./crypto/proof";
import * as _76 from "./libs/bits/types";
import * as _77 from "./mempool/types";
import * as _78 from "./p2p/conn";
import * as _79 from "./p2p/pex";
import * as _80 from "./p2p/types";
import * as _81 from "./privval/types";
import * as _82 from "./rpc/grpc/types";
import * as _83 from "./state/types";
import * as _84 from "./statesync/types";
import * as _85 from "./store/types";
import * as _86 from "./types/block";
import * as _87 from "./types/canonical";
import * as _88 from "./types/events";
import * as _89 from "./types/evidence";
import * as _90 from "./types/params";
import * as _91 from "./types/types";
import * as _92 from "./types/validator";
import * as _93 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._70
  };
  export const blockchain = {
    ..._71
  };
  export const consensus = {
    ..._72,
    ..._73
  };
  export const crypto = {
    ..._74,
    ..._75
  };
  export namespace libs {
    export const bits = {
      ..._76
    };
  }
  export const mempool = {
    ..._77
  };
  export const p2p = {
    ..._78,
    ..._79,
    ..._80
  };
  export const privval = {
    ..._81
  };
  export namespace rpc {
    export const grpc = {
      ..._82
    };
  }
  export const state = {
    ..._83
  };
  export const statesync = {
    ..._84
  };
  export const store = {
    ..._85
  };
  export const types = {
    ..._86,
    ..._87,
    ..._88,
    ..._89,
    ..._90,
    ..._91,
    ..._92
  };
  export const version = {
    ..._93
  };
}