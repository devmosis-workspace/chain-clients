import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface StoreCodeProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpinCode: boolean;
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  codeHash: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface StoreCodeProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: Long;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContract2Proposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's enviroment as sender */
  runAs: string;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encode message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /**
   * FixMsg include the msg value into the hash for the predictable address.
   * Default is false
   */
  fixMsg: boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface InstantiateContract2ProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: Long;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  salt: Uint8Array;
  fix_msg: boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface MigrateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** CodeID references the new WASM code */
  codeId: Long;
  /** Msg json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface MigrateContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
  code_id: Long;
  msg: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface SudoContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */
  msg: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface SudoContractProposalSDKType {
  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ExecuteContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ExecuteContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  contract: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** NewAdmin address to be set */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateAdminProposalSDKType {
  title: string;
  description: string;
  new_admin: string;
  contract: string;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ClearAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** Contract is the address of the smart contract */
  contract: string;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface ClearAdminProposalSDKType {
  title: string;
  description: string;
  contract: string;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface PinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the new WASM codes */
  codeIds: Long[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface PinCodesProposalSDKType {
  title: string;
  description: string;
  code_ids: Long[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UnpinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** CodeIDs references the WASM codes */
  codeIds: Long[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 */
/** @deprecated */
export interface UnpinCodesProposalSDKType {
  title: string;
  description: string;
  code_ids: Long[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
  /** CodeID is the reference to the stored WASM code to be updated */
  codeId: Long;
  /** InstantiatePermission to apply to the set of code ids */
  instantiatePermission?: AccessConfig;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdateSDKType {
  code_id: Long;
  instantiate_permission?: AccessConfigSDKType;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateInstantiateConfigProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /**
   * AccessConfigUpdate contains the list of code ids and the access config
   * to be applied.
   */
  accessConfigUpdates: AccessConfigUpdate[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface UpdateInstantiateConfigProposalSDKType {
  title: string;
  description: string;
  access_config_updates: AccessConfigUpdateSDKType[];
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface StoreAndInstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */
  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */
  runAs: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */
  instantiatePermission?: AccessConfig;
  /** UnpinCode code on upload, optional */
  unpinCode: boolean;
  /** Admin is an optional address that can execute migrations */
  admin: string;
  /** Label is optional metadata to be stored with a constract instance. */
  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */
  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */
  funds: Coin[];
  /** Source is the URL where the code is hosted */
  source: string;
  /**
   * Builder is the docker image used to build the code deterministically, used
   * for smart contract verification
   */
  builder: string;
  /**
   * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
   * contract verification
   */
  codeHash: Uint8Array;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 */
/** @deprecated */
export interface StoreAndInstantiateContractProposalSDKType {
  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission?: AccessConfigSDKType;
  unpin_code: boolean;
  admin: string;
  label: string;
  msg: Uint8Array;
  funds: CoinSDKType[];
  source: string;
  builder: string;
  code_hash: Uint8Array;
}
function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined,
    unpinCode: false,
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
export const StoreCodeProposal = {
  encode(message: StoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(64).bool(message.unpinCode);
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(82).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(90).bytes(message.codeHash);
    }
    return writer;
  },
  fromJSON(object: any): StoreCodeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined,
      unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<StoreCodeProposal>): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    message.unpinCode = object.unpinCode ?? false;
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  }
};
function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const InstantiateContractProposal = {
  encode(message: InstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): InstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseInstantiateContract2Proposal(): InstantiateContract2Proposal {
  return {
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: [],
    salt: new Uint8Array(),
    fixMsg: false
  };
}
export const InstantiateContract2Proposal = {
  encode(message: InstantiateContract2Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.salt.length !== 0) {
      writer.uint32(74).bytes(message.salt);
    }
    if (message.fixMsg === true) {
      writer.uint32(80).bool(message.fixMsg);
    }
    return writer;
  },
  fromJSON(object: any): InstantiateContract2Proposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      fixMsg: isSet(object.fixMsg) ? Boolean(object.fixMsg) : false
    };
  },
  fromPartial(object: Partial<InstantiateContract2Proposal>): InstantiateContract2Proposal {
    const message = createBaseInstantiateContract2Proposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.admin = object.admin ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.salt = object.salt ?? new Uint8Array();
    message.fixMsg = object.fixMsg ?? false;
    return message;
  }
};
function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    codeId: Long.UZERO,
    msg: new Uint8Array()
  };
}
export const MigrateContractProposal = {
  encode(message: MigrateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(40).uint64(message.codeId);
    }
    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }
    return writer;
  },
  fromJSON(object: any): MigrateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MigrateContractProposal>): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }
};
function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}
export const SudoContractProposal = {
  encode(message: SudoContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  fromJSON(object: any): SudoContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SudoContractProposal>): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }
};
function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}
export const ExecuteContractProposal = {
  encode(message: ExecuteContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ExecuteContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ExecuteContractProposal>): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    title: "",
    description: "",
    newAdmin: "",
    contract: ""
  };
}
export const UpdateAdminProposal = {
  encode(message: UpdateAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): UpdateAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  }
};
function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}
export const ClearAdminProposal = {
  encode(message: ClearAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },
  fromJSON(object: any): ClearAdminProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contract: isSet(object.contract) ? String(object.contract) : ""
    };
  },
  fromPartial(object: Partial<ClearAdminProposal>): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  }
};
function createBasePinCodesProposal(): PinCodesProposal {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}
export const PinCodesProposal = {
  encode(message: PinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): PinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<PinCodesProposal>): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    title: "",
    description: "",
    codeIds: []
  };
}
export const UnpinCodesProposal = {
  encode(message: UnpinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.codeIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): UnpinCodesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      codeIds: Array.isArray(object?.codeIds) ? object.codeIds.map((e: any) => Long.fromValue(e)) : []
    };
  },
  fromPartial(object: Partial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.codeIds = object.codeIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseAccessConfigUpdate(): AccessConfigUpdate {
  return {
    codeId: Long.UZERO,
    instantiatePermission: undefined
  };
}
export const AccessConfigUpdate = {
  encode(message: AccessConfigUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AccessConfigUpdate {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined
    };
  },
  fromPartial(object: Partial<AccessConfigUpdate>): AccessConfigUpdate {
    const message = createBaseAccessConfigUpdate();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    return message;
  }
};
function createBaseUpdateInstantiateConfigProposal(): UpdateInstantiateConfigProposal {
  return {
    title: "",
    description: "",
    accessConfigUpdates: []
  };
}
export const UpdateInstantiateConfigProposal = {
  encode(message: UpdateInstantiateConfigProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.accessConfigUpdates) {
      AccessConfigUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateInstantiateConfigProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      accessConfigUpdates: Array.isArray(object?.accessConfigUpdates) ? object.accessConfigUpdates.map((e: any) => AccessConfigUpdate.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal {
    const message = createBaseUpdateInstantiateConfigProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.accessConfigUpdates = object.accessConfigUpdates?.map(e => AccessConfigUpdate.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStoreAndInstantiateContractProposal(): StoreAndInstantiateContractProposal {
  return {
    title: "",
    description: "",
    runAs: "",
    wasmByteCode: new Uint8Array(),
    instantiatePermission: undefined,
    unpinCode: false,
    admin: "",
    label: "",
    msg: new Uint8Array(),
    funds: [],
    source: "",
    builder: "",
    codeHash: new Uint8Array()
  };
}
export const StoreAndInstantiateContractProposal = {
  encode(message: StoreAndInstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runAs !== "") {
      writer.uint32(26).string(message.runAs);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(34).bytes(message.wasmByteCode);
    }
    if (message.instantiatePermission !== undefined) {
      AccessConfig.encode(message.instantiatePermission, writer.uint32(42).fork()).ldelim();
    }
    if (message.unpinCode === true) {
      writer.uint32(48).bool(message.unpinCode);
    }
    if (message.admin !== "") {
      writer.uint32(58).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(66).string(message.label);
    }
    if (message.msg.length !== 0) {
      writer.uint32(74).bytes(message.msg);
    }
    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(90).string(message.source);
    }
    if (message.builder !== "") {
      writer.uint32(98).string(message.builder);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(106).bytes(message.codeHash);
    }
    return writer;
  },
  fromJSON(object: any): StoreAndInstantiateContractProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runAs: isSet(object.runAs) ? String(object.runAs) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
      instantiatePermission: isSet(object.instantiatePermission) ? AccessConfig.fromJSON(object.instantiatePermission) : undefined,
      unpinCode: isSet(object.unpinCode) ? Boolean(object.unpinCode) : false,
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : "",
      msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
      funds: Array.isArray(object?.funds) ? object.funds.map((e: any) => Coin.fromJSON(e)) : [],
      source: isSet(object.source) ? String(object.source) : "",
      builder: isSet(object.builder) ? String(object.builder) : "",
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<StoreAndInstantiateContractProposal>): StoreAndInstantiateContractProposal {
    const message = createBaseStoreAndInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runAs = object.runAs ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    message.instantiatePermission = object.instantiatePermission !== undefined && object.instantiatePermission !== null ? AccessConfig.fromPartial(object.instantiatePermission) : undefined;
    message.unpinCode = object.unpinCode ?? false;
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.builder = object.builder ?? "";
    message.codeHash = object.codeHash ?? new Uint8Array();
    return message;
  }
};