import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {}
function createBaseParams(): Params {
  return {};
}
export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): Params {
    return {};
  },
  fromPartial(_: Partial<Params>): Params {
    const message = createBaseParams();
    return message;
  }
};