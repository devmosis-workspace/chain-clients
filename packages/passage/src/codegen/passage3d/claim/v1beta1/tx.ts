import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaim {
  sender: string;
  claimAction: string;
}
export interface MsgClaimProtoMsg {
  typeUrl: "/passage3d.claim.v1beta1.MsgClaim";
  value: Uint8Array;
}
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaimAmino {
  sender?: string;
  claim_action?: string;
}
export interface MsgClaimAminoMsg {
  type: "/passage3d.claim.v1beta1.MsgClaim";
  value: MsgClaimAmino;
}
/** MsgInitialClaim defines request message for InitialClaim RPC request */
export interface MsgClaimSDKType {
  sender: string;
  claim_action: string;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponse {
  /** total initial claimable amount for the user */
  claimedAmount: Coin;
}
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse";
  value: Uint8Array;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponseAmino {
  /** total initial claimable amount for the user */
  claimed_amount?: CoinAmino;
}
export interface MsgClaimResponseAminoMsg {
  type: "/passage3d.claim.v1beta1.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
/** MsgInitialClaimResponse defines response for InitialClaim RPC request */
export interface MsgClaimResponseSDKType {
  claimed_amount: CoinSDKType;
}
function createBaseMsgClaim(): MsgClaim {
  return {
    sender: "",
    claimAction: ""
  };
}
export const MsgClaim = {
  typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.claimAction !== "") {
      writer.uint32(18).string(message.claimAction);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaim {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      claimAction: isSet(object.claimAction) ? String(object.claimAction) : ""
    };
  },
  fromPartial(object: Partial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.sender = object.sender ?? "";
    message.claimAction = object.claimAction ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.claim_action !== undefined && object.claim_action !== null) {
      message.claimAction = object.claim_action;
    }
    return message;
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.claim_action = message.claimAction;
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
      typeUrl: "/passage3d.claim.v1beta1.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    claimedAmount: Coin.fromPartial({})
  };
}
export const MsgClaimResponse = {
  typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse",
  encode(message: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.claimedAmount !== undefined) {
      Coin.encode(message.claimedAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimResponse {
    return {
      claimedAmount: isSet(object.claimedAmount) ? Coin.fromJSON(object.claimedAmount) : undefined
    };
  },
  fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.claimedAmount = object.claimedAmount !== undefined && object.claimedAmount !== null ? Coin.fromPartial(object.claimedAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    if (object.claimed_amount !== undefined && object.claimed_amount !== null) {
      message.claimedAmount = Coin.fromAmino(object.claimed_amount);
    }
    return message;
  },
  toAmino(message: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    obj.claimed_amount = message.claimedAmount ? Coin.toAmino(message.claimedAmount) : undefined;
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
      typeUrl: "/passage3d.claim.v1beta1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  }
};