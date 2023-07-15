import * as _0 from "./autopilot/genesis";
import * as _1 from "./autopilot/params";
import * as _2 from "./autopilot/query";
import * as _3 from "./claim/claim";
import * as _4 from "./claim/genesis";
import * as _5 from "./claim/params";
import * as _6 from "./claim/query";
import * as _7 from "./claim/tx";
import * as _8 from "./epochs/genesis";
import * as _9 from "./epochs/query";
import * as _10 from "./icacallbacks/callback_data";
import * as _11 from "./icacallbacks/genesis";
import * as _12 from "./icacallbacks/packet";
import * as _13 from "./icacallbacks/params";
import * as _14 from "./icacallbacks/query";
import * as _15 from "./icacallbacks/tx";
import * as _16 from "./interchainquery/v1/genesis";
import * as _17 from "./interchainquery/v1/messages";
import * as _18 from "./interchainquery/v1/query";
import * as _19 from "./mint/v1beta1/genesis";
import * as _20 from "./mint/v1beta1/mint";
import * as _21 from "./mint/v1beta1/query";
import * as _22 from "./ratelimit/genesis";
import * as _23 from "./ratelimit/gov";
import * as _24 from "./ratelimit/params";
import * as _25 from "./ratelimit/query";
import * as _26 from "./ratelimit/ratelimit";
import * as _27 from "./records/callbacks";
import * as _28 from "./records/genesis";
import * as _29 from "./records/query";
import * as _30 from "./stakeibc/address_unbonding";
import * as _31 from "./stakeibc/callbacks";
import * as _32 from "./stakeibc/epoch_tracker";
import * as _33 from "./stakeibc/genesis";
import * as _34 from "./stakeibc/gov";
import * as _35 from "./stakeibc/host_zone";
import * as _36 from "./stakeibc/ica_account";
import * as _37 from "./stakeibc/packet";
import * as _38 from "./stakeibc/params";
import * as _39 from "./stakeibc/query";
import * as _40 from "./stakeibc/tx";
import * as _41 from "./stakeibc/validator";
import * as _42 from "./vesting/tx";
import * as _43 from "./vesting/vesting";
import * as _188 from "./claim/tx.amino";
import * as _189 from "./interchainquery/v1/messages.amino";
import * as _190 from "./stakeibc/tx.amino";
import * as _191 from "./claim/tx.registry";
import * as _192 from "./interchainquery/v1/messages.registry";
import * as _193 from "./stakeibc/tx.registry";
import * as _194 from "./autopilot/query.rpc.Query";
import * as _195 from "./claim/query.rpc.Query";
import * as _196 from "./epochs/query.rpc.Query";
import * as _197 from "./icacallbacks/query.rpc.Query";
import * as _198 from "./mint/v1beta1/query.rpc.Query";
import * as _199 from "./ratelimit/query.rpc.Query";
import * as _200 from "./records/query.rpc.Query";
import * as _201 from "./stakeibc/query.rpc.Query";
import * as _202 from "./claim/tx.rpc.msg";
import * as _203 from "./interchainquery/v1/messages.rpc.msg";
import * as _204 from "./stakeibc/tx.rpc.msg";
import * as _278 from "./rpc.query";
import * as _279 from "./rpc.tx";
export namespace stride {
  export const autopilot = {
    ..._0,
    ..._1,
    ..._2,
    ..._194
  };
  export const claim = {
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._188,
    ..._191,
    ..._195,
    ..._202
  };
  export const epochs = {
    ..._8,
    ..._9,
    ..._196
  };
  export const icacallbacks = {
    ..._10,
    ..._11,
    ..._12,
    ..._13,
    ..._14,
    ..._15,
    ..._197
  };
  export namespace interchainquery {
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._189,
      ..._192,
      ..._203
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._198
    };
  }
  export const ratelimit = {
    ..._22,
    ..._23,
    ..._24,
    ..._25,
    ..._26,
    ..._199
  };
  export const records = {
    ..._27,
    ..._28,
    ..._29,
    ..._200
  };
  export const stakeibc = {
    ..._30,
    ..._31,
    ..._32,
    ..._33,
    ..._34,
    ..._35,
    ..._36,
    ..._37,
    ..._38,
    ..._39,
    ..._40,
    ..._41,
    ..._190,
    ..._193,
    ..._201,
    ..._204
  };
  export const vesting = {
    ..._42,
    ..._43
  };
  export const ClientFactory = {
    ..._278,
    ..._279
  };
}