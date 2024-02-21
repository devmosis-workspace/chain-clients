import { BinaryWriter } from "../../../../binary";
/**
 * CosmWasmPool represents the data serialized into state for each CW pool.
 *
 * Note: CW Pool has 2 pool models:
 * - CosmWasmPool which is a proto-generated store model used for serialization
 * into state.
 * - Pool struct that encapsulates the CosmWasmPool and wasmKeeper for calling
 * the contract.
 *
 * CosmWasmPool implements the poolmanager.PoolI interface but it panics on all
 * methods. The reason is that access to wasmKeeper is required to call the
 * contract.
 *
 * Instead, all interactions and poolmanager.PoolI methods are to be performed
 * on the Pool struct. The reason why we cannot have a Pool struct only is
 * because it cannot be serialized into state due to having a non-serializable
 * wasmKeeper field.
 */
export interface CosmWasmPool {
    $typeUrl?: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool";
    contractAddress: string;
    poolId: bigint;
    codeId: bigint;
    instantiateMsg: Uint8Array;
}
export interface CosmWasmPoolProtoMsg {
    typeUrl: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool";
    value: Uint8Array;
}
/**
 * CosmWasmPool represents the data serialized into state for each CW pool.
 *
 * Note: CW Pool has 2 pool models:
 * - CosmWasmPool which is a proto-generated store model used for serialization
 * into state.
 * - Pool struct that encapsulates the CosmWasmPool and wasmKeeper for calling
 * the contract.
 *
 * CosmWasmPool implements the poolmanager.PoolI interface but it panics on all
 * methods. The reason is that access to wasmKeeper is required to call the
 * contract.
 *
 * Instead, all interactions and poolmanager.PoolI methods are to be performed
 * on the Pool struct. The reason why we cannot have a Pool struct only is
 * because it cannot be serialized into state due to having a non-serializable
 * wasmKeeper field.
 */
export interface CosmWasmPoolAmino {
    contract_address?: string;
    pool_id?: string;
    code_id?: string;
    instantiate_msg?: string;
}
export interface CosmWasmPoolAminoMsg {
    type: "osmosis/cosmwasmpool/cosm-wasm-pool";
    value: CosmWasmPoolAmino;
}
/**
 * CosmWasmPool represents the data serialized into state for each CW pool.
 *
 * Note: CW Pool has 2 pool models:
 * - CosmWasmPool which is a proto-generated store model used for serialization
 * into state.
 * - Pool struct that encapsulates the CosmWasmPool and wasmKeeper for calling
 * the contract.
 *
 * CosmWasmPool implements the poolmanager.PoolI interface but it panics on all
 * methods. The reason is that access to wasmKeeper is required to call the
 * contract.
 *
 * Instead, all interactions and poolmanager.PoolI methods are to be performed
 * on the Pool struct. The reason why we cannot have a Pool struct only is
 * because it cannot be serialized into state due to having a non-serializable
 * wasmKeeper field.
 */
export interface CosmWasmPoolSDKType {
    $typeUrl?: "/osmosis.cosmwasmpool.v1beta1.CosmWasmPool";
    contract_address: string;
    pool_id: bigint;
    code_id: bigint;
    instantiate_msg: Uint8Array;
}
export declare const CosmWasmPool: {
    typeUrl: string;
    encode(message: CosmWasmPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CosmWasmPool;
    fromPartial(object: Partial<CosmWasmPool>): CosmWasmPool;
    fromAmino(object: CosmWasmPoolAmino): CosmWasmPool;
    toAmino(message: CosmWasmPool): CosmWasmPoolAmino;
    fromAminoMsg(object: CosmWasmPoolAminoMsg): CosmWasmPool;
    toAminoMsg(message: CosmWasmPool): CosmWasmPoolAminoMsg;
    fromProtoMsg(message: CosmWasmPoolProtoMsg): CosmWasmPool;
    toProto(message: CosmWasmPool): Uint8Array;
    toProtoMsg(message: CosmWasmPool): CosmWasmPoolProtoMsg;
};
