import * as _0 from "./crypto/v1/ethsecp256k1/keys";
import * as _1 from "./evm/v1/events";
import * as _2 from "./evm/v1/evm";
import * as _3 from "./evm/v1/genesis";
import * as _4 from "./evm/v1/query";
import * as _5 from "./evm/v1/tx";
import * as _6 from "./feemarket/v1/events";
import * as _7 from "./feemarket/v1/feemarket";
import * as _8 from "./feemarket/v1/genesis";
import * as _9 from "./feemarket/v1/query";
import * as _10 from "./feemarket/v1/tx";
import * as _11 from "./types/v1/account";
import * as _12 from "./types/v1/dynamic_fee";
import * as _13 from "./types/v1/indexer";
import * as _14 from "./types/v1/web3";
import * as _161 from "./evm/v1/tx.amino";
import * as _162 from "./feemarket/v1/tx.amino";
import * as _163 from "./evm/v1/tx.registry";
import * as _164 from "./feemarket/v1/tx.registry";
import * as _165 from "./evm/v1/query.rpc.Query";
import * as _166 from "./feemarket/v1/query.rpc.Query";
import * as _167 from "./evm/v1/tx.rpc.msg";
import * as _168 from "./feemarket/v1/tx.rpc.msg";
import * as _259 from "./rpc.query";
import * as _260 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._0
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._161,
      ..._163,
      ..._165,
      ..._167
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._162,
      ..._164,
      ..._166,
      ..._168
    };
  }
  export namespace types {
    export const v1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14
    };
  }
  export const ClientFactory = {
    ..._259,
    ..._260
  };
}