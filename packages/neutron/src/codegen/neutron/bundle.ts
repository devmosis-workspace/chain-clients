import * as _0 from "../contractmanager/genesis";
import * as _1 from "../contractmanager/params";
import * as _2 from "../contractmanager/query";
import * as _3 from "../cron/genesis";
import * as _4 from "../cron/params";
import * as _5 from "../cron/query";
import * as _6 from "../cron/schedule";
import * as _7 from "../cron/tx";
import * as _8 from "../feeburner/genesis";
import * as _9 from "../feeburner/params";
import * as _10 from "../feeburner/query";
import * as _11 from "../feeburner/total_burned_neutrons_amount";
import * as _12 from "../feerefunder/fee";
import * as _13 from "../feerefunder/genesis";
import * as _14 from "../feerefunder/params";
import * as _15 from "../feerefunder/query";
import * as _16 from "../interchainqueries/genesis";
import * as _17 from "../interchainqueries/params";
import * as _18 from "../interchainqueries/query";
import * as _19 from "../interchainqueries/tx";
import * as _20 from "../interchaintxs/v1/genesis";
import * as _21 from "../interchaintxs/v1/params";
import * as _22 from "../interchaintxs/v1/query";
import * as _23 from "../transfer/v1/query";
import * as _24 from "../transfer/v1/tx";
import * as _170 from "../interchainqueries/tx.amino";
import * as _171 from "../interchaintxs/v1/tx.amino";
import * as _172 from "../transfer/v1/tx.amino";
import * as _173 from "../interchainqueries/tx.registry";
import * as _174 from "../interchaintxs/v1/tx.registry";
import * as _175 from "../transfer/v1/tx.registry";
import * as _176 from "../contractmanager/query.rpc.Query";
import * as _177 from "../cron/query.rpc.Query";
import * as _178 from "../feeburner/query.rpc.Query";
import * as _179 from "../feerefunder/query.rpc.Query";
import * as _180 from "../interchainqueries/query.rpc.Query";
import * as _181 from "../interchaintxs/v1/query.rpc.Query";
import * as _182 from "../transfer/v1/query.rpc.Query";
import * as _183 from "../interchainqueries/tx.rpc.msg";
import * as _184 from "../interchaintxs/v1/tx.rpc.msg";
import * as _185 from "../transfer/v1/tx.rpc.msg";
import * as _257 from "./rpc.query";
import * as _258 from "./rpc.tx";
export namespace neutron {
  export const contractmanager = {
    ..._0,
    ..._1,
    ..._2,
    ..._176
  };
  export const cron = {
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._177
  };
  export const feeburner = {
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._178
  };
  export const feerefunder = {
    ..._12,
    ..._13,
    ..._14,
    ..._15,
    ..._179
  };
  export const interchainqueries = {
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._170,
    ..._173,
    ..._180,
    ..._183
  };
  export const interchaintxs = {
    ..._20,
    ..._21,
    ..._22,
    ..._181,
    v1: {
      ..._171,
      ..._174,
      ..._184
    }
  };
  export const transfer = {
    ..._23,
    ..._24,
    ..._172,
    ..._175,
    ..._182,
    ..._185
  };
  export const ClientFactory = {
    ..._257,
    ..._258
  };
}