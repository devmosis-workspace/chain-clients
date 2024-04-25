import * as _3 from "./clock/v1/clock";
import * as _4 from "./clock/v1/genesis";
import * as _5 from "./clock/v1/query";
import * as _6 from "./clock/v1/tx";
import * as _7 from "./cwhooks/v1/genesis";
import * as _8 from "./cwhooks/v1/query";
import * as _9 from "./cwhooks/v1/tx";
import * as _10 from "./drip/v1/genesis";
import * as _11 from "./drip/v1/query";
import * as _12 from "./drip/v1/tx";
import * as _13 from "./feepay/v1/feepay";
import * as _14 from "./feepay/v1/genesis";
import * as _15 from "./feepay/v1/query";
import * as _16 from "./feepay/v1/tx";
import * as _17 from "./feeshare/v1/feeshare";
import * as _18 from "./feeshare/v1/genesis";
import * as _19 from "./feeshare/v1/query";
import * as _20 from "./feeshare/v1/tx";
import * as _21 from "./mint/genesis";
import * as _22 from "./mint/mint";
import * as _23 from "./mint/query";
import * as _24 from "./mint/tx";
import * as _180 from "./clock/v1/tx.amino";
import * as _181 from "./cwhooks/v1/tx.amino";
import * as _182 from "./drip/v1/tx.amino";
import * as _183 from "./feepay/v1/tx.amino";
import * as _184 from "./feeshare/v1/tx.amino";
import * as _185 from "./mint/tx.amino";
import * as _186 from "./clock/v1/tx.registry";
import * as _187 from "./cwhooks/v1/tx.registry";
import * as _188 from "./drip/v1/tx.registry";
import * as _189 from "./feepay/v1/tx.registry";
import * as _190 from "./feeshare/v1/tx.registry";
import * as _191 from "./mint/tx.registry";
import * as _192 from "./clock/v1/query.lcd";
import * as _193 from "./cwhooks/v1/query.lcd";
import * as _194 from "./drip/v1/query.lcd";
import * as _195 from "./feepay/v1/query.lcd";
import * as _196 from "./feeshare/v1/query.lcd";
import * as _197 from "./mint/query.lcd";
import * as _198 from "./clock/v1/query.rpc.Query";
import * as _199 from "./cwhooks/v1/query.rpc.Query";
import * as _200 from "./drip/v1/query.rpc.Query";
import * as _201 from "./feepay/v1/query.rpc.Query";
import * as _202 from "./feeshare/v1/query.rpc.Query";
import * as _203 from "./mint/query.rpc.Query";
import * as _204 from "./clock/v1/tx.rpc.msg";
import * as _205 from "./cwhooks/v1/tx.rpc.msg";
import * as _206 from "./drip/v1/tx.rpc.msg";
import * as _207 from "./feepay/v1/tx.rpc.msg";
import * as _208 from "./feeshare/v1/tx.rpc.msg";
import * as _209 from "./mint/tx.rpc.msg";
import * as _310 from "./lcd";
import * as _311 from "./rpc.query";
import * as _312 from "./rpc.tx";
export namespace juno {
  export namespace clock {
    export const v1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._180,
      ..._186,
      ..._192,
      ..._198,
      ..._204
    };
  }
  export namespace cwhooks {
    export const v1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._181,
      ..._187,
      ..._193,
      ..._199,
      ..._205
    };
  }
  export namespace drip {
    export const v1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._182,
      ..._188,
      ..._194,
      ..._200,
      ..._206
    };
  }
  export namespace feepay {
    export const v1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._183,
      ..._189,
      ..._195,
      ..._201,
      ..._207
    };
  }
  export namespace feeshare {
    export const v1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._184,
      ..._190,
      ..._196,
      ..._202,
      ..._208
    };
  }
  export const mint = {
    ..._21,
    ..._22,
    ..._23,
    ..._24,
    ..._185,
    ..._191,
    ..._197,
    ..._203,
    ..._209
  };
  export const ClientFactory = {
    ..._310,
    ..._311,
    ..._312
  };
}