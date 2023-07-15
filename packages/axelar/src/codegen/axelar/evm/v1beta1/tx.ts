import { Asset, AssetSDKType, TokenDetails, TokenDetailsSDKType } from "./types";
import { KeyType, keyTypeFromJSON } from "../../tss/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface SetGatewayRequest {
  sender: Uint8Array;
  chain: string;
  address: Uint8Array;
}
export interface SetGatewayRequestSDKType {
  sender: Uint8Array;
  chain: string;
  address: Uint8Array;
}
export interface SetGatewayResponse {}
export interface SetGatewayResponseSDKType {}
export interface ConfirmGatewayTxRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
}
export interface ConfirmGatewayTxRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
}
export interface ConfirmGatewayTxResponse {}
export interface ConfirmGatewayTxResponseSDKType {}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
  /** @deprecated */
  amount: Uint8Array;
  burnerAddress: Uint8Array;
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
  /** @deprecated */
  amount: Uint8Array;
  burner_address: Uint8Array;
}
export interface ConfirmDepositResponse {}
export interface ConfirmDepositResponseSDKType {}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
  asset?: Asset;
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
  asset?: AssetSDKType;
}
export interface ConfirmTokenResponse {}
export interface ConfirmTokenResponseSDKType {}
export interface ConfirmTransferKeyRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
}
export interface ConfirmTransferKeyRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
}
export interface ConfirmTransferKeyResponse {}
export interface ConfirmTransferKeyResponseSDKType {}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequest {
  sender: Uint8Array;
  chain: string;
  recipientAddr: string;
  asset: string;
  recipientChain: string;
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequestSDKType {
  sender: Uint8Array;
  chain: string;
  recipient_addr: string;
  asset: string;
  recipient_chain: string;
}
export interface LinkResponse {
  depositAddr: string;
}
export interface LinkResponseSDKType {
  deposit_addr: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequest {
  sender: Uint8Array;
  chain: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequestSDKType {
  sender: Uint8Array;
  chain: string;
}
export interface CreateBurnTokensResponse {}
export interface CreateBurnTokensResponseSDKType {}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
  sender: Uint8Array;
  chain: string;
  asset?: Asset;
  tokenDetails?: TokenDetails;
  address: Uint8Array;
  dailyMintLimit: string;
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequestSDKType {
  sender: Uint8Array;
  chain: string;
  asset?: AssetSDKType;
  token_details?: TokenDetailsSDKType;
  address: Uint8Array;
  daily_mint_limit: string;
}
export interface CreateDeployTokenResponse {}
export interface CreateDeployTokenResponseSDKType {}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
  sender: Uint8Array;
  chain: string;
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequestSDKType {
  sender: Uint8Array;
  chain: string;
}
export interface CreatePendingTransfersResponse {}
export interface CreatePendingTransfersResponseSDKType {}
/** @deprecated */
export interface CreateTransferOwnershipRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}
/** @deprecated */
export interface CreateTransferOwnershipRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
/** @deprecated */
export interface CreateTransferOwnershipResponse {}
/** @deprecated */
export interface CreateTransferOwnershipResponseSDKType {}
export interface CreateTransferOperatorshipRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}
export interface CreateTransferOperatorshipRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
export interface CreateTransferOperatorshipResponse {}
export interface CreateTransferOperatorshipResponseSDKType {}
export interface SignCommandsRequest {
  sender: Uint8Array;
  chain: string;
}
export interface SignCommandsRequestSDKType {
  sender: Uint8Array;
  chain: string;
}
export interface SignCommandsResponse {
  batchedCommandsId: Uint8Array;
  commandCount: number;
}
export interface SignCommandsResponseSDKType {
  batched_commands_id: Uint8Array;
  command_count: number;
}
export interface AddChainRequest {
  sender: Uint8Array;
  name: string;
  /** @deprecated */
  keyType: KeyType;
  params: Uint8Array;
}
export interface AddChainRequestSDKType {
  sender: Uint8Array;
  name: string;
  /** @deprecated */
  key_type: KeyType;
  params: Uint8Array;
}
export interface AddChainResponse {}
export interface AddChainResponseSDKType {}
export interface RetryFailedEventRequest {
  sender: Uint8Array;
  chain: string;
  eventId: string;
}
export interface RetryFailedEventRequestSDKType {
  sender: Uint8Array;
  chain: string;
  event_id: string;
}
export interface RetryFailedEventResponse {}
export interface RetryFailedEventResponseSDKType {}
function createBaseSetGatewayRequest(): SetGatewayRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    address: new Uint8Array()
  };
}
export const SetGatewayRequest = {
  encode(message: SetGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.address.length !== 0) {
      writer.uint32(26).bytes(message.address);
    }
    return writer;
  },
  fromJSON(object: any): SetGatewayRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SetGatewayRequest>): SetGatewayRequest {
    const message = createBaseSetGatewayRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.address = object.address ?? new Uint8Array();
    return message;
  }
};
function createBaseSetGatewayResponse(): SetGatewayResponse {
  return {};
}
export const SetGatewayResponse = {
  encode(_: SetGatewayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): SetGatewayResponse {
    return {};
  },
  fromPartial(_: Partial<SetGatewayResponse>): SetGatewayResponse {
    const message = createBaseSetGatewayResponse();
    return message;
  }
};
function createBaseConfirmGatewayTxRequest(): ConfirmGatewayTxRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    txId: new Uint8Array()
  };
}
export const ConfirmGatewayTxRequest = {
  encode(message: ConfirmGatewayTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmGatewayTxRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ConfirmGatewayTxRequest>): ConfirmGatewayTxRequest {
    const message = createBaseConfirmGatewayTxRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    return message;
  }
};
function createBaseConfirmGatewayTxResponse(): ConfirmGatewayTxResponse {
  return {};
}
export const ConfirmGatewayTxResponse = {
  encode(_: ConfirmGatewayTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ConfirmGatewayTxResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmGatewayTxResponse>): ConfirmGatewayTxResponse {
    const message = createBaseConfirmGatewayTxResponse();
    return message;
  }
};
function createBaseConfirmDepositRequest(): ConfirmDepositRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    txId: new Uint8Array(),
    amount: new Uint8Array(),
    burnerAddress: new Uint8Array()
  };
}
export const ConfirmDepositRequest = {
  encode(message: ConfirmDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.amount.length !== 0) {
      writer.uint32(34).bytes(message.amount);
    }
    if (message.burnerAddress.length !== 0) {
      writer.uint32(42).bytes(message.burnerAddress);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmDepositRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ConfirmDepositRequest>): ConfirmDepositRequest {
    const message = createBaseConfirmDepositRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    return message;
  }
};
function createBaseConfirmDepositResponse(): ConfirmDepositResponse {
  return {};
}
export const ConfirmDepositResponse = {
  encode(_: ConfirmDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ConfirmDepositResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmDepositResponse>): ConfirmDepositResponse {
    const message = createBaseConfirmDepositResponse();
    return message;
  }
};
function createBaseConfirmTokenRequest(): ConfirmTokenRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    txId: new Uint8Array(),
    asset: undefined
  };
}
export const ConfirmTokenRequest = {
  encode(message: ConfirmTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConfirmTokenRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined
    };
  },
  fromPartial(object: Partial<ConfirmTokenRequest>): ConfirmTokenRequest {
    const message = createBaseConfirmTokenRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  }
};
function createBaseConfirmTokenResponse(): ConfirmTokenResponse {
  return {};
}
export const ConfirmTokenResponse = {
  encode(_: ConfirmTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ConfirmTokenResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmTokenResponse>): ConfirmTokenResponse {
    const message = createBaseConfirmTokenResponse();
    return message;
  }
};
function createBaseConfirmTransferKeyRequest(): ConfirmTransferKeyRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    txId: new Uint8Array()
  };
}
export const ConfirmTransferKeyRequest = {
  encode(message: ConfirmTransferKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmTransferKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<ConfirmTransferKeyRequest>): ConfirmTransferKeyRequest {
    const message = createBaseConfirmTransferKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    return message;
  }
};
function createBaseConfirmTransferKeyResponse(): ConfirmTransferKeyResponse {
  return {};
}
export const ConfirmTransferKeyResponse = {
  encode(_: ConfirmTransferKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): ConfirmTransferKeyResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmTransferKeyResponse>): ConfirmTransferKeyResponse {
    const message = createBaseConfirmTransferKeyResponse();
    return message;
  }
};
function createBaseLinkRequest(): LinkRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    recipientAddr: "",
    asset: "",
    recipientChain: ""
  };
}
export const LinkRequest = {
  encode(message: LinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.recipientAddr !== "") {
      writer.uint32(26).string(message.recipientAddr);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.recipientChain !== "") {
      writer.uint32(42).string(message.recipientChain);
    }
    return writer;
  },
  fromJSON(object: any): LinkRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : ""
    };
  },
  fromPartial(object: Partial<LinkRequest>): LinkRequest {
    const message = createBaseLinkRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.recipientAddr = object.recipientAddr ?? "";
    message.asset = object.asset ?? "";
    message.recipientChain = object.recipientChain ?? "";
    return message;
  }
};
function createBaseLinkResponse(): LinkResponse {
  return {
    depositAddr: ""
  };
}
export const LinkResponse = {
  encode(message: LinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }
    return writer;
  },
  fromJSON(object: any): LinkResponse {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : ""
    };
  },
  fromPartial(object: Partial<LinkResponse>): LinkResponse {
    const message = createBaseLinkResponse();
    message.depositAddr = object.depositAddr ?? "";
    return message;
  }
};
function createBaseCreateBurnTokensRequest(): CreateBurnTokensRequest {
  return {
    sender: new Uint8Array(),
    chain: ""
  };
}
export const CreateBurnTokensRequest = {
  encode(message: CreateBurnTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): CreateBurnTokensRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<CreateBurnTokensRequest>): CreateBurnTokensRequest {
    const message = createBaseCreateBurnTokensRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    return message;
  }
};
function createBaseCreateBurnTokensResponse(): CreateBurnTokensResponse {
  return {};
}
export const CreateBurnTokensResponse = {
  encode(_: CreateBurnTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): CreateBurnTokensResponse {
    return {};
  },
  fromPartial(_: Partial<CreateBurnTokensResponse>): CreateBurnTokensResponse {
    const message = createBaseCreateBurnTokensResponse();
    return message;
  }
};
function createBaseCreateDeployTokenRequest(): CreateDeployTokenRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    asset: undefined,
    tokenDetails: undefined,
    address: new Uint8Array(),
    dailyMintLimit: ""
  };
}
export const CreateDeployTokenRequest = {
  encode(message: CreateDeployTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenDetails !== undefined) {
      TokenDetails.encode(message.tokenDetails, writer.uint32(34).fork()).ldelim();
    }
    if (message.address.length !== 0) {
      writer.uint32(50).bytes(message.address);
    }
    if (message.dailyMintLimit !== "") {
      writer.uint32(58).string(message.dailyMintLimit);
    }
    return writer;
  },
  fromJSON(object: any): CreateDeployTokenRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      tokenDetails: isSet(object.tokenDetails) ? TokenDetails.fromJSON(object.tokenDetails) : undefined,
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      dailyMintLimit: isSet(object.dailyMintLimit) ? String(object.dailyMintLimit) : ""
    };
  },
  fromPartial(object: Partial<CreateDeployTokenRequest>): CreateDeployTokenRequest {
    const message = createBaseCreateDeployTokenRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.tokenDetails = object.tokenDetails !== undefined && object.tokenDetails !== null ? TokenDetails.fromPartial(object.tokenDetails) : undefined;
    message.address = object.address ?? new Uint8Array();
    message.dailyMintLimit = object.dailyMintLimit ?? "";
    return message;
  }
};
function createBaseCreateDeployTokenResponse(): CreateDeployTokenResponse {
  return {};
}
export const CreateDeployTokenResponse = {
  encode(_: CreateDeployTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): CreateDeployTokenResponse {
    return {};
  },
  fromPartial(_: Partial<CreateDeployTokenResponse>): CreateDeployTokenResponse {
    const message = createBaseCreateDeployTokenResponse();
    return message;
  }
};
function createBaseCreatePendingTransfersRequest(): CreatePendingTransfersRequest {
  return {
    sender: new Uint8Array(),
    chain: ""
  };
}
export const CreatePendingTransfersRequest = {
  encode(message: CreatePendingTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): CreatePendingTransfersRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<CreatePendingTransfersRequest>): CreatePendingTransfersRequest {
    const message = createBaseCreatePendingTransfersRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    return message;
  }
};
function createBaseCreatePendingTransfersResponse(): CreatePendingTransfersResponse {
  return {};
}
export const CreatePendingTransfersResponse = {
  encode(_: CreatePendingTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): CreatePendingTransfersResponse {
    return {};
  },
  fromPartial(_: Partial<CreatePendingTransfersResponse>): CreatePendingTransfersResponse {
    const message = createBaseCreatePendingTransfersResponse();
    return message;
  }
};
function createBaseCreateTransferOwnershipRequest(): CreateTransferOwnershipRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    keyId: ""
  };
}
export const CreateTransferOwnershipRequest = {
  encode(message: CreateTransferOwnershipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): CreateTransferOwnershipRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<CreateTransferOwnershipRequest>): CreateTransferOwnershipRequest {
    const message = createBaseCreateTransferOwnershipRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBaseCreateTransferOwnershipResponse(): CreateTransferOwnershipResponse {
  return {};
}
export const CreateTransferOwnershipResponse = {
  encode(_: CreateTransferOwnershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): CreateTransferOwnershipResponse {
    return {};
  },
  fromPartial(_: Partial<CreateTransferOwnershipResponse>): CreateTransferOwnershipResponse {
    const message = createBaseCreateTransferOwnershipResponse();
    return message;
  }
};
function createBaseCreateTransferOperatorshipRequest(): CreateTransferOperatorshipRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    keyId: ""
  };
}
export const CreateTransferOperatorshipRequest = {
  encode(message: CreateTransferOperatorshipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    return writer;
  },
  fromJSON(object: any): CreateTransferOperatorshipRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },
  fromPartial(object: Partial<CreateTransferOperatorshipRequest>): CreateTransferOperatorshipRequest {
    const message = createBaseCreateTransferOperatorshipRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }
};
function createBaseCreateTransferOperatorshipResponse(): CreateTransferOperatorshipResponse {
  return {};
}
export const CreateTransferOperatorshipResponse = {
  encode(_: CreateTransferOperatorshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): CreateTransferOperatorshipResponse {
    return {};
  },
  fromPartial(_: Partial<CreateTransferOperatorshipResponse>): CreateTransferOperatorshipResponse {
    const message = createBaseCreateTransferOperatorshipResponse();
    return message;
  }
};
function createBaseSignCommandsRequest(): SignCommandsRequest {
  return {
    sender: new Uint8Array(),
    chain: ""
  };
}
export const SignCommandsRequest = {
  encode(message: SignCommandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    return writer;
  },
  fromJSON(object: any): SignCommandsRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : ""
    };
  },
  fromPartial(object: Partial<SignCommandsRequest>): SignCommandsRequest {
    const message = createBaseSignCommandsRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    return message;
  }
};
function createBaseSignCommandsResponse(): SignCommandsResponse {
  return {
    batchedCommandsId: new Uint8Array(),
    commandCount: 0
  };
}
export const SignCommandsResponse = {
  encode(message: SignCommandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchedCommandsId.length !== 0) {
      writer.uint32(10).bytes(message.batchedCommandsId);
    }
    if (message.commandCount !== 0) {
      writer.uint32(16).uint32(message.commandCount);
    }
    return writer;
  },
  fromJSON(object: any): SignCommandsResponse {
    return {
      batchedCommandsId: isSet(object.batchedCommandsId) ? bytesFromBase64(object.batchedCommandsId) : new Uint8Array(),
      commandCount: isSet(object.commandCount) ? Number(object.commandCount) : 0
    };
  },
  fromPartial(object: Partial<SignCommandsResponse>): SignCommandsResponse {
    const message = createBaseSignCommandsResponse();
    message.batchedCommandsId = object.batchedCommandsId ?? new Uint8Array();
    message.commandCount = object.commandCount ?? 0;
    return message;
  }
};
function createBaseAddChainRequest(): AddChainRequest {
  return {
    sender: new Uint8Array(),
    name: "",
    keyType: 0,
    params: new Uint8Array()
  };
}
export const AddChainRequest = {
  encode(message: AddChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.keyType !== 0) {
      writer.uint32(32).int32(message.keyType);
    }
    if (message.params.length !== 0) {
      writer.uint32(42).bytes(message.params);
    }
    return writer;
  },
  fromJSON(object: any): AddChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      name: isSet(object.name) ? String(object.name) : "",
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<AddChainRequest>): AddChainRequest {
    const message = createBaseAddChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.name = object.name ?? "";
    message.keyType = object.keyType ?? 0;
    message.params = object.params ?? new Uint8Array();
    return message;
  }
};
function createBaseAddChainResponse(): AddChainResponse {
  return {};
}
export const AddChainResponse = {
  encode(_: AddChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): AddChainResponse {
    return {};
  },
  fromPartial(_: Partial<AddChainResponse>): AddChainResponse {
    const message = createBaseAddChainResponse();
    return message;
  }
};
function createBaseRetryFailedEventRequest(): RetryFailedEventRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    eventId: ""
  };
}
export const RetryFailedEventRequest = {
  encode(message: RetryFailedEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    return writer;
  },
  fromJSON(object: any): RetryFailedEventRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : ""
    };
  },
  fromPartial(object: Partial<RetryFailedEventRequest>): RetryFailedEventRequest {
    const message = createBaseRetryFailedEventRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  }
};
function createBaseRetryFailedEventResponse(): RetryFailedEventResponse {
  return {};
}
export const RetryFailedEventResponse = {
  encode(_: RetryFailedEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RetryFailedEventResponse {
    return {};
  },
  fromPartial(_: Partial<RetryFailedEventResponse>): RetryFailedEventResponse {
    const message = createBaseRetryFailedEventResponse();
    return message;
  }
};