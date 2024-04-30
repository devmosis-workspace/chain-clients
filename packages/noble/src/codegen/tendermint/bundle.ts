import * as _23 from "./abci/types";
import * as _24 from "./blockchain/types";
import * as _25 from "./consensus/types";
import * as _26 from "./consensus/wal";
import * as _27 from "./crypto/keys";
import * as _28 from "./crypto/proof";
import * as _29 from "./libs/bits/types";
import * as _30 from "./mempool/types";
import * as _31 from "./p2p/conn";
import * as _32 from "./p2p/pex";
import * as _33 from "./p2p/types";
import * as _34 from "./privval/types";
import * as _35 from "./rpc/grpc/types";
import * as _36 from "./state/types";
import * as _37 from "./statesync/types";
import * as _38 from "./store/types";
import * as _39 from "./types/block";
import * as _40 from "./types/canonical";
import * as _41 from "./types/events";
import * as _42 from "./types/evidence";
import * as _43 from "./types/params";
import * as _44 from "./types/types";
import * as _45 from "./types/validator";
import * as _46 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._23
  };
  export const blockchain = {
    ..._24
  };
  export const consensus = {
    ..._25,
    ..._26
  };
  export const crypto = {
    ..._27,
    ..._28
  };
  export namespace libs {
    export const bits = {
      ..._29
    };
  }
  export const mempool = {
    ..._30
  };
  export const p2p = {
    ..._31,
    ..._32,
    ..._33
  };
  export const privval = {
    ..._34
  };
  export namespace rpc {
    export const grpc = {
      ..._35
    };
  }
  export const state = {
    ..._36
  };
  export const statesync = {
    ..._37
  };
  export const store = {
    ..._38
  };
  export const types = {
    ..._39,
    ..._40,
    ..._41,
    ..._42,
    ..._43,
    ..._44,
    ..._45
  };
  export const version = {
    ..._46
  };
}