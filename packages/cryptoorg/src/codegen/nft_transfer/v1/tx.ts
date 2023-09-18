import { Height, HeightAmino, HeightSDKType } from "../../ibc/core/client/v1/client";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * MsgTransfer defines a msg to transfer non fungible tokens between
 * ICS721 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface MsgTransfer {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** the class_id of tokens to be transferred */
  classId: string;
  /** the non fungible tokens to be transferred */
  tokenIds: string[];
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeoutHeight: Height;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeoutTimestamp: bigint;
}
export interface MsgTransferProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer";
  value: Uint8Array;
}
/**
 * MsgTransfer defines a msg to transfer non fungible tokens between
 * ICS721 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface MsgTransferAmino {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */
  source_channel: string;
  /** the class_id of tokens to be transferred */
  class_id: string;
  /** the non fungible tokens to be transferred */
  token_ids: string[];
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height?: HeightAmino;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: string;
}
export interface MsgTransferAminoMsg {
  type: "/chainmain.nft_transfer.v1.MsgTransfer";
  value: MsgTransferAmino;
}
/**
 * MsgTransfer defines a msg to transfer non fungible tokens between
 * ICS721 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface MsgTransferSDKType {
  source_port: string;
  source_channel: string;
  class_id: string;
  token_ids: string[];
  sender: string;
  receiver: string;
  timeout_height: HeightSDKType;
  timeout_timestamp: bigint;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {}
export interface MsgTransferResponseProtoMsg {
  typeUrl: "/chainmain.nft_transfer.v1.MsgTransferResponse";
  value: Uint8Array;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseAmino {}
export interface MsgTransferResponseAminoMsg {
  type: "/chainmain.nft_transfer.v1.MsgTransferResponse";
  value: MsgTransferResponseAmino;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {}
function createBaseMsgTransfer(): MsgTransfer {
  return {
    sourcePort: "",
    sourceChannel: "",
    classId: "",
    tokenIds: [],
    sender: "",
    receiver: "",
    timeoutHeight: Height.fromPartial({}),
    timeoutTimestamp: BigInt(0)
  };
}
export const MsgTransfer = {
  typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer",
  encode(message: MsgTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.classId !== "") {
      writer.uint32(26).string(message.classId);
    }
    for (const v of message.tokenIds) {
      writer.uint32(34).string(v!);
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(50).string(message.receiver);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(64).uint64(message.timeoutTimestamp);
    }
    return writer;
  },
  fromJSON(object: any): MsgTransfer {
    return {
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      classId: isSet(object.classId) ? String(object.classId) : "",
      tokenIds: Array.isArray(object?.tokenIds) ? object.tokenIds.map((e: any) => String(e)) : [],
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.classId = object.classId ?? "";
    message.tokenIds = object.tokenIds?.map(e => e) || [];
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgTransferAmino): MsgTransfer {
    return {
      sourcePort: object.source_port,
      sourceChannel: object.source_channel,
      classId: object.class_id,
      tokenIds: Array.isArray(object?.token_ids) ? object.token_ids.map((e: any) => e) : [],
      sender: object.sender,
      receiver: object.receiver,
      timeoutHeight: object?.timeout_height ? Height.fromAmino(object.timeout_height) : undefined,
      timeoutTimestamp: BigInt(object.timeout_timestamp)
    };
  },
  toAmino(message: MsgTransfer): MsgTransferAmino {
    const obj: any = {};
    obj.source_port = message.sourcePort;
    obj.source_channel = message.sourceChannel;
    obj.class_id = message.classId;
    if (message.tokenIds) {
      obj.token_ids = message.tokenIds.map(e => e);
    } else {
      obj.token_ids = [];
    }
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};
    obj.timeout_timestamp = message.timeoutTimestamp ? message.timeoutTimestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer {
    return MsgTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer {
    return MsgTransfer.decode(message.value);
  },
  toProto(message: MsgTransfer): Uint8Array {
    return MsgTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.MsgTransfer",
      value: MsgTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {};
}
export const MsgTransferResponse = {
  typeUrl: "/chainmain.nft_transfer.v1.MsgTransferResponse",
  encode(_: MsgTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgTransferResponse {
    return {};
  },
  fromPartial(_: Partial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    return message;
  },
  fromAmino(_: MsgTransferResponseAmino): MsgTransferResponse {
    return {};
  },
  toAmino(_: MsgTransferResponse): MsgTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse {
    return MsgTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse {
    return MsgTransferResponse.decode(message.value);
  },
  toProto(message: MsgTransferResponse): Uint8Array {
    return MsgTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg {
    return {
      typeUrl: "/chainmain.nft_transfer.v1.MsgTransferResponse",
      value: MsgTransferResponse.encode(message).finish()
    };
  }
};