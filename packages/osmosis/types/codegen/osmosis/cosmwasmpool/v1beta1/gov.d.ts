import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 */
export interface UploadCosmWasmPoolCodeAndWhiteListProposal {
    title: string;
    description: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
/**
 * UploadCosmWasmPoolCodeAndWhiteListProposal is a gov Content type for
 * uploading coswasm pool code and adding it to internal whitelist. Only the
 * code ids created by this message are eligible for being x/cosmwasmpool pools.
 */
export interface UploadCosmWasmPoolCodeAndWhiteListProposalSDKType {
    title: string;
    description: string;
    wasm_byte_code: Uint8Array;
}
/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 */
export interface MigratePoolContractsProposal {
    title: string;
    description: string;
    /**
     * pool_ids are the pool ids of the contracts to be migrated
     * either to the new_code_id that is already uploaded to chain or to
     * the given wasm_byte_code.
     */
    poolIds: Long[];
    /**
     * new_code_id is the code id of the contract code to migrate to.
     * Assumes that the code is already uploaded to chain. Only one of
     * new_code_id and wasm_byte_code should be set.
     */
    newCodeId: Long;
    /**
     * WASMByteCode can be raw or gzip compressed. Assumes that the code id
     * has not been uploaded yet so uploads the given code and migrates to it.
     * Only one of new_code_id and wasm_byte_code should be set.
     */
    wasmByteCode: Uint8Array;
    /** MigrateMsg migrate message to be used for migrating the pool contracts. */
    migrateMsg: Uint8Array;
}
/**
 * MigratePoolContractsProposal is a gov Content type for
 * migrating  given pools to the new contract code and adding to internal
 * whitelist if needed. It has two options to perform the migration:
 *
 * 1. If the codeID is non-zero, it will migrate the pool contracts to a given
 * codeID assuming that it has already been uploaded. uploadByteCode must be
 * empty in such a case. Fails if codeID does not exist. Fails if uploadByteCode
 * is not empty.
 *
 * 2. If the codeID is zero, it will upload the given uploadByteCode and use the
 * new resulting code id to migrate the pool to. Errors if uploadByteCode is
 * empty or invalid.
 *
 * In both cases, if one of the pools specified by the given poolID does not
 * exist, the proposal fails.
 *
 * The reason for having poolIDs be a slice of ids is to account for the
 * potential need for emergency migration of all old code ids associated with
 * particular pools to new code ids, or simply having the flexibility of
 * migrating multiple older pool contracts to a new one at once when there is a
 * release.
 *
 * poolD count to be submitted at once is gated by a governance paramets (20 at
 * launch). The proposal fails if more. Note that 20 was chosen arbitrarily to
 * have a constant bound on the number of pools migrated at once. This size will
 * be configured by a module parameter so it can be changed by a constant.
 */
export interface MigratePoolContractsProposalSDKType {
    title: string;
    description: string;
    pool_ids: Long[];
    new_code_id: Long;
    wasm_byte_code: Uint8Array;
    migrate_msg: Uint8Array;
}
export declare const UploadCosmWasmPoolCodeAndWhiteListProposal: {
    encode(message: UploadCosmWasmPoolCodeAndWhiteListProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UploadCosmWasmPoolCodeAndWhiteListProposal;
    fromPartial(object: Partial<UploadCosmWasmPoolCodeAndWhiteListProposal>): UploadCosmWasmPoolCodeAndWhiteListProposal;
};
export declare const MigratePoolContractsProposal: {
    encode(message: MigratePoolContractsProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MigratePoolContractsProposal;
    fromPartial(object: Partial<MigratePoolContractsProposal>): MigratePoolContractsProposal;
};
