import * as _128 from "./autopilot/genesis";
import * as _129 from "./autopilot/params";
import * as _130 from "./autopilot/query";
import * as _131 from "./claim/claim";
import * as _132 from "./claim/genesis";
import * as _133 from "./claim/params";
import * as _134 from "./claim/query";
import * as _135 from "./claim/tx";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./icacallbacks/callback_data";
import * as _139 from "./icacallbacks/genesis";
import * as _140 from "./icacallbacks/packet";
import * as _141 from "./icacallbacks/params";
import * as _142 from "./icacallbacks/query";
import * as _143 from "./icacallbacks/tx";
import * as _144 from "./icaoracle/callbacks";
import * as _145 from "./icaoracle/contract";
import * as _146 from "./icaoracle/genesis";
import * as _147 from "./icaoracle/icaoracle";
import * as _148 from "./icaoracle/query";
import * as _149 from "./icaoracle/tx";
import * as _150 from "./interchainquery/v1/genesis";
import * as _151 from "./interchainquery/v1/messages";
import * as _152 from "./interchainquery/v1/query";
import * as _153 from "./mint/v1beta1/genesis";
import * as _154 from "./mint/v1beta1/mint";
import * as _155 from "./mint/v1beta1/query";
import * as _156 from "./ratelimit/genesis";
import * as _157 from "./ratelimit/gov";
import * as _158 from "./ratelimit/params";
import * as _159 from "./ratelimit/query";
import * as _160 from "./ratelimit/ratelimit";
import * as _161 from "./records/callbacks";
import * as _162 from "./records/genesis";
import * as _163 from "./records/params";
import * as _164 from "./records/query";
import * as _165 from "./records/records";
import * as _166 from "./stakeibc/address_unbonding";
import * as _167 from "./stakeibc/callbacks";
import * as _168 from "./stakeibc/epoch_tracker";
import * as _169 from "./stakeibc/genesis";
import * as _170 from "./stakeibc/gov";
import * as _171 from "./stakeibc/host_zone";
import * as _172 from "./stakeibc/ica_account";
import * as _173 from "./stakeibc/packet";
import * as _174 from "./stakeibc/params";
import * as _175 from "./stakeibc/query";
import * as _176 from "./stakeibc/trade_route";
import * as _177 from "./stakeibc/tx";
import * as _178 from "./stakeibc/validator";
import * as _179 from "./staketia/genesis";
import * as _180 from "./staketia/query";
import * as _181 from "./staketia/staketia";
import * as _182 from "./staketia/tx";
import * as _183 from "./vesting/tx";
import * as _184 from "./vesting/vesting";
import * as _297 from "./claim/tx.amino";
import * as _298 from "./icaoracle/tx.amino";
import * as _299 from "./interchainquery/v1/messages.amino";
import * as _300 from "./stakeibc/tx.amino";
import * as _301 from "./staketia/tx.amino";
import * as _302 from "./claim/tx.registry";
import * as _303 from "./icaoracle/tx.registry";
import * as _304 from "./interchainquery/v1/messages.registry";
import * as _305 from "./stakeibc/tx.registry";
import * as _306 from "./staketia/tx.registry";
import * as _307 from "./autopilot/query.lcd";
import * as _308 from "./claim/query.lcd";
import * as _309 from "./epochs/query.lcd";
import * as _310 from "./icacallbacks/query.lcd";
import * as _311 from "./icaoracle/query.lcd";
import * as _312 from "./mint/v1beta1/query.lcd";
import * as _313 from "./ratelimit/query.lcd";
import * as _314 from "./records/query.lcd";
import * as _315 from "./stakeibc/query.lcd";
import * as _316 from "./staketia/query.lcd";
import * as _317 from "./autopilot/query.rpc.Query";
import * as _318 from "./claim/query.rpc.Query";
import * as _319 from "./epochs/query.rpc.Query";
import * as _320 from "./icacallbacks/query.rpc.Query";
import * as _321 from "./icaoracle/query.rpc.Query";
import * as _322 from "./mint/v1beta1/query.rpc.Query";
import * as _323 from "./ratelimit/query.rpc.Query";
import * as _324 from "./records/query.rpc.Query";
import * as _325 from "./stakeibc/query.rpc.Query";
import * as _326 from "./staketia/query.rpc.Query";
import * as _327 from "./claim/tx.rpc.msg";
import * as _328 from "./icaoracle/tx.rpc.msg";
import * as _329 from "./interchainquery/v1/messages.rpc.msg";
import * as _330 from "./stakeibc/tx.rpc.msg";
import * as _331 from "./staketia/tx.rpc.msg";
import * as _335 from "./lcd";
import * as _336 from "./rpc.query";
import * as _337 from "./rpc.tx";
export namespace stride {
  export const autopilot = {
    ..._128,
    ..._129,
    ..._130,
    ..._307,
    ..._317
  };
  export const claim = {
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._135,
    ..._297,
    ..._302,
    ..._308,
    ..._318,
    ..._327
  };
  export const epochs = {
    ..._136,
    ..._137,
    ..._309,
    ..._319
  };
  export const icacallbacks = {
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._310,
    ..._320
  };
  export const icaoracle = {
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._149,
    ..._298,
    ..._303,
    ..._311,
    ..._321,
    ..._328
  };
  export namespace interchainquery {
    export const v1 = {
      ..._150,
      ..._151,
      ..._152,
      ..._299,
      ..._304,
      ..._329
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._153,
      ..._154,
      ..._155,
      ..._312,
      ..._322
    };
  }
  export const ratelimit = {
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._160,
    ..._313,
    ..._323
  };
  export const records = {
    ..._161,
    ..._162,
    ..._163,
    ..._164,
    ..._165,
    ..._314,
    ..._324
  };
  export const stakeibc = {
    ..._166,
    ..._167,
    ..._168,
    ..._169,
    ..._170,
    ..._171,
    ..._172,
    ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._178,
    ..._300,
    ..._305,
    ..._315,
    ..._325,
    ..._330
  };
  export const staketia = {
    ..._179,
    ..._180,
    ..._181,
    ..._182,
    ..._301,
    ..._306,
    ..._316,
    ..._326,
    ..._331
  };
  export const vesting = {
    ..._183,
    ..._184
  };
  export const ClientFactory = {
    ..._335,
    ..._336,
    ..._337
  };
}