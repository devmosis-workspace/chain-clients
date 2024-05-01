import { Proof, ProofAmino, ProofSDKType } from "../../claimsmanager/v1/claimsmanager";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgClaim {
  chainId: string;
  action: bigint;
  address: string;
  proofs: Proof[];
}
export interface MsgClaimProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.MsgClaim";
  value: Uint8Array;
}
export interface MsgClaimAmino {
  chain_id?: string;
  action?: string;
  address?: string;
  proofs?: ProofAmino[];
}
export interface MsgClaimAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgClaim";
  value: MsgClaimAmino;
}
export interface MsgClaimSDKType {
  chain_id: string;
  action: bigint;
  address: string;
  proofs: ProofSDKType[];
}
export interface MsgClaimResponse {
  amount: bigint;
}
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse";
  value: Uint8Array;
}
export interface MsgClaimResponseAmino {
  amount?: string;
}
export interface MsgClaimResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
export interface MsgClaimResponseSDKType {
  amount: bigint;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpend {
  authority: string;
  toAddress: string;
  amount: Coin[];
  title: string;
  description: string;
}
export interface MsgIncentivePoolSpendProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend";
  value: Uint8Array;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpendAmino {
  authority?: string;
  to_address?: string;
  amount?: CoinAmino[];
  title?: string;
  description?: string;
}
export interface MsgIncentivePoolSpendAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend";
  value: MsgIncentivePoolSpendAmino;
}
/** MsgIncentivePoolSpend represents a message to send coins from one account to another. */
export interface MsgIncentivePoolSpendSDKType {
  authority: string;
  to_address: string;
  amount: CoinSDKType[];
  title: string;
  description: string;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponse {}
export interface MsgIncentivePoolSpendResponseProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse";
  value: Uint8Array;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponseAmino {}
export interface MsgIncentivePoolSpendResponseAminoMsg {
  type: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse";
  value: MsgIncentivePoolSpendResponseAmino;
}
/** MsgIncentivePoolSpendResponse defines the MsgIncentivePoolSpend response type. */
export interface MsgIncentivePoolSpendResponseSDKType {}
function createBaseMsgClaim(): MsgClaim {
  return {
    chainId: "",
    action: BigInt(0),
    address: "",
    proofs: []
  };
}
export const MsgClaim = {
  typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.action !== BigInt(0)) {
      writer.uint32(16).int64(message.action);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    for (const v of message.proofs) {
      Proof.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaim {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      action: isSet(object.action) ? BigInt(object.action.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => Proof.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.chainId = object.chainId ?? "";
    message.action = object.action !== undefined && object.action !== null ? BigInt(object.action.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.proofs = object.proofs?.map(e => Proof.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = BigInt(object.action);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.proofs = object.proofs?.map(e => Proof.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.action = message.action ? message.action.toString() : undefined;
    obj.address = message.address;
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? Proof.toAmino(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    amount: BigInt(0)
  };
}
export const MsgClaimResponse = {
  typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse",
  encode(message: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimResponse {
    return {
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgIncentivePoolSpend(): MsgIncentivePoolSpend {
  return {
    authority: "",
    toAddress: "",
    amount: [],
    title: "",
    description: ""
  };
}
export const MsgIncentivePoolSpend = {
  typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
  encode(message: MsgIncentivePoolSpend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgIncentivePoolSpend {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgIncentivePoolSpend>): MsgIncentivePoolSpend {
    const message = createBaseMsgIncentivePoolSpend();
    message.authority = object.authority ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgIncentivePoolSpendAmino): MsgIncentivePoolSpend {
    const message = createBaseMsgIncentivePoolSpend();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgIncentivePoolSpend): MsgIncentivePoolSpendAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.to_address = message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.title = message.title;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: MsgIncentivePoolSpendAminoMsg): MsgIncentivePoolSpend {
    return MsgIncentivePoolSpend.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncentivePoolSpendProtoMsg): MsgIncentivePoolSpend {
    return MsgIncentivePoolSpend.decode(message.value);
  },
  toProto(message: MsgIncentivePoolSpend): Uint8Array {
    return MsgIncentivePoolSpend.encode(message).finish();
  },
  toProtoMsg(message: MsgIncentivePoolSpend): MsgIncentivePoolSpendProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpend",
      value: MsgIncentivePoolSpend.encode(message).finish()
    };
  }
};
function createBaseMsgIncentivePoolSpendResponse(): MsgIncentivePoolSpendResponse {
  return {};
}
export const MsgIncentivePoolSpendResponse = {
  typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse",
  encode(_: MsgIncentivePoolSpendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgIncentivePoolSpendResponse {
    return {};
  },
  fromPartial(_: Partial<MsgIncentivePoolSpendResponse>): MsgIncentivePoolSpendResponse {
    const message = createBaseMsgIncentivePoolSpendResponse();
    return message;
  },
  fromAmino(_: MsgIncentivePoolSpendResponseAmino): MsgIncentivePoolSpendResponse {
    const message = createBaseMsgIncentivePoolSpendResponse();
    return message;
  },
  toAmino(_: MsgIncentivePoolSpendResponse): MsgIncentivePoolSpendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIncentivePoolSpendResponseAminoMsg): MsgIncentivePoolSpendResponse {
    return MsgIncentivePoolSpendResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIncentivePoolSpendResponseProtoMsg): MsgIncentivePoolSpendResponse {
    return MsgIncentivePoolSpendResponse.decode(message.value);
  },
  toProto(message: MsgIncentivePoolSpendResponse): Uint8Array {
    return MsgIncentivePoolSpendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIncentivePoolSpendResponse): MsgIncentivePoolSpendResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.MsgIncentivePoolSpendResponse",
      value: MsgIncentivePoolSpendResponse.encode(message).finish()
    };
  }
};