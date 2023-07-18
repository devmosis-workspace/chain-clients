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
import * as _176 from "../contractmanager/query.lcd";
import * as _177 from "../cron/query.lcd";
import * as _178 from "../feeburner/query.lcd";
import * as _179 from "../feerefunder/query.lcd";
import * as _180 from "../interchainqueries/query.lcd";
import * as _181 from "../transfer/v1/query.lcd";
import * as _182 from "../contractmanager/query.rpc.Query";
import * as _183 from "../cron/query.rpc.Query";
import * as _184 from "../feeburner/query.rpc.Query";
import * as _185 from "../feerefunder/query.rpc.Query";
import * as _186 from "../interchainqueries/query.rpc.Query";
import * as _187 from "../interchaintxs/v1/query.rpc.Query";
import * as _188 from "../transfer/v1/query.rpc.Query";
import * as _189 from "../interchainqueries/tx.rpc.msg";
import * as _190 from "../interchaintxs/v1/tx.rpc.msg";
import * as _191 from "../transfer/v1/tx.rpc.msg";
import * as _286 from "./lcd";
import * as _287 from "./rpc.query";
import * as _288 from "./rpc.tx";
export namespace neutron {
  export const contractmanager = {
    ..._0,
    ..._1,
    ..._2,
    ..._176,
    ..._182
  };
  export const cron = {
    ..._3,
    ..._4,
    ..._5,
    ..._6,
    ..._7,
    ..._177,
    ..._183
  };
  export const feeburner = {
    ..._8,
    ..._9,
    ..._10,
    ..._11,
    ..._178,
    ..._184
  };
  export const feerefunder = {
    ..._12,
    ..._13,
    ..._14,
    ..._15,
    ..._179,
    ..._185
  };
  export const interchainqueries = {
    ..._16,
    ..._17,
    ..._18,
    ..._19,
    ..._170,
    ..._173,
    ..._180,
    ..._186,
    ..._189
  };
  export const interchaintxs = {
    ..._20,
    ..._21,
    ..._22,
    ..._187,
    v1: {
      ..._171,
      ..._174,
      ..._190
    }
  };
  export const transfer = {
    ..._23,
    ..._24,
    ..._172,
    ..._175,
    ..._181,
    ..._188,
    ..._191
  };
  export const ClientFactory = {
    ..._286,
    ..._287,
    ..._288
  };
}