import * as _0 from "./bundles/v1beta1/bundles";
import * as _1 from "./bundles/v1beta1/events";
import * as _2 from "./bundles/v1beta1/genesis";
import * as _3 from "./bundles/v1beta1/params";
import * as _4 from "./bundles/v1beta1/query";
import * as _5 from "./bundles/v1beta1/tx";
import * as _6 from "./delegation/v1beta1/delegation";
import * as _7 from "./delegation/v1beta1/events";
import * as _8 from "./delegation/v1beta1/genesis";
import * as _9 from "./delegation/v1beta1/params";
import * as _10 from "./delegation/v1beta1/query";
import * as _11 from "./delegation/v1beta1/tx";
import * as _12 from "./funders/v1beta1/events";
import * as _13 from "./funders/v1beta1/funders";
import * as _14 from "./funders/v1beta1/genesis";
import * as _15 from "./funders/v1beta1/params";
import * as _16 from "./funders/v1beta1/query";
import * as _17 from "./funders/v1beta1/tx";
import * as _18 from "./global/v1beta1/events";
import * as _19 from "./global/v1beta1/genesis";
import * as _20 from "./global/v1beta1/global";
import * as _21 from "./global/v1beta1/query";
import * as _22 from "./global/v1beta1/tx";
import * as _23 from "./pool/v1beta1/events";
import * as _24 from "./pool/v1beta1/genesis";
import * as _25 from "./pool/v1beta1/params";
import * as _26 from "./pool/v1beta1/pool";
import * as _27 from "./pool/v1beta1/query";
import * as _28 from "./pool/v1beta1/tx";
import * as _29 from "./query/v1beta1/account";
import * as _30 from "./query/v1beta1/bundles";
import * as _31 from "./query/v1beta1/delegation";
import * as _32 from "./query/v1beta1/funders";
import * as _33 from "./query/v1beta1/params";
import * as _34 from "./query/v1beta1/pools";
import * as _35 from "./query/v1beta1/query";
import * as _36 from "./query/v1beta1/stakers";
import * as _37 from "./stakers/v1beta1/events";
import * as _38 from "./stakers/v1beta1/genesis";
import * as _39 from "./stakers/v1beta1/params";
import * as _40 from "./stakers/v1beta1/query";
import * as _41 from "./stakers/v1beta1/stakers";
import * as _42 from "./stakers/v1beta1/tx";
import * as _43 from "./team/v1beta1/events";
import * as _44 from "./team/v1beta1/genesis";
import * as _45 from "./team/v1beta1/query";
import * as _46 from "./team/v1beta1/team";
import * as _47 from "./team/v1beta1/tx";
import * as _193 from "./bundles/v1beta1/tx.amino";
import * as _194 from "./delegation/v1beta1/tx.amino";
import * as _195 from "./funders/v1beta1/tx.amino";
import * as _196 from "./global/v1beta1/tx.amino";
import * as _197 from "./pool/v1beta1/tx.amino";
import * as _198 from "./stakers/v1beta1/tx.amino";
import * as _199 from "./team/v1beta1/tx.amino";
import * as _200 from "./bundles/v1beta1/tx.registry";
import * as _201 from "./delegation/v1beta1/tx.registry";
import * as _202 from "./funders/v1beta1/tx.registry";
import * as _203 from "./global/v1beta1/tx.registry";
import * as _204 from "./pool/v1beta1/tx.registry";
import * as _205 from "./stakers/v1beta1/tx.registry";
import * as _206 from "./team/v1beta1/tx.registry";
import * as _207 from "./bundles/v1beta1/query.lcd";
import * as _208 from "./delegation/v1beta1/query.lcd";
import * as _209 from "./funders/v1beta1/query.lcd";
import * as _210 from "./global/v1beta1/query.lcd";
import * as _211 from "./pool/v1beta1/query.lcd";
import * as _212 from "./stakers/v1beta1/query.lcd";
import * as _213 from "./team/v1beta1/query.lcd";
import * as _214 from "./bundles/v1beta1/query.rpc.Query";
import * as _215 from "./delegation/v1beta1/query.rpc.Query";
import * as _216 from "./funders/v1beta1/query.rpc.Query";
import * as _217 from "./global/v1beta1/query.rpc.Query";
import * as _218 from "./pool/v1beta1/query.rpc.Query";
import * as _219 from "./stakers/v1beta1/query.rpc.Query";
import * as _220 from "./team/v1beta1/query.rpc.Query";
import * as _221 from "./bundles/v1beta1/tx.rpc.msg";
import * as _222 from "./delegation/v1beta1/tx.rpc.msg";
import * as _223 from "./funders/v1beta1/tx.rpc.msg";
import * as _224 from "./global/v1beta1/tx.rpc.msg";
import * as _225 from "./pool/v1beta1/tx.rpc.msg";
import * as _226 from "./stakers/v1beta1/tx.rpc.msg";
import * as _227 from "./team/v1beta1/tx.rpc.msg";
import * as _320 from "./lcd";
import * as _321 from "./rpc.query";
import * as _322 from "./rpc.tx";
export namespace kyve {
  export namespace bundles {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._193,
      ..._200,
      ..._207,
      ..._214,
      ..._221
    };
  }
  export namespace delegation {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._194,
      ..._201,
      ..._208,
      ..._215,
      ..._222
    };
  }
  export namespace funders {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._195,
      ..._202,
      ..._209,
      ..._216,
      ..._223
    };
  }
  export namespace global {
    export const v1beta1 = {
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._196,
      ..._203,
      ..._210,
      ..._217,
      ..._224
    };
  }
  export namespace pool {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._197,
      ..._204,
      ..._211,
      ..._218,
      ..._225
    };
  }
  export namespace query {
    export const v1beta1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36
    };
  }
  export namespace stakers {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._198,
      ..._205,
      ..._212,
      ..._219,
      ..._226
    };
  }
  export namespace team {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._199,
      ..._206,
      ..._213,
      ..._220,
      ..._227
    };
  }
  export const ClientFactory = {
    ..._320,
    ..._321,
    ..._322
  };
}