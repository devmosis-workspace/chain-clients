import * as _15 from "./claims/v1/claims";
import * as _16 from "./claims/v1/genesis";
import * as _17 from "./claims/v1/query";
import * as _18 from "./claims/v1/tx";
import * as _19 from "./epochs/v1/genesis";
import * as _20 from "./epochs/v1/query";
import * as _21 from "./erc20/v1/erc20";
import * as _22 from "./erc20/v1/events";
import * as _23 from "./erc20/v1/genesis";
import * as _24 from "./erc20/v1/query";
import * as _25 from "./erc20/v1/tx";
import * as _26 from "./incentives/v1/genesis";
import * as _27 from "./incentives/v1/incentives";
import * as _28 from "./incentives/v1/query";
import * as _29 from "./incentives/v1/tx";
import * as _30 from "./inflation/v1/genesis";
import * as _31 from "./inflation/v1/inflation";
import * as _32 from "./inflation/v1/query";
import * as _33 from "./inflation/v1/tx";
import * as _34 from "./recovery/v1/genesis";
import * as _35 from "./recovery/v1/query";
import * as _36 from "./recovery/v1/tx";
import * as _37 from "./revenue/v1/events";
import * as _38 from "./revenue/v1/genesis";
import * as _39 from "./revenue/v1/query";
import * as _40 from "./revenue/v1/revenue";
import * as _41 from "./revenue/v1/tx";
import * as _42 from "./vesting/v1/events";
import * as _43 from "./vesting/v1/query";
import * as _44 from "./vesting/v1/tx";
import * as _45 from "./vesting/v1/vesting";
import * as _172 from "./claims/v1/tx.amino";
import * as _173 from "./erc20/v1/tx.amino";
import * as _174 from "./incentives/v1/tx.amino";
import * as _175 from "./inflation/v1/tx.amino";
import * as _176 from "./recovery/v1/tx.amino";
import * as _177 from "./revenue/v1/tx.amino";
import * as _178 from "./vesting/v1/tx.amino";
import * as _179 from "./claims/v1/tx.registry";
import * as _180 from "./erc20/v1/tx.registry";
import * as _181 from "./incentives/v1/tx.registry";
import * as _182 from "./inflation/v1/tx.registry";
import * as _183 from "./recovery/v1/tx.registry";
import * as _184 from "./revenue/v1/tx.registry";
import * as _185 from "./vesting/v1/tx.registry";
import * as _186 from "./claims/v1/query.lcd";
import * as _187 from "./epochs/v1/query.lcd";
import * as _188 from "./erc20/v1/query.lcd";
import * as _189 from "./incentives/v1/query.lcd";
import * as _190 from "./inflation/v1/query.lcd";
import * as _191 from "./recovery/v1/query.lcd";
import * as _192 from "./revenue/v1/query.lcd";
import * as _193 from "./vesting/v1/query.lcd";
import * as _194 from "./claims/v1/query.rpc.Query";
import * as _195 from "./epochs/v1/query.rpc.Query";
import * as _196 from "./erc20/v1/query.rpc.Query";
import * as _197 from "./incentives/v1/query.rpc.Query";
import * as _198 from "./inflation/v1/query.rpc.Query";
import * as _199 from "./recovery/v1/query.rpc.Query";
import * as _200 from "./revenue/v1/query.rpc.Query";
import * as _201 from "./vesting/v1/query.rpc.Query";
import * as _202 from "./claims/v1/tx.rpc.msg";
import * as _203 from "./erc20/v1/tx.rpc.msg";
import * as _204 from "./incentives/v1/tx.rpc.msg";
import * as _205 from "./inflation/v1/tx.rpc.msg";
import * as _206 from "./recovery/v1/tx.rpc.msg";
import * as _207 from "./revenue/v1/tx.rpc.msg";
import * as _208 from "./vesting/v1/tx.rpc.msg";
import * as _291 from "./lcd";
import * as _292 from "./rpc.query";
import * as _293 from "./rpc.tx";
export namespace evmos {
  export namespace claims {
    export const v1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._172,
      ..._179,
      ..._186,
      ..._194,
      ..._202
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._19,
      ..._20,
      ..._187,
      ..._195
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._173,
      ..._180,
      ..._188,
      ..._196,
      ..._203
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._174,
      ..._181,
      ..._189,
      ..._197,
      ..._204
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._175,
      ..._182,
      ..._190,
      ..._198,
      ..._205
    };
  }
  export namespace recovery {
    export const v1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._176,
      ..._183,
      ..._191,
      ..._199,
      ..._206
    };
  }
  export namespace revenue {
    export const v1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._177,
      ..._184,
      ..._192,
      ..._200,
      ..._207
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._178,
      ..._185,
      ..._193,
      ..._201,
      ..._208
    };
  }
  export const ClientFactory = {
    ..._291,
    ..._292,
    ..._293
  };
}