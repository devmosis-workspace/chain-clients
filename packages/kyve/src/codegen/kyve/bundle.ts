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
import * as _12 from "./global/v1beta1/events";
import * as _13 from "./global/v1beta1/genesis";
import * as _14 from "./global/v1beta1/global";
import * as _15 from "./global/v1beta1/query";
import * as _16 from "./global/v1beta1/tx";
import * as _17 from "./pool/v1beta1/events";
import * as _18 from "./pool/v1beta1/genesis";
import * as _19 from "./pool/v1beta1/pool";
import * as _20 from "./pool/v1beta1/tx";
import * as _21 from "./query/v1beta1/account";
import * as _22 from "./query/v1beta1/bundles";
import * as _23 from "./query/v1beta1/delegation";
import * as _24 from "./query/v1beta1/params";
import * as _25 from "./query/v1beta1/pools";
import * as _26 from "./query/v1beta1/query";
import * as _27 from "./query/v1beta1/stakers";
import * as _28 from "./stakers/v1beta1/events";
import * as _29 from "./stakers/v1beta1/genesis";
import * as _30 from "./stakers/v1beta1/params";
import * as _31 from "./stakers/v1beta1/query";
import * as _32 from "./stakers/v1beta1/stakers";
import * as _33 from "./stakers/v1beta1/tx";
import * as _34 from "./team/v1beta1/events";
import * as _35 from "./team/v1beta1/genesis";
import * as _36 from "./team/v1beta1/query";
import * as _37 from "./team/v1beta1/team";
import * as _38 from "./team/v1beta1/tx";
import * as _153 from "./bundles/v1beta1/tx.amino";
import * as _154 from "./delegation/v1beta1/tx.amino";
import * as _155 from "./global/v1beta1/tx.amino";
import * as _156 from "./pool/v1beta1/tx.amino";
import * as _157 from "./stakers/v1beta1/tx.amino";
import * as _158 from "./team/v1beta1/tx.amino";
import * as _159 from "./bundles/v1beta1/tx.registry";
import * as _160 from "./delegation/v1beta1/tx.registry";
import * as _161 from "./global/v1beta1/tx.registry";
import * as _162 from "./pool/v1beta1/tx.registry";
import * as _163 from "./stakers/v1beta1/tx.registry";
import * as _164 from "./team/v1beta1/tx.registry";
import * as _165 from "./bundles/v1beta1/query.rpc.Query";
import * as _166 from "./delegation/v1beta1/query.rpc.Query";
import * as _167 from "./global/v1beta1/query.rpc.Query";
import * as _168 from "./stakers/v1beta1/query.rpc.Query";
import * as _169 from "./team/v1beta1/query.rpc.Query";
import * as _170 from "./bundles/v1beta1/tx.rpc.msg";
import * as _171 from "./delegation/v1beta1/tx.rpc.msg";
import * as _172 from "./global/v1beta1/tx.rpc.msg";
import * as _173 from "./pool/v1beta1/tx.rpc.msg";
import * as _174 from "./stakers/v1beta1/tx.rpc.msg";
import * as _175 from "./team/v1beta1/tx.rpc.msg";
import * as _237 from "./rpc.query";
import * as _238 from "./rpc.tx";
export namespace kyve {
  export namespace bundles {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._153,
      ..._159,
      ..._165,
      ..._170
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
      ..._154,
      ..._160,
      ..._166,
      ..._171
    };
  }
  export namespace global {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._155,
      ..._161,
      ..._167,
      ..._172
    };
  }
  export namespace pool {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._156,
      ..._162,
      ..._173
    };
  }
  export namespace query {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27
    };
  }
  export namespace stakers {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._157,
      ..._163,
      ..._168,
      ..._174
    };
  }
  export namespace team {
    export const v1beta1 = {
      ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._158,
      ..._164,
      ..._169,
      ..._175
    };
  }
  export const ClientFactory = {
    ..._237,
    ..._238
  };
}