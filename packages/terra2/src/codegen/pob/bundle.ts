import * as _136 from "./builder/v1/genesis";
import * as _137 from "./builder/v1/tx";
import * as _268 from "./builder/v1/tx.amino";
import * as _269 from "./builder/v1/tx.registry";
import * as _270 from "./builder/v1/tx.rpc.msg";
import * as _285 from "./rpc.tx";
export namespace pob {
  export namespace builder {
    export const v1 = {
      ..._136,
      ..._137,
      ..._268,
      ..._269,
      ..._270
    };
  }
  export const ClientFactory = {
    ..._285
  };
}