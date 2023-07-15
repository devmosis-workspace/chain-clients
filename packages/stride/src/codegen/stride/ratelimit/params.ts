import * as _m0 from "protobufjs/minimal";
/** Params defines the ratelimit module's parameters. */
export interface Params {}
/** Params defines the ratelimit module's parameters. */
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