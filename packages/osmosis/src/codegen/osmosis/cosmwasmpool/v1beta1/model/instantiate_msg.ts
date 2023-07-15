import * as _m0 from "protobufjs/minimal";
/** ===================== InstantiateMsg */
export interface InstantiateMsg {
  /**
   * pool_asset_denoms is the list of asset denoms that are initialized
   * at pool creation time.
   */
  poolAssetDenoms: string[];
}
/** ===================== InstantiateMsg */
export interface InstantiateMsgSDKType {
  pool_asset_denoms: string[];
}
function createBaseInstantiateMsg(): InstantiateMsg {
  return {
    poolAssetDenoms: []
  };
}
export const InstantiateMsg = {
  encode(message: InstantiateMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolAssetDenoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): InstantiateMsg {
    return {
      poolAssetDenoms: Array.isArray(object?.poolAssetDenoms) ? object.poolAssetDenoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<InstantiateMsg>): InstantiateMsg {
    const message = createBaseInstantiateMsg();
    message.poolAssetDenoms = object.poolAssetDenoms?.map(e => e) || [];
    return message;
  }
};