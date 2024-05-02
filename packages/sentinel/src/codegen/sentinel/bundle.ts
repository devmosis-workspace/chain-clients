import * as _0 from "./deposit/v1/deposit";
import * as _1 from "./deposit/v1/events";
import * as _2 from "./deposit/v1/querier";
import * as _3 from "./mint/v1/genesis";
import * as _4 from "./mint/v1/inflation";
import * as _5 from "./node/v1/node";
import * as _6 from "./node/v2/events";
import * as _7 from "./node/v2/genesis";
import * as _8 from "./node/v2/msg";
import * as _9 from "./node/v2/node";
import * as _10 from "./node/v2/params";
import * as _11 from "./node/v2/querier";
import * as _12 from "./plan/v1/plan";
import * as _13 from "./plan/v2/events";
import * as _14 from "./plan/v2/genesis";
import * as _15 from "./plan/v2/msg";
import * as _16 from "./plan/v2/plan";
import * as _17 from "./plan/v2/querier";
import * as _18 from "./provider/v1/provider";
import * as _19 from "./provider/v2/events";
import * as _20 from "./provider/v2/genesis";
import * as _21 from "./provider/v2/msg";
import * as _22 from "./provider/v2/params";
import * as _23 from "./provider/v2/provider";
import * as _24 from "./provider/v2/querier";
import * as _25 from "./session/v1/session";
import * as _26 from "./session/v2/events";
import * as _27 from "./session/v2/genesis";
import * as _28 from "./session/v2/msg";
import * as _29 from "./session/v2/params";
import * as _30 from "./session/v2/proof";
import * as _31 from "./session/v2/querier";
import * as _32 from "./session/v2/session";
import * as _33 from "./subscription/v1/quota";
import * as _34 from "./subscription/v1/subscription";
import * as _35 from "./subscription/v2/allocation";
import * as _36 from "./subscription/v2/events";
import * as _37 from "./subscription/v2/genesis";
import * as _38 from "./subscription/v2/msg";
import * as _39 from "./subscription/v2/params";
import * as _40 from "./subscription/v2/payout";
import * as _41 from "./subscription/v2/querier";
import * as _42 from "./subscription/v2/subscription";
import * as _43 from "./swap/v1/events";
import * as _44 from "./swap/v1/genesis";
import * as _45 from "./swap/v1/msg";
import * as _46 from "./swap/v1/params";
import * as _47 from "./swap/v1/querier";
import * as _48 from "./swap/v1/swap";
import * as _49 from "./types/v1/bandwidth";
import * as _50 from "./types/v1/status";
import * as _51 from "./vpn/v1/genesis";
export namespace sentinel {
  export namespace deposit {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2
    };
  }
  export namespace mint {
    export const v1 = {
      ..._3,
      ..._4
    };
  }
  export namespace node {
    export const v1 = {
      ..._5
    };
    export const v2 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11
    };
  }
  export namespace plan {
    export const v1 = {
      ..._12
    };
    export const v2 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17
    };
  }
  export namespace provider {
    export const v1 = {
      ..._18
    };
    export const v2 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24
    };
  }
  export namespace session {
    export const v1 = {
      ..._25
    };
    export const v2 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32
    };
  }
  export namespace subscription {
    export const v1 = {
      ..._33,
      ..._34
    };
    export const v2 = {
      ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._42
    };
  }
  export namespace swap {
    export const v1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._48
    };
  }
  export namespace types {
    export const v1 = {
      ..._49,
      ..._50
    };
  }
  export namespace vpn {
    export const v1 = {
      ..._51
    };
  }
}