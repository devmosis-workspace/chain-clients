import * as _0 from "./iscn/authz";
import * as _1 from "./iscn/genesis";
import * as _2 from "./iscn/iscnid";
import * as _3 from "./iscn/params";
import * as _4 from "./iscn/query";
import * as _5 from "./iscn/store";
import * as _6 from "./iscn/tx";
import * as _7 from "./likenft/v1/authz";
import * as _8 from "./likenft/v1/blind_box_content";
import * as _9 from "./likenft/v1/class_data";
import * as _10 from "./likenft/v1/class_input";
import * as _11 from "./likenft/v1/class_reveal_queue";
import * as _12 from "./likenft/v1/classes_by_account";
import * as _13 from "./likenft/v1/classes_by_iscn";
import * as _14 from "./likenft/v1/event";
import * as _15 from "./likenft/v1/genesis";
import * as _16 from "./likenft/v1/listing_expire_queue";
import * as _17 from "./likenft/v1/listing";
import * as _18 from "./likenft/v1/nft_data";
import * as _19 from "./likenft/v1/nft_input";
import * as _20 from "./likenft/v1/offer_expire_queue";
import * as _21 from "./likenft/v1/offer";
import * as _22 from "./likenft/v1/params";
import * as _23 from "./likenft/v1/query";
import * as _24 from "./likenft/v1/royalty_config";
import * as _25 from "./likenft/v1/tx";
import * as _141 from "./iscn/tx.amino";
import * as _142 from "./likenft/v1/tx.amino";
import * as _143 from "./iscn/tx.registry";
import * as _144 from "./likenft/v1/tx.registry";
import * as _145 from "./iscn/query.lcd";
import * as _146 from "./likenft/v1/query.lcd";
import * as _147 from "./iscn/query.rpc.Query";
import * as _148 from "./likenft/v1/query.rpc.Query";
import * as _149 from "./iscn/tx.rpc.msg";
import * as _150 from "./likenft/v1/tx.rpc.msg";
import * as _230 from "./lcd";
import * as _231 from "./rpc.query";
import * as _232 from "./rpc.tx";
export namespace likechain {
  export const iscn = {
    ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._141,
    ..._143,
    ..._145,
    ..._147,
    ..._149
  };
  export namespace likenft {
    export const v1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._142,
      ..._144,
      ..._146,
      ..._148,
      ..._150
    };
  }
  export const ClientFactory = {
    ..._230,
    ..._231,
    ..._232
  };
}