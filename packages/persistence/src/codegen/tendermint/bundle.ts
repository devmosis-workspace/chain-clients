import * as _120 from "./abci/types";
import * as _121 from "./crypto/keys";
import * as _122 from "./crypto/proof";
import * as _123 from "./libs/bits/types";
import * as _124 from "./p2p/types";
import * as _125 from "./types/block";
import * as _126 from "./types/evidence";
import * as _127 from "./types/params";
import * as _128 from "./types/types";
import * as _129 from "./types/validator";
import * as _130 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._120
  };
  export const crypto = {
    ..._121,
    ..._122
  };
  export namespace libs {
    export const bits = {
      ..._123
    };
  }
  export const p2p = {
    ..._124
  };
  export const types = {
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129
  };
  export const version = {
    ..._130
  };
}