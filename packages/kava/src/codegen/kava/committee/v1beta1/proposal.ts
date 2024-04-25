import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BaseCommittee, BaseCommitteeProtoMsg, BaseCommitteeSDKType, MemberCommittee, MemberCommitteeProtoMsg, MemberCommitteeSDKType, TokenCommittee, TokenCommitteeProtoMsg, TokenCommitteeSDKType } from "./committee";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposal {
  $typeUrl?: "/kava.committee.v1beta1.CommitteeChangeProposal";
  title: string;
  description: string;
  newCommittee?: (BaseCommittee & MemberCommittee & TokenCommittee & Any) | undefined;
}
export interface CommitteeChangeProposalProtoMsg {
  typeUrl: "/kava.committee.v1beta1.CommitteeChangeProposal";
  value: Uint8Array;
}
export type CommitteeChangeProposalEncoded = Omit<CommitteeChangeProposal, "newCommittee"> & {
  newCommittee?: BaseCommitteeProtoMsg | MemberCommitteeProtoMsg | TokenCommitteeProtoMsg | AnyProtoMsg | undefined;
};
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposalAmino {
  title?: string;
  description?: string;
  new_committee?: AnyAmino;
}
export interface CommitteeChangeProposalAminoMsg {
  type: "/kava.committee.v1beta1.CommitteeChangeProposal";
  value: CommitteeChangeProposalAmino;
}
/** CommitteeChangeProposal is a gov proposal for creating a new committee or modifying an existing one. */
export interface CommitteeChangeProposalSDKType {
  $typeUrl?: "/kava.committee.v1beta1.CommitteeChangeProposal";
  title: string;
  description: string;
  new_committee?: BaseCommitteeSDKType | MemberCommitteeSDKType | TokenCommitteeSDKType | AnySDKType | undefined;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposal {
  $typeUrl?: "/kava.committee.v1beta1.CommitteeDeleteProposal";
  title: string;
  description: string;
  committeeId: bigint;
}
export interface CommitteeDeleteProposalProtoMsg {
  typeUrl: "/kava.committee.v1beta1.CommitteeDeleteProposal";
  value: Uint8Array;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposalAmino {
  title?: string;
  description?: string;
  committee_id?: string;
}
export interface CommitteeDeleteProposalAminoMsg {
  type: "/kava.committee.v1beta1.CommitteeDeleteProposal";
  value: CommitteeDeleteProposalAmino;
}
/** CommitteeDeleteProposal is a gov proposal for removing a committee. */
export interface CommitteeDeleteProposalSDKType {
  $typeUrl?: "/kava.committee.v1beta1.CommitteeDeleteProposal";
  title: string;
  description: string;
  committee_id: bigint;
}
function createBaseCommitteeChangeProposal(): CommitteeChangeProposal {
  return {
    $typeUrl: "/kava.committee.v1beta1.CommitteeChangeProposal",
    title: "",
    description: "",
    newCommittee: undefined
  };
}
export const CommitteeChangeProposal = {
  typeUrl: "/kava.committee.v1beta1.CommitteeChangeProposal",
  encode(message: CommitteeChangeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.newCommittee !== undefined) {
      Any.encode((message.newCommittee as Any), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CommitteeChangeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      newCommittee: isSet(object.newCommittee) ? Any.fromJSON(object.newCommittee) : undefined
    };
  },
  fromPartial(object: Partial<CommitteeChangeProposal>): CommitteeChangeProposal {
    const message = createBaseCommitteeChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.newCommittee = object.newCommittee !== undefined && object.newCommittee !== null ? Any.fromPartial(object.newCommittee) : undefined;
    return message;
  },
  fromAmino(object: CommitteeChangeProposalAmino): CommitteeChangeProposal {
    const message = createBaseCommitteeChangeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.new_committee !== undefined && object.new_committee !== null) {
      message.newCommittee = Committee_FromAmino(object.new_committee);
    }
    return message;
  },
  toAmino(message: CommitteeChangeProposal): CommitteeChangeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.new_committee = message.newCommittee ? Committee_ToAmino((message.newCommittee as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommitteeChangeProposalAminoMsg): CommitteeChangeProposal {
    return CommitteeChangeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitteeChangeProposalProtoMsg): CommitteeChangeProposal {
    return CommitteeChangeProposal.decode(message.value);
  },
  toProto(message: CommitteeChangeProposal): Uint8Array {
    return CommitteeChangeProposal.encode(message).finish();
  },
  toProtoMsg(message: CommitteeChangeProposal): CommitteeChangeProposalProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.CommitteeChangeProposal",
      value: CommitteeChangeProposal.encode(message).finish()
    };
  }
};
function createBaseCommitteeDeleteProposal(): CommitteeDeleteProposal {
  return {
    $typeUrl: "/kava.committee.v1beta1.CommitteeDeleteProposal",
    title: "",
    description: "",
    committeeId: BigInt(0)
  };
}
export const CommitteeDeleteProposal = {
  typeUrl: "/kava.committee.v1beta1.CommitteeDeleteProposal",
  encode(message: CommitteeDeleteProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.committeeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.committeeId);
    }
    return writer;
  },
  fromJSON(object: any): CommitteeDeleteProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      committeeId: isSet(object.committeeId) ? BigInt(object.committeeId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<CommitteeDeleteProposal>): CommitteeDeleteProposal {
    const message = createBaseCommitteeDeleteProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.committeeId = object.committeeId !== undefined && object.committeeId !== null ? BigInt(object.committeeId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CommitteeDeleteProposalAmino): CommitteeDeleteProposal {
    const message = createBaseCommitteeDeleteProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.committee_id !== undefined && object.committee_id !== null) {
      message.committeeId = BigInt(object.committee_id);
    }
    return message;
  },
  toAmino(message: CommitteeDeleteProposal): CommitteeDeleteProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.committee_id = message.committeeId ? message.committeeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CommitteeDeleteProposalAminoMsg): CommitteeDeleteProposal {
    return CommitteeDeleteProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitteeDeleteProposalProtoMsg): CommitteeDeleteProposal {
    return CommitteeDeleteProposal.decode(message.value);
  },
  toProto(message: CommitteeDeleteProposal): Uint8Array {
    return CommitteeDeleteProposal.encode(message).finish();
  },
  toProtoMsg(message: CommitteeDeleteProposal): CommitteeDeleteProposalProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.CommitteeDeleteProposal",
      value: CommitteeDeleteProposal.encode(message).finish()
    };
  }
};
export const Committee_InterfaceDecoder = (input: BinaryReader | Uint8Array): BaseCommittee | MemberCommittee | TokenCommittee | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return BaseCommittee.decode(data.value);
    case "/kava.committee.v1beta1.MemberCommittee":
      return MemberCommittee.decode(data.value);
    case "/kava.committee.v1beta1.TokenCommittee":
      return TokenCommittee.decode(data.value);
    default:
      return data;
  }
};
export const Committee_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.BaseCommittee",
        value: BaseCommittee.encode(BaseCommittee.fromPartial(BaseCommittee.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.MemberCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.MemberCommittee",
        value: MemberCommittee.encode(MemberCommittee.fromPartial(MemberCommittee.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.TokenCommittee":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.TokenCommittee",
        value: TokenCommittee.encode(TokenCommittee.fromPartial(TokenCommittee.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Committee_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/kava.committee.v1beta1.BaseCommittee":
      return {
        type: "/kava.committee.v1beta1.BaseCommittee",
        value: BaseCommittee.toAmino(BaseCommittee.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.MemberCommittee":
      return {
        type: "/kava.committee.v1beta1.MemberCommittee",
        value: MemberCommittee.toAmino(MemberCommittee.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.TokenCommittee":
      return {
        type: "/kava.committee.v1beta1.TokenCommittee",
        value: TokenCommittee.toAmino(TokenCommittee.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};