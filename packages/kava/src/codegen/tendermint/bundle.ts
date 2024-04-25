import * as _194 from "./abci/types";
import * as _195 from "./crypto/keys";
import * as _196 from "./crypto/proof";
import * as _197 from "./libs/bits/types";
import * as _198 from "./p2p/types";
import * as _199 from "./types/block";
import * as _200 from "./types/evidence";
import * as _201 from "./types/params";
import * as _202 from "./types/types";
import * as _203 from "./types/validator";
import * as _204 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._194
  };
  export const crypto = {
    ..._195,
    ..._196
  };
  export namespace libs {
    export const bits = {
      ..._197
    };
  }
  export const p2p = {
    ..._198
  };
  export const types = {
    ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203
  };
  export const version = {
    ..._204
  };
}