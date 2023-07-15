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
export declare const InstantiateMsg: {
    encode(message: InstantiateMsg, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InstantiateMsg;
    fromPartial(object: Partial<InstantiateMsg>): InstantiateMsg;
};
