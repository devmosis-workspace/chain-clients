import * as _0 from "./auction/v1beta1/auction";
import * as _1 from "./auction/v1beta1/genesis";
import * as _2 from "./auction/v1beta1/query";
import * as _3 from "./auction/v1beta1/tx";
import * as _4 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _5 from "./exchange/v1beta1/authz";
import * as _6 from "./exchange/v1beta1/events";
import * as _7 from "./exchange/v1beta1/exchange";
import * as _8 from "./exchange/v1beta1/genesis";
import * as _9 from "./exchange/v1beta1/query";
import * as _10 from "./exchange/v1beta1/tx";
import * as _11 from "./insurance/v1beta1/genesis";
import * as _12 from "./insurance/v1beta1/insurance";
import * as _13 from "./insurance/v1beta1/query";
import * as _14 from "./insurance/v1beta1/tx";
import * as _15 from "./ocr/v1beta1/genesis";
import * as _16 from "./ocr/v1beta1/ocr";
import * as _17 from "./ocr/v1beta1/query";
import * as _18 from "./ocr/v1beta1/tx";
import * as _19 from "./oracle/v1beta1/events";
import * as _20 from "./oracle/v1beta1/genesis";
import * as _21 from "./oracle/v1beta1/oracle";
import * as _22 from "./oracle/v1beta1/proposal";
import * as _23 from "./oracle/v1beta1/query";
import * as _24 from "./oracle/v1beta1/tx";
import * as _25 from "./peggy/v1/attestation";
import * as _26 from "./peggy/v1/batch";
import * as _27 from "./peggy/v1/ethereum_signer";
import * as _28 from "./peggy/v1/events";
import * as _29 from "./peggy/v1/genesis";
import * as _30 from "./peggy/v1/msgs";
import * as _31 from "./peggy/v1/params";
import * as _32 from "./peggy/v1/pool";
import * as _33 from "./peggy/v1/proposal";
import * as _34 from "./peggy/v1/query";
import * as _35 from "./peggy/v1/types";
import * as _36 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _37 from "./tokenfactory/v1beta1/events";
import * as _38 from "./tokenfactory/v1beta1/genesis";
import * as _39 from "./tokenfactory/v1beta1/params";
import * as _40 from "./tokenfactory/v1beta1/query";
import * as _41 from "./tokenfactory/v1beta1/tx";
import * as _42 from "./types/v1beta1/account";
import * as _43 from "./types/v1beta1/tx_ext";
import * as _44 from "./types/v1beta1/tx_response";
import * as _45 from "./wasmx/v1/events";
import * as _46 from "./wasmx/v1/genesis";
import * as _47 from "./wasmx/v1/proposal";
import * as _48 from "./wasmx/v1/query";
import * as _49 from "./wasmx/v1/tx";
import * as _50 from "./wasmx/v1/wasmx";
import * as _203 from "./auction/v1beta1/tx.amino";
import * as _204 from "./exchange/v1beta1/tx.amino";
import * as _205 from "./insurance/v1beta1/tx.amino";
import * as _206 from "./ocr/v1beta1/tx.amino";
import * as _207 from "./oracle/v1beta1/tx.amino";
import * as _208 from "./peggy/v1/msgs.amino";
import * as _209 from "./tokenfactory/v1beta1/tx.amino";
import * as _210 from "./wasmx/v1/tx.amino";
import * as _211 from "./auction/v1beta1/tx.registry";
import * as _212 from "./exchange/v1beta1/tx.registry";
import * as _213 from "./insurance/v1beta1/tx.registry";
import * as _214 from "./ocr/v1beta1/tx.registry";
import * as _215 from "./oracle/v1beta1/tx.registry";
import * as _216 from "./peggy/v1/msgs.registry";
import * as _217 from "./tokenfactory/v1beta1/tx.registry";
import * as _218 from "./wasmx/v1/tx.registry";
import * as _219 from "./auction/v1beta1/query.lcd";
import * as _220 from "./exchange/v1beta1/query.lcd";
import * as _221 from "./insurance/v1beta1/query.lcd";
import * as _222 from "./ocr/v1beta1/query.lcd";
import * as _223 from "./oracle/v1beta1/query.lcd";
import * as _224 from "./peggy/v1/query.lcd";
import * as _225 from "./tokenfactory/v1beta1/query.lcd";
import * as _226 from "./wasmx/v1/query.lcd";
import * as _227 from "./auction/v1beta1/query.rpc.Query";
import * as _228 from "./exchange/v1beta1/query.rpc.Query";
import * as _229 from "./insurance/v1beta1/query.rpc.Query";
import * as _230 from "./ocr/v1beta1/query.rpc.Query";
import * as _231 from "./oracle/v1beta1/query.rpc.Query";
import * as _232 from "./peggy/v1/query.rpc.Query";
import * as _233 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _234 from "./wasmx/v1/query.rpc.Query";
import * as _235 from "./auction/v1beta1/tx.rpc.msg";
import * as _236 from "./exchange/v1beta1/tx.rpc.msg";
import * as _237 from "./insurance/v1beta1/tx.rpc.msg";
import * as _238 from "./ocr/v1beta1/tx.rpc.msg";
import * as _239 from "./oracle/v1beta1/tx.rpc.msg";
import * as _240 from "./peggy/v1/msgs.rpc.msg";
import * as _241 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _242 from "./wasmx/v1/tx.rpc.msg";
import * as _340 from "./lcd";
import * as _341 from "./rpc.query";
import * as _342 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._203,
      ..._211,
      ..._219,
      ..._227,
      ..._235
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = {
        ..._4
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._204,
      ..._212,
      ..._220,
      ..._228,
      ..._236
    };
  }
  export namespace insurance {
    export const v1beta1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._205,
      ..._213,
      ..._221,
      ..._229,
      ..._237
    };
  }
  export namespace ocr {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._206,
      ..._214,
      ..._222,
      ..._230,
      ..._238
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._207,
      ..._215,
      ..._223,
      ..._231,
      ..._239
    };
  }
  export namespace peggy {
    export const v1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._208,
      ..._216,
      ..._224,
      ..._232,
      ..._240
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._209,
      ..._217,
      ..._225,
      ..._233,
      ..._241
    };
  }
  export namespace types {
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._44
    };
  }
  export namespace wasmx {
    export const v1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._210,
      ..._218,
      ..._226,
      ..._234,
      ..._242
    };
  }
  export const ClientFactory = {
    ..._340,
    ..._341,
    ..._342
  };
}