import { StoreCodeProposal, StoreCodeProposalSDKType } from "../../../cosmwasm/wasm/v1/proposal";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export enum FundingMode {
  Unspecified = 0,
  SelfFunded = 1,
  GrantOnly = 2,
  Dual = 3,
  UNRECOGNIZED = -1,
}
export const FundingModeSDKType = FundingMode;
export function fundingModeFromJSON(object: any): FundingMode {
  switch (object) {
    case 0:
    case "Unspecified":
      return FundingMode.Unspecified;
    case 1:
    case "SelfFunded":
      return FundingMode.SelfFunded;
    case 2:
    case "GrantOnly":
      return FundingMode.GrantOnly;
    case 3:
    case "Dual":
      return FundingMode.Dual;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FundingMode.UNRECOGNIZED;
  }
}
export function fundingModeToJSON(object: FundingMode): string {
  switch (object) {
    case FundingMode.Unspecified:
      return "Unspecified";
    case FundingMode.SelfFunded:
      return "SelfFunded";
    case FundingMode.GrantOnly:
      return "GrantOnly";
    case FundingMode.Dual:
      return "Dual";
    case FundingMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ContractRegistrationRequestProposal {
  title: string;
  description: string;
  contractRegistrationRequest?: ContractRegistrationRequest;
}
export interface ContractRegistrationRequestProposalSDKType {
  title: string;
  description: string;
  contract_registration_request?: ContractRegistrationRequestSDKType;
}
export interface BatchContractRegistrationRequestProposal {
  title: string;
  description: string;
  contractRegistrationRequests: ContractRegistrationRequest[];
}
export interface BatchContractRegistrationRequestProposalSDKType {
  title: string;
  description: string;
  contract_registration_requests: ContractRegistrationRequestSDKType[];
}
export interface BatchContractDeregistrationProposal {
  title: string;
  description: string;
  contracts: string[];
}
export interface BatchContractDeregistrationProposalSDKType {
  title: string;
  description: string;
  contracts: string[];
}
export interface ContractRegistrationRequest {
  /** Unique Identifier for contract instance to be registered. */
  contractAddress: string;
  /** Maximum gas to be used for the smart contract execution. */
  gasLimit: Long;
  /** gas price to be used for the smart contract execution. */
  gasPrice: Long;
  shouldPinContract: boolean;
  /**
   * if true contract owner can update it, if false only current code_id will be
   * allowed to be executed
   */
  isMigrationAllowed: boolean;
  /**
   * code_id of the contract being registered - will be verified upon every
   * execution but only if is_migration_allowed is false
   */
  codeId: Long;
  /**
   * Optional address of admin account (that will be allowed to pause or update
   * contract params)
   */
  adminAddress: string;
  /**
   * Optional address of the contract that grants fees. Must be set if
   * funding_mode is other than SelfFunded
   */
  granterAddress: string;
  /** Specifies how the contract will fund its execution */
  fundingMode: FundingMode;
}
export interface ContractRegistrationRequestSDKType {
  contract_address: string;
  gas_limit: Long;
  gas_price: Long;
  should_pin_contract: boolean;
  is_migration_allowed: boolean;
  code_id: Long;
  admin_address: string;
  granter_address: string;
  funding_mode: FundingMode;
}
export interface BatchStoreCodeProposal {
  title: string;
  description: string;
  proposals: StoreCodeProposal[];
}
export interface BatchStoreCodeProposalSDKType {
  title: string;
  description: string;
  proposals: StoreCodeProposalSDKType[];
}
function createBaseContractRegistrationRequestProposal(): ContractRegistrationRequestProposal {
  return {
    title: "",
    description: "",
    contractRegistrationRequest: undefined
  };
}
export const ContractRegistrationRequestProposal = {
  encode(message: ContractRegistrationRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractRegistrationRequest !== undefined) {
      ContractRegistrationRequest.encode(message.contractRegistrationRequest, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ContractRegistrationRequestProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contractRegistrationRequest: isSet(object.contractRegistrationRequest) ? ContractRegistrationRequest.fromJSON(object.contractRegistrationRequest) : undefined
    };
  },
  fromPartial(object: Partial<ContractRegistrationRequestProposal>): ContractRegistrationRequestProposal {
    const message = createBaseContractRegistrationRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractRegistrationRequest = object.contractRegistrationRequest !== undefined && object.contractRegistrationRequest !== null ? ContractRegistrationRequest.fromPartial(object.contractRegistrationRequest) : undefined;
    return message;
  }
};
function createBaseBatchContractRegistrationRequestProposal(): BatchContractRegistrationRequestProposal {
  return {
    title: "",
    description: "",
    contractRegistrationRequests: []
  };
}
export const BatchContractRegistrationRequestProposal = {
  encode(message: BatchContractRegistrationRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.contractRegistrationRequests) {
      ContractRegistrationRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BatchContractRegistrationRequestProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contractRegistrationRequests: Array.isArray(object?.contractRegistrationRequests) ? object.contractRegistrationRequests.map((e: any) => ContractRegistrationRequest.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BatchContractRegistrationRequestProposal>): BatchContractRegistrationRequestProposal {
    const message = createBaseBatchContractRegistrationRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractRegistrationRequests = object.contractRegistrationRequests?.map(e => ContractRegistrationRequest.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBatchContractDeregistrationProposal(): BatchContractDeregistrationProposal {
  return {
    title: "",
    description: "",
    contracts: []
  };
}
export const BatchContractDeregistrationProposal = {
  encode(message: BatchContractDeregistrationProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.contracts) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): BatchContractDeregistrationProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<BatchContractDeregistrationProposal>): BatchContractDeregistrationProposal {
    const message = createBaseBatchContractDeregistrationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contracts = object.contracts?.map(e => e) || [];
    return message;
  }
};
function createBaseContractRegistrationRequest(): ContractRegistrationRequest {
  return {
    contractAddress: "",
    gasLimit: Long.UZERO,
    gasPrice: Long.UZERO,
    shouldPinContract: false,
    isMigrationAllowed: false,
    codeId: Long.UZERO,
    adminAddress: "",
    granterAddress: "",
    fundingMode: 0
  };
}
export const ContractRegistrationRequest = {
  encode(message: ContractRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (!message.gasLimit.isZero()) {
      writer.uint32(16).uint64(message.gasLimit);
    }
    if (!message.gasPrice.isZero()) {
      writer.uint32(24).uint64(message.gasPrice);
    }
    if (message.shouldPinContract === true) {
      writer.uint32(32).bool(message.shouldPinContract);
    }
    if (message.isMigrationAllowed === true) {
      writer.uint32(40).bool(message.isMigrationAllowed);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(48).uint64(message.codeId);
    }
    if (message.adminAddress !== "") {
      writer.uint32(58).string(message.adminAddress);
    }
    if (message.granterAddress !== "") {
      writer.uint32(66).string(message.granterAddress);
    }
    if (message.fundingMode !== 0) {
      writer.uint32(72).int32(message.fundingMode);
    }
    return writer;
  },
  fromJSON(object: any): ContractRegistrationRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      gasLimit: isSet(object.gasLimit) ? Long.fromValue(object.gasLimit) : Long.UZERO,
      gasPrice: isSet(object.gasPrice) ? Long.fromValue(object.gasPrice) : Long.UZERO,
      shouldPinContract: isSet(object.shouldPinContract) ? Boolean(object.shouldPinContract) : false,
      isMigrationAllowed: isSet(object.isMigrationAllowed) ? Boolean(object.isMigrationAllowed) : false,
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      adminAddress: isSet(object.adminAddress) ? String(object.adminAddress) : "",
      granterAddress: isSet(object.granterAddress) ? String(object.granterAddress) : "",
      fundingMode: isSet(object.fundingMode) ? fundingModeFromJSON(object.fundingMode) : 0
    };
  },
  fromPartial(object: Partial<ContractRegistrationRequest>): ContractRegistrationRequest {
    const message = createBaseContractRegistrationRequest();
    message.contractAddress = object.contractAddress ?? "";
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? Long.fromValue(object.gasPrice) : Long.UZERO;
    message.shouldPinContract = object.shouldPinContract ?? false;
    message.isMigrationAllowed = object.isMigrationAllowed ?? false;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.adminAddress = object.adminAddress ?? "";
    message.granterAddress = object.granterAddress ?? "";
    message.fundingMode = object.fundingMode ?? 0;
    return message;
  }
};
function createBaseBatchStoreCodeProposal(): BatchStoreCodeProposal {
  return {
    title: "",
    description: "",
    proposals: []
  };
}
export const BatchStoreCodeProposal = {
  encode(message: BatchStoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.proposals) {
      StoreCodeProposal.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BatchStoreCodeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => StoreCodeProposal.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<BatchStoreCodeProposal>): BatchStoreCodeProposal {
    const message = createBaseBatchStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.proposals = object.proposals?.map(e => StoreCodeProposal.fromPartial(e)) || [];
    return message;
  }
};