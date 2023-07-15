import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CosmWasmPool {
    contractAddress: string;
    poolId: Long;
    codeId: Long;
    instantiateMsg: Uint8Array;
}
export interface CosmWasmPoolSDKType {
    contract_address: string;
    pool_id: Long;
    code_id: Long;
    instantiate_msg: Uint8Array;
}
export declare const CosmWasmPool: {
    encode(message: CosmWasmPool, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CosmWasmPool;
    fromPartial(object: Partial<CosmWasmPool>): CosmWasmPool;
};
