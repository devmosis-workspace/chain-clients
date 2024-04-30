import * as _0 from "../epochs/genesis";
import * as _1 from "../epochs/query";
import * as _2 from "../qoracle/genesis";
import * as _3 from "../qoracle/params";
import * as _4 from "../qoracle/pool";
import * as _5 from "../qoracle/query";
import * as _6 from "../qoracle/tx";
import * as _7 from "../qtransfer/genesis";
import * as _8 from "../qtransfer/params";
import * as _9 from "../qtransfer/query";
import * as _10 from "../qvesting/genesis";
import * as _11 from "../qvesting/params";
import * as _12 from "../qvesting/query";
import * as _13 from "../qvesting/tx";
import * as _14 from "../tokenfactory/v1beta1/authorityMetadata";
import * as _15 from "../tokenfactory/v1beta1/genesis";
import * as _16 from "../tokenfactory/v1beta1/params";
import * as _17 from "../tokenfactory/v1beta1/query";
import * as _18 from "../tokenfactory/v1beta1/tx";
import * as _163 from "../qvesting/tx.amino";
import * as _164 from "../tokenfactory/v1beta1/tx.amino";
import * as _165 from "../qvesting/tx.registry";
import * as _166 from "../tokenfactory/v1beta1/tx.registry";
import * as _167 from "../epochs/query.lcd";
import * as _168 from "../qoracle/osmosis/query.lcd";
import * as _169 from "../qoracle/query.lcd";
import * as _170 from "../qtransfer/query.lcd";
import * as _171 from "../qvesting/query.lcd";
import * as _172 from "../tokenfactory/v1beta1/query.lcd";
import * as _173 from "../epochs/query.rpc.Query";
import * as _174 from "../qoracle/osmosis/query.rpc.Query";
import * as _175 from "../qoracle/query.rpc.Query";
import * as _176 from "../qtransfer/query.rpc.Query";
import * as _177 from "../qvesting/query.rpc.Query";
import * as _178 from "../tokenfactory/v1beta1/query.rpc.Query";
import * as _179 from "../qvesting/tx.rpc.msg";
import * as _180 from "../tokenfactory/v1beta1/tx.rpc.msg";
import * as _287 from "./lcd";
import * as _288 from "./rpc.query";
import * as _289 from "./rpc.tx";
export namespace quasarlabs {
  export namespace quasarnode {
    export const epochs = {
      ..._0,
      ..._1,
      ..._167,
      ..._173
    };
    export const qoracle = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._169,
      ..._175,
      osmosis: {
        ..._168,
        ..._174
      }
    };
    export const qtransfer = {
      ..._7,
      ..._8,
      ..._9,
      ..._170,
      ..._176
    };
    export const qvesting = {
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._163,
      ..._165,
      ..._171,
      ..._177,
      ..._179
    };
    export namespace tokenfactory {
      export const v1beta1 = {
        ..._14,
        ..._15,
        ..._16,
        ..._17,
        ..._18,
        ..._164,
        ..._166,
        ..._172,
        ..._178,
        ..._180
      };
    }
  }
  export const ClientFactory = {
    ..._287,
    ..._288,
    ..._289
  };
}