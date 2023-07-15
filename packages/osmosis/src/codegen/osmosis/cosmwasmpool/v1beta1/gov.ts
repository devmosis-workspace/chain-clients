import { Long, isSet, bytesFromBase64 } from "../../../helpers";
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
function createBaseUploadCosmWasmPoolCodeAndWhiteListProposal(): UploadCosmWasmPoolCodeAndWhiteListProposal {
  return {
    title: "",
    description: "",
    wasmByteCode: new Uint8Array()
  };
}
export const UploadCosmWasmPoolCodeAndWhiteListProposal = {
  encode(message: UploadCosmWasmPoolCodeAndWhiteListProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    return writer;
  },
  fromJSON(object: any): UploadCosmWasmPoolCodeAndWhiteListProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<UploadCosmWasmPoolCodeAndWhiteListProposal>): UploadCosmWasmPoolCodeAndWhiteListProposal {
    const message = createBaseUploadCosmWasmPoolCodeAndWhiteListProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    return message;
  }
};
function createBaseMigratePoolContractsProposal(): MigratePoolContractsProposal {
  return {
    title: "",
    description: "",
    poolIds: [],
    newCodeId: Long.UZERO,
    wasmByteCode: new Uint8Array(),
    migrateMsg: new Uint8Array()
  };
}
export const MigratePoolContractsProposal = {
  encode(message: MigratePoolContractsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.poolIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.newCodeId.isZero()) {
      writer.uint32(32).uint64(message.newCodeId);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(42).bytes(message.wasmByteCode);
    }
    if (message.migrateMsg.length !== 0) {
      writer.uint32(50).bytes(message.migrateMsg);
    }
    return writer;
  },
  fromJSON(object: any): MigratePoolContractsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      poolIds: Array.isArray(object?.poolIds) ? object.poolIds.map((e: any) => Long.fromValue(e)) : [],
      newCodeId: isSet(object.newCodeId) ? Long.fromValue(object.newCodeId) : Long.UZERO,
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      migrateMsg: isSet(object.migrateMsg) ? bytesFromBase64(object.migrateMsg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MigratePoolContractsProposal>): MigratePoolContractsProposal {
    const message = createBaseMigratePoolContractsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.poolIds = object.poolIds?.map(e => Long.fromValue(e)) || [];
    message.newCodeId = object.newCodeId !== undefined && object.newCodeId !== null ? Long.fromValue(object.newCodeId) : Long.UZERO;
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.migrateMsg = object.migrateMsg ?? new Uint8Array();
    return message;
  }
};