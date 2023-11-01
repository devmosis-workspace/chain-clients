import { Asset, AssetAmino, AssetSDKType, TokenDetails, TokenDetailsAmino, TokenDetailsSDKType } from "./types";
import { KeyType, keyTypeFromJSON } from "../../tss/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface SetGatewayRequest {
  sender: Uint8Array;
  chain: string;
  address: Uint8Array;
}
export interface SetGatewayRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.SetGatewayRequest";
  value: Uint8Array;
}
export interface SetGatewayRequestAmino {
  sender: Uint8Array;
  chain: string;
  address: Uint8Array;
}
export interface SetGatewayRequestAminoMsg {
  type: "/axelar.evm.v1beta1.SetGatewayRequest";
  value: SetGatewayRequestAmino;
}
export interface SetGatewayRequestSDKType {
  sender: Uint8Array;
  chain: string;
  address: Uint8Array;
}
export interface SetGatewayResponse {}
export interface SetGatewayResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.SetGatewayResponse";
  value: Uint8Array;
}
export interface SetGatewayResponseAmino {}
export interface SetGatewayResponseAminoMsg {
  type: "/axelar.evm.v1beta1.SetGatewayResponse";
  value: SetGatewayResponseAmino;
}
export interface SetGatewayResponseSDKType {}
/** @deprecated */
export interface ConfirmGatewayTxRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
}
export interface ConfirmGatewayTxRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest";
  value: Uint8Array;
}
/** @deprecated */
export interface ConfirmGatewayTxRequestAmino {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
}
export interface ConfirmGatewayTxRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest";
  value: ConfirmGatewayTxRequestAmino;
}
/** @deprecated */
export interface ConfirmGatewayTxRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
}
/** @deprecated */
export interface ConfirmGatewayTxResponse {}
export interface ConfirmGatewayTxResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface ConfirmGatewayTxResponseAmino {}
export interface ConfirmGatewayTxResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse";
  value: ConfirmGatewayTxResponseAmino;
}
/** @deprecated */
export interface ConfirmGatewayTxResponseSDKType {}
export interface ConfirmGatewayTxsRequest {
  sender: Uint8Array;
  chain: string;
  txIds: Uint8Array[];
}
export interface ConfirmGatewayTxsRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsRequest";
  value: Uint8Array;
}
export interface ConfirmGatewayTxsRequestAmino {
  sender: Uint8Array;
  chain: string;
  tx_ids: Uint8Array[];
}
export interface ConfirmGatewayTxsRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmGatewayTxsRequest";
  value: ConfirmGatewayTxsRequestAmino;
}
export interface ConfirmGatewayTxsRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_ids: Uint8Array[];
}
export interface ConfirmGatewayTxsResponse {}
export interface ConfirmGatewayTxsResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsResponse";
  value: Uint8Array;
}
export interface ConfirmGatewayTxsResponseAmino {}
export interface ConfirmGatewayTxsResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmGatewayTxsResponse";
  value: ConfirmGatewayTxsResponseAmino;
}
export interface ConfirmGatewayTxsResponseSDKType {}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
  /** @deprecated */
  amount: Uint8Array;
  burnerAddress: Uint8Array;
}
export interface ConfirmDepositRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmDepositRequest";
  value: Uint8Array;
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequestAmino {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
  /** @deprecated */
  amount: Uint8Array;
  burner_address: Uint8Array;
}
export interface ConfirmDepositRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmDepositRequest";
  value: ConfirmDepositRequestAmino;
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
export interface ConfirmDepositResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmDepositResponse";
  value: Uint8Array;
}
export interface ConfirmDepositResponseAmino {}
export interface ConfirmDepositResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmDepositResponse";
  value: ConfirmDepositResponseAmino;
}
export interface ConfirmDepositResponseSDKType {}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
  asset: Asset;
}
export interface ConfirmTokenRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTokenRequest";
  value: Uint8Array;
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequestAmino {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
  asset?: AssetAmino;
}
export interface ConfirmTokenRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmTokenRequest";
  value: ConfirmTokenRequestAmino;
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
  asset: AssetSDKType;
}
export interface ConfirmTokenResponse {}
export interface ConfirmTokenResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTokenResponse";
  value: Uint8Array;
}
export interface ConfirmTokenResponseAmino {}
export interface ConfirmTokenResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmTokenResponse";
  value: ConfirmTokenResponseAmino;
}
export interface ConfirmTokenResponseSDKType {}
export interface ConfirmTransferKeyRequest {
  sender: Uint8Array;
  chain: string;
  txId: Uint8Array;
}
export interface ConfirmTransferKeyRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest";
  value: Uint8Array;
}
export interface ConfirmTransferKeyRequestAmino {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
}
export interface ConfirmTransferKeyRequestAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest";
  value: ConfirmTransferKeyRequestAmino;
}
export interface ConfirmTransferKeyRequestSDKType {
  sender: Uint8Array;
  chain: string;
  tx_id: Uint8Array;
}
export interface ConfirmTransferKeyResponse {}
export interface ConfirmTransferKeyResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse";
  value: Uint8Array;
}
export interface ConfirmTransferKeyResponseAmino {}
export interface ConfirmTransferKeyResponseAminoMsg {
  type: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse";
  value: ConfirmTransferKeyResponseAmino;
}
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
export interface LinkRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.LinkRequest";
  value: Uint8Array;
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequestAmino {
  sender: Uint8Array;
  chain: string;
  recipient_addr: string;
  asset: string;
  recipient_chain: string;
}
export interface LinkRequestAminoMsg {
  type: "/axelar.evm.v1beta1.LinkRequest";
  value: LinkRequestAmino;
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
export interface LinkResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.LinkResponse";
  value: Uint8Array;
}
export interface LinkResponseAmino {
  deposit_addr: string;
}
export interface LinkResponseAminoMsg {
  type: "/axelar.evm.v1beta1.LinkResponse";
  value: LinkResponseAmino;
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
export interface CreateBurnTokensRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensRequest";
  value: Uint8Array;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequestAmino {
  sender: Uint8Array;
  chain: string;
}
export interface CreateBurnTokensRequestAminoMsg {
  type: "/axelar.evm.v1beta1.CreateBurnTokensRequest";
  value: CreateBurnTokensRequestAmino;
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
export interface CreateBurnTokensResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensResponse";
  value: Uint8Array;
}
export interface CreateBurnTokensResponseAmino {}
export interface CreateBurnTokensResponseAminoMsg {
  type: "/axelar.evm.v1beta1.CreateBurnTokensResponse";
  value: CreateBurnTokensResponseAmino;
}
export interface CreateBurnTokensResponseSDKType {}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
  sender: Uint8Array;
  chain: string;
  asset: Asset;
  tokenDetails: TokenDetails;
  address: Uint8Array;
  dailyMintLimit: string;
}
export interface CreateDeployTokenRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenRequest";
  value: Uint8Array;
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequestAmino {
  sender: Uint8Array;
  chain: string;
  asset?: AssetAmino;
  token_details?: TokenDetailsAmino;
  address: Uint8Array;
  daily_mint_limit: string;
}
export interface CreateDeployTokenRequestAminoMsg {
  type: "/axelar.evm.v1beta1.CreateDeployTokenRequest";
  value: CreateDeployTokenRequestAmino;
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequestSDKType {
  sender: Uint8Array;
  chain: string;
  asset: AssetSDKType;
  token_details: TokenDetailsSDKType;
  address: Uint8Array;
  daily_mint_limit: string;
}
export interface CreateDeployTokenResponse {}
export interface CreateDeployTokenResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenResponse";
  value: Uint8Array;
}
export interface CreateDeployTokenResponseAmino {}
export interface CreateDeployTokenResponseAminoMsg {
  type: "/axelar.evm.v1beta1.CreateDeployTokenResponse";
  value: CreateDeployTokenResponseAmino;
}
export interface CreateDeployTokenResponseSDKType {}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
  sender: Uint8Array;
  chain: string;
}
export interface CreatePendingTransfersRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersRequest";
  value: Uint8Array;
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequestAmino {
  sender: Uint8Array;
  chain: string;
}
export interface CreatePendingTransfersRequestAminoMsg {
  type: "/axelar.evm.v1beta1.CreatePendingTransfersRequest";
  value: CreatePendingTransfersRequestAmino;
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
export interface CreatePendingTransfersResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersResponse";
  value: Uint8Array;
}
export interface CreatePendingTransfersResponseAmino {}
export interface CreatePendingTransfersResponseAminoMsg {
  type: "/axelar.evm.v1beta1.CreatePendingTransfersResponse";
  value: CreatePendingTransfersResponseAmino;
}
export interface CreatePendingTransfersResponseSDKType {}
/** @deprecated */
export interface CreateTransferOwnershipRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}
export interface CreateTransferOwnershipRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest";
  value: Uint8Array;
}
/** @deprecated */
export interface CreateTransferOwnershipRequestAmino {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
export interface CreateTransferOwnershipRequestAminoMsg {
  type: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest";
  value: CreateTransferOwnershipRequestAmino;
}
/** @deprecated */
export interface CreateTransferOwnershipRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
/** @deprecated */
export interface CreateTransferOwnershipResponse {}
export interface CreateTransferOwnershipResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse";
  value: Uint8Array;
}
/** @deprecated */
export interface CreateTransferOwnershipResponseAmino {}
export interface CreateTransferOwnershipResponseAminoMsg {
  type: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse";
  value: CreateTransferOwnershipResponseAmino;
}
/** @deprecated */
export interface CreateTransferOwnershipResponseSDKType {}
export interface CreateTransferOperatorshipRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}
export interface CreateTransferOperatorshipRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest";
  value: Uint8Array;
}
export interface CreateTransferOperatorshipRequestAmino {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
export interface CreateTransferOperatorshipRequestAminoMsg {
  type: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest";
  value: CreateTransferOperatorshipRequestAmino;
}
export interface CreateTransferOperatorshipRequestSDKType {
  sender: Uint8Array;
  chain: string;
  key_id: string;
}
export interface CreateTransferOperatorshipResponse {}
export interface CreateTransferOperatorshipResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse";
  value: Uint8Array;
}
export interface CreateTransferOperatorshipResponseAmino {}
export interface CreateTransferOperatorshipResponseAminoMsg {
  type: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse";
  value: CreateTransferOperatorshipResponseAmino;
}
export interface CreateTransferOperatorshipResponseSDKType {}
export interface SignCommandsRequest {
  sender: Uint8Array;
  chain: string;
}
export interface SignCommandsRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.SignCommandsRequest";
  value: Uint8Array;
}
export interface SignCommandsRequestAmino {
  sender: Uint8Array;
  chain: string;
}
export interface SignCommandsRequestAminoMsg {
  type: "/axelar.evm.v1beta1.SignCommandsRequest";
  value: SignCommandsRequestAmino;
}
export interface SignCommandsRequestSDKType {
  sender: Uint8Array;
  chain: string;
}
export interface SignCommandsResponse {
  batchedCommandsId: Uint8Array;
  commandCount: number;
}
export interface SignCommandsResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.SignCommandsResponse";
  value: Uint8Array;
}
export interface SignCommandsResponseAmino {
  batched_commands_id: Uint8Array;
  command_count: number;
}
export interface SignCommandsResponseAminoMsg {
  type: "/axelar.evm.v1beta1.SignCommandsResponse";
  value: SignCommandsResponseAmino;
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
export interface AddChainRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.AddChainRequest";
  value: Uint8Array;
}
export interface AddChainRequestAmino {
  sender: Uint8Array;
  name: string;
  /** @deprecated */
  key_type: KeyType;
  params: Uint8Array;
}
export interface AddChainRequestAminoMsg {
  type: "/axelar.evm.v1beta1.AddChainRequest";
  value: AddChainRequestAmino;
}
export interface AddChainRequestSDKType {
  sender: Uint8Array;
  name: string;
  /** @deprecated */
  key_type: KeyType;
  params: Uint8Array;
}
export interface AddChainResponse {}
export interface AddChainResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.AddChainResponse";
  value: Uint8Array;
}
export interface AddChainResponseAmino {}
export interface AddChainResponseAminoMsg {
  type: "/axelar.evm.v1beta1.AddChainResponse";
  value: AddChainResponseAmino;
}
export interface AddChainResponseSDKType {}
export interface RetryFailedEventRequest {
  sender: Uint8Array;
  chain: string;
  eventId: string;
}
export interface RetryFailedEventRequestProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.RetryFailedEventRequest";
  value: Uint8Array;
}
export interface RetryFailedEventRequestAmino {
  sender: Uint8Array;
  chain: string;
  event_id: string;
}
export interface RetryFailedEventRequestAminoMsg {
  type: "/axelar.evm.v1beta1.RetryFailedEventRequest";
  value: RetryFailedEventRequestAmino;
}
export interface RetryFailedEventRequestSDKType {
  sender: Uint8Array;
  chain: string;
  event_id: string;
}
export interface RetryFailedEventResponse {}
export interface RetryFailedEventResponseProtoMsg {
  typeUrl: "/axelar.evm.v1beta1.RetryFailedEventResponse";
  value: Uint8Array;
}
export interface RetryFailedEventResponseAmino {}
export interface RetryFailedEventResponseAminoMsg {
  type: "/axelar.evm.v1beta1.RetryFailedEventResponse";
  value: RetryFailedEventResponseAmino;
}
export interface RetryFailedEventResponseSDKType {}
function createBaseSetGatewayRequest(): SetGatewayRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    address: new Uint8Array()
  };
}
export const SetGatewayRequest = {
  typeUrl: "/axelar.evm.v1beta1.SetGatewayRequest",
  encode(message: SetGatewayRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SetGatewayRequestAmino): SetGatewayRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      address: object.address
    };
  },
  toAmino(message: SetGatewayRequest): SetGatewayRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: SetGatewayRequestAminoMsg): SetGatewayRequest {
    return SetGatewayRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SetGatewayRequestProtoMsg): SetGatewayRequest {
    return SetGatewayRequest.decode(message.value);
  },
  toProto(message: SetGatewayRequest): Uint8Array {
    return SetGatewayRequest.encode(message).finish();
  },
  toProtoMsg(message: SetGatewayRequest): SetGatewayRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.SetGatewayRequest",
      value: SetGatewayRequest.encode(message).finish()
    };
  }
};
function createBaseSetGatewayResponse(): SetGatewayResponse {
  return {};
}
export const SetGatewayResponse = {
  typeUrl: "/axelar.evm.v1beta1.SetGatewayResponse",
  encode(_: SetGatewayResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): SetGatewayResponse {
    return {};
  },
  fromPartial(_: Partial<SetGatewayResponse>): SetGatewayResponse {
    const message = createBaseSetGatewayResponse();
    return message;
  },
  fromAmino(_: SetGatewayResponseAmino): SetGatewayResponse {
    return {};
  },
  toAmino(_: SetGatewayResponse): SetGatewayResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SetGatewayResponseAminoMsg): SetGatewayResponse {
    return SetGatewayResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SetGatewayResponseProtoMsg): SetGatewayResponse {
    return SetGatewayResponse.decode(message.value);
  },
  toProto(message: SetGatewayResponse): Uint8Array {
    return SetGatewayResponse.encode(message).finish();
  },
  toProtoMsg(message: SetGatewayResponse): SetGatewayResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.SetGatewayResponse",
      value: SetGatewayResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest",
  encode(message: ConfirmGatewayTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConfirmGatewayTxRequestAmino): ConfirmGatewayTxRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      txId: object.tx_id
    };
  },
  toAmino(message: ConfirmGatewayTxRequest): ConfirmGatewayTxRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.tx_id = message.txId;
    return obj;
  },
  fromAminoMsg(object: ConfirmGatewayTxRequestAminoMsg): ConfirmGatewayTxRequest {
    return ConfirmGatewayTxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmGatewayTxRequestProtoMsg): ConfirmGatewayTxRequest {
    return ConfirmGatewayTxRequest.decode(message.value);
  },
  toProto(message: ConfirmGatewayTxRequest): Uint8Array {
    return ConfirmGatewayTxRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfirmGatewayTxRequest): ConfirmGatewayTxRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest",
      value: ConfirmGatewayTxRequest.encode(message).finish()
    };
  }
};
function createBaseConfirmGatewayTxResponse(): ConfirmGatewayTxResponse {
  return {};
}
export const ConfirmGatewayTxResponse = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse",
  encode(_: ConfirmGatewayTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ConfirmGatewayTxResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmGatewayTxResponse>): ConfirmGatewayTxResponse {
    const message = createBaseConfirmGatewayTxResponse();
    return message;
  },
  fromAmino(_: ConfirmGatewayTxResponseAmino): ConfirmGatewayTxResponse {
    return {};
  },
  toAmino(_: ConfirmGatewayTxResponse): ConfirmGatewayTxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfirmGatewayTxResponseAminoMsg): ConfirmGatewayTxResponse {
    return ConfirmGatewayTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmGatewayTxResponseProtoMsg): ConfirmGatewayTxResponse {
    return ConfirmGatewayTxResponse.decode(message.value);
  },
  toProto(message: ConfirmGatewayTxResponse): Uint8Array {
    return ConfirmGatewayTxResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfirmGatewayTxResponse): ConfirmGatewayTxResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse",
      value: ConfirmGatewayTxResponse.encode(message).finish()
    };
  }
};
function createBaseConfirmGatewayTxsRequest(): ConfirmGatewayTxsRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    txIds: []
  };
}
export const ConfirmGatewayTxsRequest = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsRequest",
  encode(message: ConfirmGatewayTxsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    for (const v of message.txIds) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  fromJSON(object: any): ConfirmGatewayTxsRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txIds: Array.isArray(object?.txIds) ? object.txIds.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  fromPartial(object: Partial<ConfirmGatewayTxsRequest>): ConfirmGatewayTxsRequest {
    const message = createBaseConfirmGatewayTxsRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txIds = object.txIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ConfirmGatewayTxsRequestAmino): ConfirmGatewayTxsRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      txIds: Array.isArray(object?.tx_ids) ? object.tx_ids.map((e: any) => e) : []
    };
  },
  toAmino(message: ConfirmGatewayTxsRequest): ConfirmGatewayTxsRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    if (message.txIds) {
      obj.tx_ids = message.txIds.map(e => e);
    } else {
      obj.tx_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: ConfirmGatewayTxsRequestAminoMsg): ConfirmGatewayTxsRequest {
    return ConfirmGatewayTxsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmGatewayTxsRequestProtoMsg): ConfirmGatewayTxsRequest {
    return ConfirmGatewayTxsRequest.decode(message.value);
  },
  toProto(message: ConfirmGatewayTxsRequest): Uint8Array {
    return ConfirmGatewayTxsRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfirmGatewayTxsRequest): ConfirmGatewayTxsRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsRequest",
      value: ConfirmGatewayTxsRequest.encode(message).finish()
    };
  }
};
function createBaseConfirmGatewayTxsResponse(): ConfirmGatewayTxsResponse {
  return {};
}
export const ConfirmGatewayTxsResponse = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsResponse",
  encode(_: ConfirmGatewayTxsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ConfirmGatewayTxsResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmGatewayTxsResponse>): ConfirmGatewayTxsResponse {
    const message = createBaseConfirmGatewayTxsResponse();
    return message;
  },
  fromAmino(_: ConfirmGatewayTxsResponseAmino): ConfirmGatewayTxsResponse {
    return {};
  },
  toAmino(_: ConfirmGatewayTxsResponse): ConfirmGatewayTxsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfirmGatewayTxsResponseAminoMsg): ConfirmGatewayTxsResponse {
    return ConfirmGatewayTxsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmGatewayTxsResponseProtoMsg): ConfirmGatewayTxsResponse {
    return ConfirmGatewayTxsResponse.decode(message.value);
  },
  toProto(message: ConfirmGatewayTxsResponse): Uint8Array {
    return ConfirmGatewayTxsResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfirmGatewayTxsResponse): ConfirmGatewayTxsResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsResponse",
      value: ConfirmGatewayTxsResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.ConfirmDepositRequest",
  encode(message: ConfirmDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConfirmDepositRequestAmino): ConfirmDepositRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      txId: object.tx_id,
      amount: object.amount,
      burnerAddress: object.burner_address
    };
  },
  toAmino(message: ConfirmDepositRequest): ConfirmDepositRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.tx_id = message.txId;
    obj.amount = message.amount;
    obj.burner_address = message.burnerAddress;
    return obj;
  },
  fromAminoMsg(object: ConfirmDepositRequestAminoMsg): ConfirmDepositRequest {
    return ConfirmDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmDepositRequestProtoMsg): ConfirmDepositRequest {
    return ConfirmDepositRequest.decode(message.value);
  },
  toProto(message: ConfirmDepositRequest): Uint8Array {
    return ConfirmDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfirmDepositRequest): ConfirmDepositRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmDepositRequest",
      value: ConfirmDepositRequest.encode(message).finish()
    };
  }
};
function createBaseConfirmDepositResponse(): ConfirmDepositResponse {
  return {};
}
export const ConfirmDepositResponse = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmDepositResponse",
  encode(_: ConfirmDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ConfirmDepositResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmDepositResponse>): ConfirmDepositResponse {
    const message = createBaseConfirmDepositResponse();
    return message;
  },
  fromAmino(_: ConfirmDepositResponseAmino): ConfirmDepositResponse {
    return {};
  },
  toAmino(_: ConfirmDepositResponse): ConfirmDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfirmDepositResponseAminoMsg): ConfirmDepositResponse {
    return ConfirmDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmDepositResponseProtoMsg): ConfirmDepositResponse {
    return ConfirmDepositResponse.decode(message.value);
  },
  toProto(message: ConfirmDepositResponse): Uint8Array {
    return ConfirmDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfirmDepositResponse): ConfirmDepositResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmDepositResponse",
      value: ConfirmDepositResponse.encode(message).finish()
    };
  }
};
function createBaseConfirmTokenRequest(): ConfirmTokenRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    txId: new Uint8Array(),
    asset: Asset.fromPartial({})
  };
}
export const ConfirmTokenRequest = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTokenRequest",
  encode(message: ConfirmTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConfirmTokenRequestAmino): ConfirmTokenRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      txId: object.tx_id,
      asset: object?.asset ? Asset.fromAmino(object.asset) : undefined
    };
  },
  toAmino(message: ConfirmTokenRequest): ConfirmTokenRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.tx_id = message.txId;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConfirmTokenRequestAminoMsg): ConfirmTokenRequest {
    return ConfirmTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmTokenRequestProtoMsg): ConfirmTokenRequest {
    return ConfirmTokenRequest.decode(message.value);
  },
  toProto(message: ConfirmTokenRequest): Uint8Array {
    return ConfirmTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfirmTokenRequest): ConfirmTokenRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmTokenRequest",
      value: ConfirmTokenRequest.encode(message).finish()
    };
  }
};
function createBaseConfirmTokenResponse(): ConfirmTokenResponse {
  return {};
}
export const ConfirmTokenResponse = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTokenResponse",
  encode(_: ConfirmTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ConfirmTokenResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmTokenResponse>): ConfirmTokenResponse {
    const message = createBaseConfirmTokenResponse();
    return message;
  },
  fromAmino(_: ConfirmTokenResponseAmino): ConfirmTokenResponse {
    return {};
  },
  toAmino(_: ConfirmTokenResponse): ConfirmTokenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfirmTokenResponseAminoMsg): ConfirmTokenResponse {
    return ConfirmTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmTokenResponseProtoMsg): ConfirmTokenResponse {
    return ConfirmTokenResponse.decode(message.value);
  },
  toProto(message: ConfirmTokenResponse): Uint8Array {
    return ConfirmTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfirmTokenResponse): ConfirmTokenResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmTokenResponse",
      value: ConfirmTokenResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest",
  encode(message: ConfirmTransferKeyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: ConfirmTransferKeyRequestAmino): ConfirmTransferKeyRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      txId: object.tx_id
    };
  },
  toAmino(message: ConfirmTransferKeyRequest): ConfirmTransferKeyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.tx_id = message.txId;
    return obj;
  },
  fromAminoMsg(object: ConfirmTransferKeyRequestAminoMsg): ConfirmTransferKeyRequest {
    return ConfirmTransferKeyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmTransferKeyRequestProtoMsg): ConfirmTransferKeyRequest {
    return ConfirmTransferKeyRequest.decode(message.value);
  },
  toProto(message: ConfirmTransferKeyRequest): Uint8Array {
    return ConfirmTransferKeyRequest.encode(message).finish();
  },
  toProtoMsg(message: ConfirmTransferKeyRequest): ConfirmTransferKeyRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest",
      value: ConfirmTransferKeyRequest.encode(message).finish()
    };
  }
};
function createBaseConfirmTransferKeyResponse(): ConfirmTransferKeyResponse {
  return {};
}
export const ConfirmTransferKeyResponse = {
  typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse",
  encode(_: ConfirmTransferKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): ConfirmTransferKeyResponse {
    return {};
  },
  fromPartial(_: Partial<ConfirmTransferKeyResponse>): ConfirmTransferKeyResponse {
    const message = createBaseConfirmTransferKeyResponse();
    return message;
  },
  fromAmino(_: ConfirmTransferKeyResponseAmino): ConfirmTransferKeyResponse {
    return {};
  },
  toAmino(_: ConfirmTransferKeyResponse): ConfirmTransferKeyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ConfirmTransferKeyResponseAminoMsg): ConfirmTransferKeyResponse {
    return ConfirmTransferKeyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfirmTransferKeyResponseProtoMsg): ConfirmTransferKeyResponse {
    return ConfirmTransferKeyResponse.decode(message.value);
  },
  toProto(message: ConfirmTransferKeyResponse): Uint8Array {
    return ConfirmTransferKeyResponse.encode(message).finish();
  },
  toProtoMsg(message: ConfirmTransferKeyResponse): ConfirmTransferKeyResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse",
      value: ConfirmTransferKeyResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.LinkRequest",
  encode(message: LinkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LinkRequestAmino): LinkRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      recipientAddr: object.recipient_addr,
      asset: object.asset,
      recipientChain: object.recipient_chain
    };
  },
  toAmino(message: LinkRequest): LinkRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.recipient_addr = message.recipientAddr;
    obj.asset = message.asset;
    obj.recipient_chain = message.recipientChain;
    return obj;
  },
  fromAminoMsg(object: LinkRequestAminoMsg): LinkRequest {
    return LinkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkRequestProtoMsg): LinkRequest {
    return LinkRequest.decode(message.value);
  },
  toProto(message: LinkRequest): Uint8Array {
    return LinkRequest.encode(message).finish();
  },
  toProtoMsg(message: LinkRequest): LinkRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.LinkRequest",
      value: LinkRequest.encode(message).finish()
    };
  }
};
function createBaseLinkResponse(): LinkResponse {
  return {
    depositAddr: ""
  };
}
export const LinkResponse = {
  typeUrl: "/axelar.evm.v1beta1.LinkResponse",
  encode(message: LinkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: LinkResponseAmino): LinkResponse {
    return {
      depositAddr: object.deposit_addr
    };
  },
  toAmino(message: LinkResponse): LinkResponseAmino {
    const obj: any = {};
    obj.deposit_addr = message.depositAddr;
    return obj;
  },
  fromAminoMsg(object: LinkResponseAminoMsg): LinkResponse {
    return LinkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkResponseProtoMsg): LinkResponse {
    return LinkResponse.decode(message.value);
  },
  toProto(message: LinkResponse): Uint8Array {
    return LinkResponse.encode(message).finish();
  },
  toProtoMsg(message: LinkResponse): LinkResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.LinkResponse",
      value: LinkResponse.encode(message).finish()
    };
  }
};
function createBaseCreateBurnTokensRequest(): CreateBurnTokensRequest {
  return {
    sender: new Uint8Array(),
    chain: ""
  };
}
export const CreateBurnTokensRequest = {
  typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensRequest",
  encode(message: CreateBurnTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreateBurnTokensRequestAmino): CreateBurnTokensRequest {
    return {
      sender: object.sender,
      chain: object.chain
    };
  },
  toAmino(message: CreateBurnTokensRequest): CreateBurnTokensRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: CreateBurnTokensRequestAminoMsg): CreateBurnTokensRequest {
    return CreateBurnTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateBurnTokensRequestProtoMsg): CreateBurnTokensRequest {
    return CreateBurnTokensRequest.decode(message.value);
  },
  toProto(message: CreateBurnTokensRequest): Uint8Array {
    return CreateBurnTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateBurnTokensRequest): CreateBurnTokensRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensRequest",
      value: CreateBurnTokensRequest.encode(message).finish()
    };
  }
};
function createBaseCreateBurnTokensResponse(): CreateBurnTokensResponse {
  return {};
}
export const CreateBurnTokensResponse = {
  typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensResponse",
  encode(_: CreateBurnTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CreateBurnTokensResponse {
    return {};
  },
  fromPartial(_: Partial<CreateBurnTokensResponse>): CreateBurnTokensResponse {
    const message = createBaseCreateBurnTokensResponse();
    return message;
  },
  fromAmino(_: CreateBurnTokensResponseAmino): CreateBurnTokensResponse {
    return {};
  },
  toAmino(_: CreateBurnTokensResponse): CreateBurnTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CreateBurnTokensResponseAminoMsg): CreateBurnTokensResponse {
    return CreateBurnTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateBurnTokensResponseProtoMsg): CreateBurnTokensResponse {
    return CreateBurnTokensResponse.decode(message.value);
  },
  toProto(message: CreateBurnTokensResponse): Uint8Array {
    return CreateBurnTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: CreateBurnTokensResponse): CreateBurnTokensResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensResponse",
      value: CreateBurnTokensResponse.encode(message).finish()
    };
  }
};
function createBaseCreateDeployTokenRequest(): CreateDeployTokenRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    asset: Asset.fromPartial({}),
    tokenDetails: TokenDetails.fromPartial({}),
    address: new Uint8Array(),
    dailyMintLimit: ""
  };
}
export const CreateDeployTokenRequest = {
  typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenRequest",
  encode(message: CreateDeployTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreateDeployTokenRequestAmino): CreateDeployTokenRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      asset: object?.asset ? Asset.fromAmino(object.asset) : undefined,
      tokenDetails: object?.token_details ? TokenDetails.fromAmino(object.token_details) : undefined,
      address: object.address,
      dailyMintLimit: object.daily_mint_limit
    };
  },
  toAmino(message: CreateDeployTokenRequest): CreateDeployTokenRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.asset = message.asset ? Asset.toAmino(message.asset) : undefined;
    obj.token_details = message.tokenDetails ? TokenDetails.toAmino(message.tokenDetails) : undefined;
    obj.address = message.address;
    obj.daily_mint_limit = message.dailyMintLimit;
    return obj;
  },
  fromAminoMsg(object: CreateDeployTokenRequestAminoMsg): CreateDeployTokenRequest {
    return CreateDeployTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateDeployTokenRequestProtoMsg): CreateDeployTokenRequest {
    return CreateDeployTokenRequest.decode(message.value);
  },
  toProto(message: CreateDeployTokenRequest): Uint8Array {
    return CreateDeployTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateDeployTokenRequest): CreateDeployTokenRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenRequest",
      value: CreateDeployTokenRequest.encode(message).finish()
    };
  }
};
function createBaseCreateDeployTokenResponse(): CreateDeployTokenResponse {
  return {};
}
export const CreateDeployTokenResponse = {
  typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenResponse",
  encode(_: CreateDeployTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CreateDeployTokenResponse {
    return {};
  },
  fromPartial(_: Partial<CreateDeployTokenResponse>): CreateDeployTokenResponse {
    const message = createBaseCreateDeployTokenResponse();
    return message;
  },
  fromAmino(_: CreateDeployTokenResponseAmino): CreateDeployTokenResponse {
    return {};
  },
  toAmino(_: CreateDeployTokenResponse): CreateDeployTokenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CreateDeployTokenResponseAminoMsg): CreateDeployTokenResponse {
    return CreateDeployTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateDeployTokenResponseProtoMsg): CreateDeployTokenResponse {
    return CreateDeployTokenResponse.decode(message.value);
  },
  toProto(message: CreateDeployTokenResponse): Uint8Array {
    return CreateDeployTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: CreateDeployTokenResponse): CreateDeployTokenResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenResponse",
      value: CreateDeployTokenResponse.encode(message).finish()
    };
  }
};
function createBaseCreatePendingTransfersRequest(): CreatePendingTransfersRequest {
  return {
    sender: new Uint8Array(),
    chain: ""
  };
}
export const CreatePendingTransfersRequest = {
  typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersRequest",
  encode(message: CreatePendingTransfersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreatePendingTransfersRequestAmino): CreatePendingTransfersRequest {
    return {
      sender: object.sender,
      chain: object.chain
    };
  },
  toAmino(message: CreatePendingTransfersRequest): CreatePendingTransfersRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: CreatePendingTransfersRequestAminoMsg): CreatePendingTransfersRequest {
    return CreatePendingTransfersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreatePendingTransfersRequestProtoMsg): CreatePendingTransfersRequest {
    return CreatePendingTransfersRequest.decode(message.value);
  },
  toProto(message: CreatePendingTransfersRequest): Uint8Array {
    return CreatePendingTransfersRequest.encode(message).finish();
  },
  toProtoMsg(message: CreatePendingTransfersRequest): CreatePendingTransfersRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersRequest",
      value: CreatePendingTransfersRequest.encode(message).finish()
    };
  }
};
function createBaseCreatePendingTransfersResponse(): CreatePendingTransfersResponse {
  return {};
}
export const CreatePendingTransfersResponse = {
  typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersResponse",
  encode(_: CreatePendingTransfersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CreatePendingTransfersResponse {
    return {};
  },
  fromPartial(_: Partial<CreatePendingTransfersResponse>): CreatePendingTransfersResponse {
    const message = createBaseCreatePendingTransfersResponse();
    return message;
  },
  fromAmino(_: CreatePendingTransfersResponseAmino): CreatePendingTransfersResponse {
    return {};
  },
  toAmino(_: CreatePendingTransfersResponse): CreatePendingTransfersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CreatePendingTransfersResponseAminoMsg): CreatePendingTransfersResponse {
    return CreatePendingTransfersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CreatePendingTransfersResponseProtoMsg): CreatePendingTransfersResponse {
    return CreatePendingTransfersResponse.decode(message.value);
  },
  toProto(message: CreatePendingTransfersResponse): Uint8Array {
    return CreatePendingTransfersResponse.encode(message).finish();
  },
  toProtoMsg(message: CreatePendingTransfersResponse): CreatePendingTransfersResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersResponse",
      value: CreatePendingTransfersResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest",
  encode(message: CreateTransferOwnershipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreateTransferOwnershipRequestAmino): CreateTransferOwnershipRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      keyId: object.key_id
    };
  },
  toAmino(message: CreateTransferOwnershipRequest): CreateTransferOwnershipRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: CreateTransferOwnershipRequestAminoMsg): CreateTransferOwnershipRequest {
    return CreateTransferOwnershipRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateTransferOwnershipRequestProtoMsg): CreateTransferOwnershipRequest {
    return CreateTransferOwnershipRequest.decode(message.value);
  },
  toProto(message: CreateTransferOwnershipRequest): Uint8Array {
    return CreateTransferOwnershipRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateTransferOwnershipRequest): CreateTransferOwnershipRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest",
      value: CreateTransferOwnershipRequest.encode(message).finish()
    };
  }
};
function createBaseCreateTransferOwnershipResponse(): CreateTransferOwnershipResponse {
  return {};
}
export const CreateTransferOwnershipResponse = {
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse",
  encode(_: CreateTransferOwnershipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CreateTransferOwnershipResponse {
    return {};
  },
  fromPartial(_: Partial<CreateTransferOwnershipResponse>): CreateTransferOwnershipResponse {
    const message = createBaseCreateTransferOwnershipResponse();
    return message;
  },
  fromAmino(_: CreateTransferOwnershipResponseAmino): CreateTransferOwnershipResponse {
    return {};
  },
  toAmino(_: CreateTransferOwnershipResponse): CreateTransferOwnershipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CreateTransferOwnershipResponseAminoMsg): CreateTransferOwnershipResponse {
    return CreateTransferOwnershipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateTransferOwnershipResponseProtoMsg): CreateTransferOwnershipResponse {
    return CreateTransferOwnershipResponse.decode(message.value);
  },
  toProto(message: CreateTransferOwnershipResponse): Uint8Array {
    return CreateTransferOwnershipResponse.encode(message).finish();
  },
  toProtoMsg(message: CreateTransferOwnershipResponse): CreateTransferOwnershipResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse",
      value: CreateTransferOwnershipResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest",
  encode(message: CreateTransferOperatorshipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: CreateTransferOperatorshipRequestAmino): CreateTransferOperatorshipRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      keyId: object.key_id
    };
  },
  toAmino(message: CreateTransferOperatorshipRequest): CreateTransferOperatorshipRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.key_id = message.keyId;
    return obj;
  },
  fromAminoMsg(object: CreateTransferOperatorshipRequestAminoMsg): CreateTransferOperatorshipRequest {
    return CreateTransferOperatorshipRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateTransferOperatorshipRequestProtoMsg): CreateTransferOperatorshipRequest {
    return CreateTransferOperatorshipRequest.decode(message.value);
  },
  toProto(message: CreateTransferOperatorshipRequest): Uint8Array {
    return CreateTransferOperatorshipRequest.encode(message).finish();
  },
  toProtoMsg(message: CreateTransferOperatorshipRequest): CreateTransferOperatorshipRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest",
      value: CreateTransferOperatorshipRequest.encode(message).finish()
    };
  }
};
function createBaseCreateTransferOperatorshipResponse(): CreateTransferOperatorshipResponse {
  return {};
}
export const CreateTransferOperatorshipResponse = {
  typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse",
  encode(_: CreateTransferOperatorshipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): CreateTransferOperatorshipResponse {
    return {};
  },
  fromPartial(_: Partial<CreateTransferOperatorshipResponse>): CreateTransferOperatorshipResponse {
    const message = createBaseCreateTransferOperatorshipResponse();
    return message;
  },
  fromAmino(_: CreateTransferOperatorshipResponseAmino): CreateTransferOperatorshipResponse {
    return {};
  },
  toAmino(_: CreateTransferOperatorshipResponse): CreateTransferOperatorshipResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: CreateTransferOperatorshipResponseAminoMsg): CreateTransferOperatorshipResponse {
    return CreateTransferOperatorshipResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CreateTransferOperatorshipResponseProtoMsg): CreateTransferOperatorshipResponse {
    return CreateTransferOperatorshipResponse.decode(message.value);
  },
  toProto(message: CreateTransferOperatorshipResponse): Uint8Array {
    return CreateTransferOperatorshipResponse.encode(message).finish();
  },
  toProtoMsg(message: CreateTransferOperatorshipResponse): CreateTransferOperatorshipResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse",
      value: CreateTransferOperatorshipResponse.encode(message).finish()
    };
  }
};
function createBaseSignCommandsRequest(): SignCommandsRequest {
  return {
    sender: new Uint8Array(),
    chain: ""
  };
}
export const SignCommandsRequest = {
  typeUrl: "/axelar.evm.v1beta1.SignCommandsRequest",
  encode(message: SignCommandsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SignCommandsRequestAmino): SignCommandsRequest {
    return {
      sender: object.sender,
      chain: object.chain
    };
  },
  toAmino(message: SignCommandsRequest): SignCommandsRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    return obj;
  },
  fromAminoMsg(object: SignCommandsRequestAminoMsg): SignCommandsRequest {
    return SignCommandsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SignCommandsRequestProtoMsg): SignCommandsRequest {
    return SignCommandsRequest.decode(message.value);
  },
  toProto(message: SignCommandsRequest): Uint8Array {
    return SignCommandsRequest.encode(message).finish();
  },
  toProtoMsg(message: SignCommandsRequest): SignCommandsRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.SignCommandsRequest",
      value: SignCommandsRequest.encode(message).finish()
    };
  }
};
function createBaseSignCommandsResponse(): SignCommandsResponse {
  return {
    batchedCommandsId: new Uint8Array(),
    commandCount: 0
  };
}
export const SignCommandsResponse = {
  typeUrl: "/axelar.evm.v1beta1.SignCommandsResponse",
  encode(message: SignCommandsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SignCommandsResponseAmino): SignCommandsResponse {
    return {
      batchedCommandsId: object.batched_commands_id,
      commandCount: object.command_count
    };
  },
  toAmino(message: SignCommandsResponse): SignCommandsResponseAmino {
    const obj: any = {};
    obj.batched_commands_id = message.batchedCommandsId;
    obj.command_count = message.commandCount;
    return obj;
  },
  fromAminoMsg(object: SignCommandsResponseAminoMsg): SignCommandsResponse {
    return SignCommandsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SignCommandsResponseProtoMsg): SignCommandsResponse {
    return SignCommandsResponse.decode(message.value);
  },
  toProto(message: SignCommandsResponse): Uint8Array {
    return SignCommandsResponse.encode(message).finish();
  },
  toProtoMsg(message: SignCommandsResponse): SignCommandsResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.SignCommandsResponse",
      value: SignCommandsResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.AddChainRequest",
  encode(message: AddChainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : -1,
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
  },
  fromAmino(object: AddChainRequestAmino): AddChainRequest {
    return {
      sender: object.sender,
      name: object.name,
      keyType: isSet(object.key_type) ? keyTypeFromJSON(object.key_type) : -1,
      params: object.params
    };
  },
  toAmino(message: AddChainRequest): AddChainRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.name = message.name;
    obj.key_type = message.keyType;
    obj.params = message.params;
    return obj;
  },
  fromAminoMsg(object: AddChainRequestAminoMsg): AddChainRequest {
    return AddChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: AddChainRequestProtoMsg): AddChainRequest {
    return AddChainRequest.decode(message.value);
  },
  toProto(message: AddChainRequest): Uint8Array {
    return AddChainRequest.encode(message).finish();
  },
  toProtoMsg(message: AddChainRequest): AddChainRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.AddChainRequest",
      value: AddChainRequest.encode(message).finish()
    };
  }
};
function createBaseAddChainResponse(): AddChainResponse {
  return {};
}
export const AddChainResponse = {
  typeUrl: "/axelar.evm.v1beta1.AddChainResponse",
  encode(_: AddChainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): AddChainResponse {
    return {};
  },
  fromPartial(_: Partial<AddChainResponse>): AddChainResponse {
    const message = createBaseAddChainResponse();
    return message;
  },
  fromAmino(_: AddChainResponseAmino): AddChainResponse {
    return {};
  },
  toAmino(_: AddChainResponse): AddChainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: AddChainResponseAminoMsg): AddChainResponse {
    return AddChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AddChainResponseProtoMsg): AddChainResponse {
    return AddChainResponse.decode(message.value);
  },
  toProto(message: AddChainResponse): Uint8Array {
    return AddChainResponse.encode(message).finish();
  },
  toProtoMsg(message: AddChainResponse): AddChainResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.AddChainResponse",
      value: AddChainResponse.encode(message).finish()
    };
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
  typeUrl: "/axelar.evm.v1beta1.RetryFailedEventRequest",
  encode(message: RetryFailedEventRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RetryFailedEventRequestAmino): RetryFailedEventRequest {
    return {
      sender: object.sender,
      chain: object.chain,
      eventId: object.event_id
    };
  },
  toAmino(message: RetryFailedEventRequest): RetryFailedEventRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.chain = message.chain;
    obj.event_id = message.eventId;
    return obj;
  },
  fromAminoMsg(object: RetryFailedEventRequestAminoMsg): RetryFailedEventRequest {
    return RetryFailedEventRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RetryFailedEventRequestProtoMsg): RetryFailedEventRequest {
    return RetryFailedEventRequest.decode(message.value);
  },
  toProto(message: RetryFailedEventRequest): Uint8Array {
    return RetryFailedEventRequest.encode(message).finish();
  },
  toProtoMsg(message: RetryFailedEventRequest): RetryFailedEventRequestProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.RetryFailedEventRequest",
      value: RetryFailedEventRequest.encode(message).finish()
    };
  }
};
function createBaseRetryFailedEventResponse(): RetryFailedEventResponse {
  return {};
}
export const RetryFailedEventResponse = {
  typeUrl: "/axelar.evm.v1beta1.RetryFailedEventResponse",
  encode(_: RetryFailedEventResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RetryFailedEventResponse {
    return {};
  },
  fromPartial(_: Partial<RetryFailedEventResponse>): RetryFailedEventResponse {
    const message = createBaseRetryFailedEventResponse();
    return message;
  },
  fromAmino(_: RetryFailedEventResponseAmino): RetryFailedEventResponse {
    return {};
  },
  toAmino(_: RetryFailedEventResponse): RetryFailedEventResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RetryFailedEventResponseAminoMsg): RetryFailedEventResponse {
    return RetryFailedEventResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RetryFailedEventResponseProtoMsg): RetryFailedEventResponse {
    return RetryFailedEventResponse.decode(message.value);
  },
  toProto(message: RetryFailedEventResponse): Uint8Array {
    return RetryFailedEventResponse.encode(message).finish();
  },
  toProtoMsg(message: RetryFailedEventResponse): RetryFailedEventResponseProtoMsg {
    return {
      typeUrl: "/axelar.evm.v1beta1.RetryFailedEventResponse",
      value: RetryFailedEventResponse.encode(message).finish()
    };
  }
};