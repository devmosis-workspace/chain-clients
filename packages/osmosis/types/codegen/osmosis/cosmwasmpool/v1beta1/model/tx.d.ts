import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPool {
    codeId: Long;
    instantiateMsg: Uint8Array;
    sender: string;
}
/** ===================== MsgCreateCosmwasmPool */
export interface MsgCreateCosmWasmPoolSDKType {
    code_id: Long;
    instantiate_msg: Uint8Array;
    sender: string;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponse {
    poolId: Long;
}
/** Returns a unique poolID to identify the pool with. */
export interface MsgCreateCosmWasmPoolResponseSDKType {
    pool_id: Long;
}
export declare const MsgCreateCosmWasmPool: {
    encode(message: MsgCreateCosmWasmPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateCosmWasmPool;
    fromPartial(object: Partial<MsgCreateCosmWasmPool>): MsgCreateCosmWasmPool;
};
export declare const MsgCreateCosmWasmPoolResponse: {
    encode(message: MsgCreateCosmWasmPoolResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateCosmWasmPoolResponse;
    fromPartial(object: Partial<MsgCreateCosmWasmPoolResponse>): MsgCreateCosmWasmPoolResponse;
};
