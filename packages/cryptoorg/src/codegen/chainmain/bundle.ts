import * as _0 from "./v1/genesis";
import * as _1 from "../icaauth/v1/genesis";
import * as _2 from "../icaauth/v1/params";
import * as _3 from "../icaauth/v1/query";
import * as _4 from "../icaauth/v1/tx";
import * as _5 from "../nft_transfer/v1/genesis";
import * as _6 from "../nft_transfer/v1/packet";
import * as _7 from "../nft_transfer/v1/query";
import * as _8 from "../nft_transfer/v1/trace";
import * as _9 from "../nft_transfer/v1/tx";
import * as _10 from "../nft/v1/genesis";
import * as _11 from "../nft/v1/nft";
import * as _12 from "../nft/v1/query";
import * as _13 from "../nft/v1/tx";
import * as _14 from "../supply/v1/accounts";
import * as _15 from "../supply/v1/genesis";
import * as _16 from "../supply/v1/query";
import * as _170 from "../icaauth/v1/tx.amino";
import * as _171 from "../nft_transfer/v1/tx.amino";
import * as _172 from "../nft/v1/tx.amino";
import * as _173 from "../icaauth/v1/tx.registry";
import * as _174 from "../nft_transfer/v1/tx.registry";
import * as _175 from "../nft/v1/tx.registry";
import * as _176 from "../icaauth/v1/query.lcd";
import * as _177 from "../nft_transfer/v1/query.lcd";
import * as _178 from "../nft/v1/query.lcd";
import * as _179 from "../supply/v1/query.lcd";
import * as _180 from "../icaauth/v1/query.rpc.Query";
import * as _181 from "../nft_transfer/v1/query.rpc.Query";
import * as _182 from "../nft/v1/query.rpc.Query";
import * as _183 from "../supply/v1/query.rpc.Query";
import * as _184 from "../icaauth/v1/tx.rpc.msg";
import * as _185 from "../nft_transfer/v1/tx.rpc.msg";
import * as _186 from "../nft/v1/tx.rpc.msg";
import * as _295 from "./lcd";
import * as _296 from "./rpc.query";
import * as _297 from "./rpc.tx";
export namespace chainmain {
  export namespace chainmain {
    export const v1 = {
      ..._0
    };
  }
  export namespace icaauth {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._170,
      ..._173,
      ..._176,
      ..._180,
      ..._184
    };
  }
  export namespace nft_transfer {
    export const v1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._171,
      ..._174,
      ..._177,
      ..._181,
      ..._185
    };
  }
  export namespace nft {
    export const v1 = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._172,
      ..._175,
      ..._178,
      ..._182,
      ..._186
    };
  }
  export namespace supply {
    export const v1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._179,
      ..._183
    };
  }
  export const ClientFactory = {
    ..._295,
    ..._296,
    ..._297
  };
}