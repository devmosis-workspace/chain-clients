import * as _0 from "./airdrop/v1/airdrop";
import * as _1 from "./airdrop/v1/genesis";
import * as _2 from "./airdrop/v1/messages";
import * as _3 from "./airdrop/v1/params";
import * as _4 from "./airdrop/v1/proposals";
import * as _5 from "./airdrop/v1/query";
import * as _6 from "./claimsmanager/v1/claimsmanager";
import * as _7 from "./claimsmanager/v1/genesis";
import * as _8 from "./claimsmanager/v1/messages";
import * as _9 from "./claimsmanager/v1/query";
import * as _10 from "./epochs/v1/genesis";
import * as _11 from "./epochs/v1/query";
import * as _12 from "./interchainquery/v1/genesis";
import * as _13 from "./interchainquery/v1/interchainquery";
import * as _14 from "./interchainquery/v1/messages";
import * as _15 from "./interchainquery/v1/query";
import * as _16 from "./interchainstaking/v1/genesis";
import * as _17 from "./interchainstaking/v1/interchainstaking";
import * as _18 from "./interchainstaking/v1/messages";
import * as _19 from "./interchainstaking/v1/proposals";
import * as _20 from "./interchainstaking/v1/query";
import * as _21 from "./mint/v1beta1/genesis";
import * as _22 from "./mint/v1beta1/mint";
import * as _23 from "./mint/v1beta1/query";
import * as _24 from "./participationrewards/v1/genesis";
import * as _25 from "./participationrewards/v1/messages";
import * as _26 from "./participationrewards/v1/participationrewards";
import * as _27 from "./participationrewards/v1/proposals";
import * as _28 from "./participationrewards/v1/query";
import * as _29 from "./supply/v1/query";
import * as _30 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _31 from "./tokenfactory/v1beta1/genesis";
import * as _32 from "./tokenfactory/v1beta1/params";
import * as _33 from "./tokenfactory/v1beta1/query";
import * as _34 from "./tokenfactory/v1beta1/tx";
import * as _193 from "./airdrop/v1/messages.amino";
import * as _194 from "./interchainquery/v1/messages.amino";
import * as _195 from "./interchainstaking/v1/messages.amino";
import * as _196 from "./participationrewards/v1/messages.amino";
import * as _197 from "./tokenfactory/v1beta1/tx.amino";
import * as _198 from "./airdrop/v1/messages.registry";
import * as _199 from "./interchainquery/v1/messages.registry";
import * as _200 from "./interchainstaking/v1/messages.registry";
import * as _201 from "./participationrewards/v1/messages.registry";
import * as _202 from "./tokenfactory/v1beta1/tx.registry";
import * as _203 from "./airdrop/v1/query.lcd";
import * as _204 from "./claimsmanager/v1/query.lcd";
import * as _205 from "./epochs/v1/query.lcd";
import * as _206 from "./interchainstaking/v1/query.lcd";
import * as _207 from "./mint/v1beta1/query.lcd";
import * as _208 from "./participationrewards/v1/query.lcd";
import * as _209 from "./supply/v1/query.lcd";
import * as _210 from "./tokenfactory/v1beta1/query.lcd";
import * as _211 from "./airdrop/v1/query.rpc.Query";
import * as _212 from "./claimsmanager/v1/query.rpc.Query";
import * as _213 from "./epochs/v1/query.rpc.Query";
import * as _214 from "./interchainstaking/v1/query.rpc.Query";
import * as _215 from "./mint/v1beta1/query.rpc.Query";
import * as _216 from "./participationrewards/v1/query.rpc.Query";
import * as _217 from "./supply/v1/query.rpc.Query";
import * as _218 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _219 from "./airdrop/v1/messages.rpc.msg";
import * as _220 from "./interchainquery/v1/messages.rpc.msg";
import * as _221 from "./interchainstaking/v1/messages.rpc.msg";
import * as _222 from "./participationrewards/v1/messages.rpc.msg";
import * as _223 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _332 from "./lcd";
import * as _333 from "./rpc.query";
import * as _334 from "./rpc.tx";
export namespace quicksilver {
  export namespace airdrop {
    export const v1 = {
      ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._193,
      ..._198,
      ..._203,
      ..._211,
      ..._219
    };
  }
  export namespace claimsmanager {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._204,
      ..._212
    };
  }
  export namespace epochs {
    export const v1 = {
      ..._10,
      ..._11,
      ..._205,
      ..._213
    };
  }
  export namespace interchainquery {
    export const v1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._194,
      ..._199,
      ..._220
    };
  }
  export namespace interchainstaking {
    export const v1 = {
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._195,
      ..._200,
      ..._206,
      ..._214,
      ..._221
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._207,
      ..._215
    };
  }
  export namespace participationrewards {
    export const v1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._196,
      ..._201,
      ..._208,
      ..._216,
      ..._222
    };
  }
  export namespace supply {
    export const v1 = {
      ..._29,
      ..._209,
      ..._217
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._197,
      ..._202,
      ..._210,
      ..._218,
      ..._223
    };
  }
  export const ClientFactory = {
    ..._332,
    ..._333,
    ..._334
  };
}