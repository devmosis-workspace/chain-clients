import * as _0 from "../dymension/delayedack/genesis";
import * as _1 from "../dymension/delayedack/rollapp_packet";
import * as _2 from "../dymension/rollapp/bank";
import * as _3 from "../dymension/rollapp/block_descriptor";
import * as _4 from "../dymension/rollapp/genesis";
import * as _5 from "../dymension/rollapp/params";
import * as _6 from "../dymension/rollapp/query";
import * as _7 from "../dymension/rollapp/rollapp";
import * as _8 from "../dymension/rollapp/state_info";
import * as _9 from "../dymension/rollapp/state_status";
import * as _10 from "../dymension/rollapp/tx";
import * as _11 from "../dymension/sequencer/description";
import * as _12 from "../dymension/sequencer/genesis";
import * as _13 from "../dymension/sequencer/operating_status";
import * as _14 from "../dymension/sequencer/params";
import * as _15 from "../dymension/sequencer/query";
import * as _16 from "../dymension/sequencer/scheduler";
import * as _17 from "../dymension/sequencer/sequencer";
import * as _18 from "../dymension/sequencer/sequencers_by_rollapp";
import * as _19 from "../dymension/sequencer/tx";
import * as _20 from "../dymension/streamer/distr_info";
import * as _21 from "../dymension/streamer/genesis";
import * as _22 from "../dymension/streamer/gov_distribution";
import * as _23 from "../dymension/streamer/gov_stream";
import * as _24 from "../dymension/streamer/params";
import * as _25 from "../dymension/streamer/query";
import * as _26 from "../dymension/streamer/stream";
import * as _144 from "../dymension/rollapp/tx.amino";
import * as _145 from "../dymension/sequencer/tx.amino";
import * as _146 from "../dymension/rollapp/tx.registry";
import * as _147 from "../dymension/sequencer/tx.registry";
import * as _148 from "../dymension/rollapp/query.lcd";
import * as _149 from "../dymension/sequencer/query.lcd";
import * as _150 from "../dymension/streamer/query.lcd";
import * as _151 from "../dymension/rollapp/query.rpc.Query";
import * as _152 from "../dymension/sequencer/query.rpc.Query";
import * as _153 from "../dymension/streamer/query.rpc.Query";
import * as _154 from "../dymension/rollapp/tx.rpc.msg";
import * as _155 from "../dymension/sequencer/tx.rpc.msg";
import * as _235 from "./lcd";
import * as _236 from "./rpc.query";
import * as _237 from "./rpc.tx";
export namespace dymensionxyz {
  export namespace dymension {
    export const delayedack = {
      ..._0,
      ..._1
    };
    export const rollapp = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._144,
      ..._146,
      ..._148,
      ..._151,
      ..._154
    };
    export const sequencer = {
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._145,
      ..._147,
      ..._149,
      ..._152,
      ..._155
    };
    export const streamer = {
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._150,
      ..._153
    };
  }
  export const ClientFactory = {
    ..._235,
    ..._236,
    ..._237
  };
}