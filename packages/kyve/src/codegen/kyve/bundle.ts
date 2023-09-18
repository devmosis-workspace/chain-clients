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
import * as _19 from "./pool/v1beta1/params";
import * as _20 from "./pool/v1beta1/pool";
import * as _21 from "./pool/v1beta1/query";
import * as _22 from "./pool/v1beta1/tx";
import * as _23 from "./query/v1beta1/account";
import * as _24 from "./query/v1beta1/bundles";
import * as _25 from "./query/v1beta1/delegation";
import * as _26 from "./query/v1beta1/params";
import * as _27 from "./query/v1beta1/pools";
import * as _28 from "./query/v1beta1/query";
import * as _29 from "./query/v1beta1/stakers";
import * as _30 from "./stakers/v1beta1/events";
import * as _31 from "./stakers/v1beta1/genesis";
import * as _32 from "./stakers/v1beta1/params";
import * as _33 from "./stakers/v1beta1/query";
import * as _34 from "./stakers/v1beta1/stakers";
import * as _35 from "./stakers/v1beta1/tx";
import * as _36 from "./team/v1beta1/events";
import * as _37 from "./team/v1beta1/genesis";
import * as _38 from "./team/v1beta1/query";
import * as _39 from "./team/v1beta1/team";
import * as _40 from "./team/v1beta1/tx";
import * as _156 from "./bundles/v1beta1/tx.amino";
import * as _157 from "./delegation/v1beta1/tx.amino";
import * as _158 from "./global/v1beta1/tx.amino";
import * as _159 from "./pool/v1beta1/tx.amino";
import * as _160 from "./stakers/v1beta1/tx.amino";
import * as _161 from "./team/v1beta1/tx.amino";
import * as _162 from "./bundles/v1beta1/tx.registry";
import * as _163 from "./delegation/v1beta1/tx.registry";
import * as _164 from "./global/v1beta1/tx.registry";
import * as _165 from "./pool/v1beta1/tx.registry";
import * as _166 from "./stakers/v1beta1/tx.registry";
import * as _167 from "./team/v1beta1/tx.registry";
import * as _168 from "./bundles/v1beta1/query.lcd";
import * as _169 from "./delegation/v1beta1/query.lcd";
import * as _170 from "./global/v1beta1/query.lcd";
import * as _171 from "./pool/v1beta1/query.lcd";
import * as _172 from "./stakers/v1beta1/query.lcd";
import * as _173 from "./team/v1beta1/query.lcd";
import * as _174 from "./bundles/v1beta1/query.rpc.Query";
import * as _175 from "./delegation/v1beta1/query.rpc.Query";
import * as _176 from "./global/v1beta1/query.rpc.Query";
import * as _177 from "./pool/v1beta1/query.rpc.Query";
import * as _178 from "./stakers/v1beta1/query.rpc.Query";
import * as _179 from "./team/v1beta1/query.rpc.Query";
import * as _180 from "./bundles/v1beta1/tx.rpc.msg";
import * as _181 from "./delegation/v1beta1/tx.rpc.msg";
import * as _182 from "./global/v1beta1/tx.rpc.msg";
import * as _183 from "./pool/v1beta1/tx.rpc.msg";
import * as _184 from "./stakers/v1beta1/tx.rpc.msg";
import * as _185 from "./team/v1beta1/tx.rpc.msg";
import * as _265 from "./lcd";
import * as _266 from "./rpc.query";
import * as _267 from "./rpc.tx";
export namespace kyve {
  export namespace bundles {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._156,
      ..._162,
      ..._168,
      ..._174,
      ..._180
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
      ..._157,
      ..._163,
      ..._169,
      ..._175,
      ..._181
    };
  }
  export namespace global {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._158,
      ..._164,
      ..._170,
      ..._176,
      ..._182
    };
  }
  export namespace pool {
    export const v1beta1 = {
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._159,
      ..._165,
      ..._171,
      ..._177,
      ..._183
    };
  }
  export namespace query {
    export const v1beta1 = {
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29
    };
  }
  export namespace stakers {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._160,
      ..._166,
      ..._172,
      ..._178,
      ..._184
    };
  }
  export namespace team {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._161,
      ..._167,
      ..._173,
      ..._179,
      ..._185
    };
  }
  export const ClientFactory = {
    ..._265,
    ..._266,
    ..._267
  };
}