import * as _0 from "./data/v1/events";
import * as _1 from "./data/v1/query";
import * as _2 from "./data/v1/state";
import * as _3 from "./data/v1/tx";
import * as _4 from "./data/v1/types";
import * as _5 from "./ecocredit/basket/v1/events";
import * as _6 from "./ecocredit/basket/v1/query";
import * as _7 from "./ecocredit/basket/v1/state";
import * as _8 from "./ecocredit/basket/v1/tx";
import * as _9 from "./ecocredit/basket/v1/types";
import * as _10 from "./ecocredit/marketplace/v1/events";
import * as _11 from "./ecocredit/marketplace/v1/query";
import * as _12 from "./ecocredit/marketplace/v1/state";
import * as _13 from "./ecocredit/marketplace/v1/tx";
import * as _14 from "./ecocredit/marketplace/v1/types";
import * as _15 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _16 from "./ecocredit/v1/events";
import * as _17 from "./ecocredit/v1/query";
import * as _18 from "./ecocredit/v1/state";
import * as _19 from "./ecocredit/v1/tx";
import * as _20 from "./ecocredit/v1/types";
import * as _21 from "./ecocredit/v1alpha1/events";
import * as _22 from "./ecocredit/v1alpha1/genesis";
import * as _23 from "./ecocredit/v1alpha1/query";
import * as _24 from "./ecocredit/v1alpha1/tx";
import * as _25 from "./ecocredit/v1alpha1/types";
import * as _26 from "./group/v1alpha1/events";
import * as _27 from "./group/v1alpha1/genesis";
import * as _28 from "./group/v1alpha1/query";
import * as _29 from "./group/v1alpha1/tx";
import * as _30 from "./group/v1alpha1/types";
import * as _31 from "./intertx/v1/query";
import * as _32 from "./intertx/v1/tx";
import * as _149 from "./data/v1/tx.amino";
import * as _150 from "./ecocredit/basket/v1/tx.amino";
import * as _151 from "./ecocredit/marketplace/v1/tx.amino";
import * as _152 from "./ecocredit/v1/tx.amino";
import * as _153 from "./ecocredit/v1alpha1/tx.amino";
import * as _154 from "./group/v1alpha1/tx.amino";
import * as _155 from "./intertx/v1/tx.amino";
import * as _156 from "./data/v1/tx.registry";
import * as _157 from "./ecocredit/basket/v1/tx.registry";
import * as _158 from "./ecocredit/marketplace/v1/tx.registry";
import * as _159 from "./ecocredit/v1/tx.registry";
import * as _160 from "./ecocredit/v1alpha1/tx.registry";
import * as _161 from "./group/v1alpha1/tx.registry";
import * as _162 from "./intertx/v1/tx.registry";
import * as _163 from "./data/v1/query.lcd";
import * as _164 from "./ecocredit/basket/v1/query.lcd";
import * as _165 from "./ecocredit/marketplace/v1/query.lcd";
import * as _166 from "./ecocredit/v1/query.lcd";
import * as _167 from "./ecocredit/v1alpha1/query.lcd";
import * as _168 from "./group/v1alpha1/query.lcd";
import * as _169 from "./intertx/v1/query.lcd";
import * as _170 from "./data/v1/query.rpc.Query";
import * as _171 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _172 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _173 from "./ecocredit/v1/query.rpc.Query";
import * as _174 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _175 from "./group/v1alpha1/query.rpc.Query";
import * as _176 from "./intertx/v1/query.rpc.Query";
import * as _177 from "./data/v1/tx.rpc.msg";
import * as _178 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _179 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _180 from "./ecocredit/v1/tx.rpc.msg";
import * as _181 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _182 from "./group/v1alpha1/tx.rpc.msg";
import * as _183 from "./intertx/v1/tx.rpc.msg";
import * as _263 from "./lcd";
import * as _264 from "./rpc.query";
import * as _265 from "./rpc.tx";
export namespace regen {
  export namespace data {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._149,
      ..._156,
      ..._163,
      ..._170,
      ..._177
    };
  }
  export namespace ecocredit {
    export namespace basket {
      export const v1 = {
        ..._5,
        ..._6,
        ..._7,
        ..._8,
        ..._9,
        ..._150,
        ..._157,
        ..._164,
        ..._171,
        ..._178
      };
    }
    export namespace marketplace {
      export const v1 = {
        ..._10,
        ..._11,
        ..._12,
        ..._13,
        ..._14,
        ..._151,
        ..._158,
        ..._165,
        ..._172,
        ..._179
      };
    }
    export namespace orderbook {
      export const v1alpha1 = {
        ..._15
      };
    }
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._152,
      ..._159,
      ..._166,
      ..._173,
      ..._180
    };
    export const v1alpha1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._153,
      ..._160,
      ..._167,
      ..._174,
      ..._181
    };
  }
  export namespace group {
    export const v1alpha1 = {
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._154,
      ..._161,
      ..._168,
      ..._175,
      ..._182
    };
  }
  export namespace intertx {
    export const v1 = {
      ..._31,
      ..._32,
      ..._155,
      ..._162,
      ..._169,
      ..._176,
      ..._183
    };
  }
  export const ClientFactory = {
    ..._263,
    ..._264,
    ..._265
  };
}