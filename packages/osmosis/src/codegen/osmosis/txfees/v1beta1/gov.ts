import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  feetokens: FeeToken[];
}
export interface UpdateFeeTokenProposalProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
  value: Uint8Array;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalAmino {
  title: string;
  description: string;
  feetokens: FeeTokenAmino[];
}
export interface UpdateFeeTokenProposalAminoMsg {
  type: "osmosis/UpdateFeeTokenProposal";
  value: UpdateFeeTokenProposalAmino;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  feetokens: FeeTokenSDKType[];
}
function createBaseUpdateFeeTokenProposal(): UpdateFeeTokenProposal {
  return {
    $typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
    title: "",
    description: "",
    feetokens: []
  };
}
export const UpdateFeeTokenProposal = {
  typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
  encode(message: UpdateFeeTokenProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.feetokens) {
      FeeToken.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateFeeTokenProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e: any) => FeeToken.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<UpdateFeeTokenProposal>): UpdateFeeTokenProposal {
    const message = createBaseUpdateFeeTokenProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.feetokens = object.feetokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UpdateFeeTokenProposalAmino): UpdateFeeTokenProposal {
    return {
      title: object.title,
      description: object.description,
      feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e: any) => FeeToken.fromAmino(e)) : []
    };
  },
  toAmino(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toAmino(e) : undefined);
    } else {
      obj.feetokens = [];
    }
    return obj;
  },
  fromAminoMsg(object: UpdateFeeTokenProposalAminoMsg): UpdateFeeTokenProposal {
    return UpdateFeeTokenProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAminoMsg {
    return {
      type: "osmosis/UpdateFeeTokenProposal",
      value: UpdateFeeTokenProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateFeeTokenProposalProtoMsg): UpdateFeeTokenProposal {
    return UpdateFeeTokenProposal.decode(message.value);
  },
  toProto(message: UpdateFeeTokenProposal): Uint8Array {
    return UpdateFeeTokenProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
      value: UpdateFeeTokenProposal.encode(message).finish()
    };
  }
};