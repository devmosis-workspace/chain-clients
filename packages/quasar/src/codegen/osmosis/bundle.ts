import * as _19 from "./epochs/genesis";
import * as _20 from "./epochs/query";
import * as _21 from "./gamm/pool-models/balancer/balancerPool";
import * as _22 from "./gamm/v1beta1/query";
import * as _23 from "./gamm/v1beta1/tx";
import * as _24 from "./gamm/pool-models/balancer/tx/tx";
import * as _25 from "./incentives/gauge";
import * as _26 from "./lockup/lock";
import * as _27 from "./lockup/tx";
import * as _28 from "./mint/v1beta1/mint";
import * as _29 from "./mint/v1beta1/query";
import * as _30 from "./pool-incentives/v1beta1/incentives";
import * as _31 from "./pool-incentives/v1beta1/query";
import * as _181 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _182 from "./gamm/v1beta1/tx.amino";
import * as _183 from "./lockup/tx.amino";
import * as _184 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _185 from "./gamm/v1beta1/tx.registry";
import * as _186 from "./lockup/tx.registry";
import * as _187 from "./epochs/query.lcd";
import * as _188 from "./gamm/v1beta1/query.lcd";
import * as _189 from "./mint/v1beta1/query.lcd";
import * as _190 from "./pool-incentives/v1beta1/query.lcd";
import * as _191 from "./epochs/query.rpc.Query";
import * as _192 from "./gamm/v1beta1/query.rpc.Query";
import * as _193 from "./mint/v1beta1/query.rpc.Query";
import * as _194 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _195 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _196 from "./gamm/v1beta1/tx.rpc.msg";
import * as _197 from "./lockup/tx.rpc.msg";
import * as _290 from "./lcd";
import * as _291 from "./rpc.query";
import * as _292 from "./rpc.tx";
export namespace osmosis {
  export namespace epochs {
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._187,
      ..._191
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._182,
      ..._185,
      ..._188,
      ..._192,
      ..._196
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._24,
          ..._181,
          ..._184,
          ..._195
        };
      }
    }
  }
  export const incentives = {
    ..._25
  };
  export const lockup = {
    ..._26,
    ..._27,
    ..._183,
    ..._186,
    ..._197
  };
  export namespace mint {
    export const v1beta1 = {
      ..._28,
      ..._29,
      ..._189,
      ..._193
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._30,
      ..._31,
      ..._190,
      ..._194
    };
  }
  export const ClientFactory = {
    ..._290,
    ..._291,
    ..._292
  };
}