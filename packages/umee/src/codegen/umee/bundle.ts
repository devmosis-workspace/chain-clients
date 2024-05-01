import * as _0 from "./incentive/v1/genesis";
import * as _1 from "./incentive/v1/incentive";
import * as _2 from "./incentive/v1/query";
import * as _3 from "./incentive/v1/tx";
import * as _4 from "./leverage/v1/events";
import * as _5 from "./leverage/v1/genesis";
import * as _6 from "./leverage/v1/leverage";
import * as _7 from "./leverage/v1/query";
import * as _8 from "./leverage/v1/tx";
import * as _9 from "./metoken/v1/events";
import * as _10 from "./metoken/v1/genesis";
import * as _11 from "./metoken/v1/metoken";
import * as _12 from "./metoken/v1/query";
import * as _13 from "./metoken/v1/tx";
import * as _14 from "./oracle/v1/events";
import * as _15 from "./oracle/v1/genesis";
import * as _16 from "./oracle/v1/oracle";
import * as _17 from "./oracle/v1/query";
import * as _18 from "./oracle/v1/tx";
import * as _19 from "./ugov/v1/events";
import * as _20 from "./ugov/v1/genesis";
import * as _21 from "./ugov/v1/query";
import * as _22 from "./ugov/v1/tx";
import * as _23 from "./ugov/v1/ugov";
import * as _24 from "./uibc/v1/events";
import * as _25 from "./uibc/v1/genesis";
import * as _26 from "./uibc/v1/query";
import * as _27 from "./uibc/v1/quota";
import * as _28 from "./uibc/v1/tx";
import * as _29 from "./uibc/v1/uibc";
import * as _181 from "./incentive/v1/tx.amino";
import * as _182 from "./leverage/v1/tx.amino";
import * as _183 from "./metoken/v1/tx.amino";
import * as _184 from "./oracle/v1/tx.amino";
import * as _185 from "./ugov/v1/tx.amino";
import * as _186 from "./uibc/v1/tx.amino";
import * as _187 from "./incentive/v1/tx.registry";
import * as _188 from "./leverage/v1/tx.registry";
import * as _189 from "./metoken/v1/tx.registry";
import * as _190 from "./oracle/v1/tx.registry";
import * as _191 from "./ugov/v1/tx.registry";
import * as _192 from "./uibc/v1/tx.registry";
import * as _193 from "./incentive/v1/query.lcd";
import * as _194 from "./leverage/v1/query.lcd";
import * as _195 from "./metoken/v1/query.lcd";
import * as _196 from "./oracle/v1/query.lcd";
import * as _197 from "./ugov/v1/query.lcd";
import * as _198 from "./uibc/v1/query.lcd";
import * as _199 from "./incentive/v1/query.rpc.Query";
import * as _200 from "./leverage/v1/query.rpc.Query";
import * as _201 from "./metoken/v1/query.rpc.Query";
import * as _202 from "./oracle/v1/query.rpc.Query";
import * as _203 from "./ugov/v1/query.rpc.Query";
import * as _204 from "./uibc/v1/query.rpc.Query";
import * as _205 from "./incentive/v1/tx.rpc.msg";
import * as _206 from "./leverage/v1/tx.rpc.msg";
import * as _207 from "./metoken/v1/tx.rpc.msg";
import * as _208 from "./oracle/v1/tx.rpc.msg";
import * as _209 from "./ugov/v1/tx.rpc.msg";
import * as _210 from "./uibc/v1/tx.rpc.msg";
import * as _308 from "./lcd";
import * as _309 from "./rpc.query";
import * as _310 from "./rpc.tx";
export namespace umee {
  export namespace incentive {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._181,
      ..._187,
      ..._193,
      ..._199,
      ..._205
    };
  }
  export namespace leverage {
    export const v1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._182,
      ..._188,
      ..._194,
      ..._200,
      ..._206
    };
  }
  export namespace metoken {
    export const v1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._183,
      ..._189,
      ..._195,
      ..._201,
      ..._207
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._184,
      ..._190,
      ..._196,
      ..._202,
      ..._208
    };
  }
  export namespace ugov {
    export const v1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._185,
      ..._191,
      ..._197,
      ..._203,
      ..._209
    };
  }
  export namespace uibc {
    export const v1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._186,
      ..._192,
      ..._198,
      ..._204,
      ..._210
    };
  }
  export const ClientFactory = {
    ..._308,
    ..._309,
    ..._310
  };
}