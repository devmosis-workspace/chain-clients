import * as _124 from "./abci/types";
import * as _125 from "./crypto/keys";
import * as _126 from "./crypto/proof";
import * as _127 from "./libs/bits/types";
import * as _128 from "./p2p/types";
import * as _129 from "./types/block";
import * as _130 from "./types/evidence";
import * as _131 from "./types/params";
import * as _132 from "./types/types";
import * as _133 from "./types/validator";
import * as _134 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._124
  };
  export const crypto = {
    ..._125,
    ..._126
  };
  export namespace libs {
    export const bits = {
      ..._127
    };
  }
  export const p2p = {
    ..._128
  };
  export const types = {
    ..._129,
    ..._130,
    ..._131,
    ..._132,
    ..._133
  };
  export const version = {
    ..._134
  };
}