import * as _178 from "./abci/types";
import * as _179 from "./crypto/keys";
import * as _180 from "./crypto/proof";
import * as _181 from "./libs/bits/types";
import * as _182 from "./p2p/types";
import * as _183 from "./types/block";
import * as _184 from "./types/evidence";
import * as _185 from "./types/params";
import * as _186 from "./types/types";
import * as _187 from "./types/validator";
import * as _188 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._178
  };
  export const crypto = {
    ..._179,
    ..._180
  };
  export namespace libs {
    export const bits = {
      ..._181
    };
  }
  export const p2p = {
    ..._182
  };
  export const types = {
    ..._183,
    ..._184,
    ..._185,
    ..._186,
    ..._187
  };
  export const version = {
    ..._188
  };
}