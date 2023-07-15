import * as _208 from "./abci/types";
import * as _209 from "./crypto/keys";
import * as _210 from "./crypto/proof";
import * as _211 from "./libs/bits/types";
import * as _212 from "./p2p/types";
import * as _213 from "./types/block";
import * as _214 from "./types/evidence";
import * as _215 from "./types/params";
import * as _216 from "./types/types";
import * as _217 from "./types/validator";
import * as _218 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._208
  };
  export const crypto = {
    ..._209,
    ..._210
  };
  export namespace libs {
    export const bits = {
      ..._211
    };
  }
  export const p2p = {
    ..._212
  };
  export const types = {
    ..._213,
    ..._214,
    ..._215,
    ..._216,
    ..._217
  };
  export const version = {
    ..._218
  };
}