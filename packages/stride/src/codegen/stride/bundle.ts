import * as _127 from "./autopilot/genesis";
import * as _128 from "./autopilot/params";
import * as _129 from "./autopilot/query";
import * as _130 from "./claim/claim";
import * as _131 from "./claim/genesis";
import * as _132 from "./claim/params";
import * as _133 from "./claim/query";
import * as _134 from "./claim/tx";
import * as _135 from "./epochs/genesis";
import * as _136 from "./epochs/query";
import * as _137 from "./icacallbacks/callback_data";
import * as _138 from "./icacallbacks/genesis";
import * as _139 from "./icacallbacks/packet";
import * as _140 from "./icacallbacks/params";
import * as _141 from "./icacallbacks/query";
import * as _142 from "./icacallbacks/tx";
import * as _143 from "./icaoracle/callbacks";
import * as _144 from "./icaoracle/contract";
import * as _145 from "./icaoracle/genesis";
import * as _146 from "./icaoracle/icaoracle";
import * as _147 from "./icaoracle/query";
import * as _148 from "./icaoracle/tx";
import * as _149 from "./interchainquery/v1/genesis";
import * as _150 from "./interchainquery/v1/messages";
import * as _151 from "./interchainquery/v1/query";
import * as _152 from "./mint/v1beta1/genesis";
import * as _153 from "./mint/v1beta1/mint";
import * as _154 from "./mint/v1beta1/query";
import * as _155 from "./records/callbacks";
import * as _156 from "./records/genesis";
import * as _157 from "./records/params";
import * as _158 from "./records/query";
import * as _159 from "./records/records";
import * as _160 from "./stakedym/genesis";
import * as _161 from "./stakedym/query";
import * as _162 from "./stakedym/stakedym";
import * as _163 from "./stakedym/tx";
import * as _164 from "./stakeibc/address_unbonding";
import * as _165 from "./stakeibc/callbacks";
import * as _166 from "./stakeibc/epoch_tracker";
import * as _167 from "./stakeibc/genesis";
import * as _168 from "./stakeibc/gov";
import * as _169 from "./stakeibc/host_zone";
import * as _170 from "./stakeibc/ica_account";
import * as _171 from "./stakeibc/packet";
import * as _172 from "./stakeibc/params";
import * as _173 from "./stakeibc/query";
import * as _174 from "./stakeibc/trade_route";
import * as _175 from "./stakeibc/tx";
import * as _176 from "./stakeibc/validator";
import * as _177 from "./staketia/genesis";
import * as _178 from "./staketia/query";
import * as _179 from "./staketia/staketia";
import * as _180 from "./staketia/tx";
import * as _181 from "./vesting/tx";
import * as _182 from "./vesting/vesting";
import * as _302 from "./claim/tx.amino";
import * as _303 from "./icaoracle/tx.amino";
import * as _304 from "./interchainquery/v1/messages.amino";
import * as _305 from "./stakedym/tx.amino";
import * as _306 from "./stakeibc/tx.amino";
import * as _307 from "./staketia/tx.amino";
import * as _308 from "./claim/tx.registry";
import * as _309 from "./icaoracle/tx.registry";
import * as _310 from "./interchainquery/v1/messages.registry";
import * as _311 from "./stakedym/tx.registry";
import * as _312 from "./stakeibc/tx.registry";
import * as _313 from "./staketia/tx.registry";
import * as _314 from "./autopilot/query.lcd";
import * as _315 from "./claim/query.lcd";
import * as _316 from "./epochs/query.lcd";
import * as _317 from "./icacallbacks/query.lcd";
import * as _318 from "./icaoracle/query.lcd";
import * as _319 from "./mint/v1beta1/query.lcd";
import * as _320 from "./records/query.lcd";
import * as _321 from "./stakedym/query.lcd";
import * as _322 from "./stakeibc/query.lcd";
import * as _323 from "./staketia/query.lcd";
import * as _324 from "./autopilot/query.rpc.Query";
import * as _325 from "./claim/query.rpc.Query";
import * as _326 from "./epochs/query.rpc.Query";
import * as _327 from "./icacallbacks/query.rpc.Query";
import * as _328 from "./icaoracle/query.rpc.Query";
import * as _329 from "./mint/v1beta1/query.rpc.Query";
import * as _330 from "./records/query.rpc.Query";
import * as _331 from "./stakedym/query.rpc.Query";
import * as _332 from "./stakeibc/query.rpc.Query";
import * as _333 from "./staketia/query.rpc.Query";
import * as _334 from "./claim/tx.rpc.msg";
import * as _335 from "./icaoracle/tx.rpc.msg";
import * as _336 from "./interchainquery/v1/messages.rpc.msg";
import * as _337 from "./stakedym/tx.rpc.msg";
import * as _338 from "./stakeibc/tx.rpc.msg";
import * as _339 from "./staketia/tx.rpc.msg";
import * as _348 from "./lcd";
import * as _349 from "./rpc.query";
import * as _350 from "./rpc.tx";
export namespace stride {
  export const autopilot = {
    ..._127,
    ..._128,
    ..._129,
    ..._314,
    ..._324
  };
  export const claim = {
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._302,
    ..._308,
    ..._315,
    ..._325,
    ..._334
  };
  export const epochs = {
    ..._135,
    ..._136,
    ..._316,
    ..._326
  };
  export const icacallbacks = {
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._317,
    ..._327
  };
  export const icaoracle = {
    ..._143,
    ..._144,
    ..._145,
    ..._146,
    ..._147,
    ..._148,
    ..._303,
    ..._309,
    ..._318,
    ..._328,
    ..._335
  };
  export namespace interchainquery {
    export const v1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._304,
      ..._310,
      ..._336
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._152,
      ..._153,
      ..._154,
      ..._319,
      ..._329
    };
  }
  export const records = {
    ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._159,
    ..._320,
    ..._330
  };
  export const stakedym = {
    ..._160,
    ..._161,
    ..._162,
    ..._163,
    ..._305,
    ..._311,
    ..._321,
    ..._331,
    ..._337
  };
  export const stakeibc = {
    ..._164,
    ..._165,
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
    ..._306,
    ..._312,
    ..._322,
    ..._332,
    ..._338
  };
  export const staketia = {
    ..._177,
    ..._178,
    ..._179,
    ..._180,
    ..._307,
    ..._313,
    ..._323,
    ..._333,
    ..._339
  };
  export const vesting = {
    ..._181,
    ..._182
  };
  export const ClientFactory = {
    ..._348,
    ..._349,
    ..._350
  };
}