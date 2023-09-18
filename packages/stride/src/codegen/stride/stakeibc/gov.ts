import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface AddValidatorsProposal {
  title: string;
  description: string;
  hostZone: string;
  validators: Validator[];
  deposit: string;
}
export interface AddValidatorsProposalProtoMsg {
  typeUrl: "/stride.stakeibc.AddValidatorsProposal";
  value: Uint8Array;
}
export interface AddValidatorsProposalAmino {
  title: string;
  description: string;
  host_zone: string;
  validators: ValidatorAmino[];
  deposit: string;
}
export interface AddValidatorsProposalAminoMsg {
  type: "/stride.stakeibc.AddValidatorsProposal";
  value: AddValidatorsProposalAmino;
}
export interface AddValidatorsProposalSDKType {
  title: string;
  description: string;
  host_zone: string;
  validators: ValidatorSDKType[];
  deposit: string;
}
function createBaseAddValidatorsProposal(): AddValidatorsProposal {
  return {
    title: "",
    description: "",
    hostZone: "",
    validators: [],
    deposit: ""
  };
}
export const AddValidatorsProposal = {
  typeUrl: "/stride.stakeibc.AddValidatorsProposal",
  encode(message: AddValidatorsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hostZone !== "") {
      writer.uint32(26).string(message.hostZone);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(50).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddValidatorsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      hostZone: isSet(object.hostZone) ? String(object.hostZone) : "",
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddValidatorsProposal>): AddValidatorsProposal {
    const message = createBaseAddValidatorsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.hostZone = object.hostZone ?? "";
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: AddValidatorsProposalAmino): AddValidatorsProposal {
    return {
      title: object.title,
      description: object.description,
      hostZone: object.host_zone,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      deposit: object.deposit
    };
  },
  toAmino(message: AddValidatorsProposal): AddValidatorsProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.host_zone = message.hostZone;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: AddValidatorsProposalAminoMsg): AddValidatorsProposal {
    return AddValidatorsProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddValidatorsProposalProtoMsg): AddValidatorsProposal {
    return AddValidatorsProposal.decode(message.value);
  },
  toProto(message: AddValidatorsProposal): Uint8Array {
    return AddValidatorsProposal.encode(message).finish();
  },
  toProtoMsg(message: AddValidatorsProposal): AddValidatorsProposalProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.AddValidatorsProposal",
      value: AddValidatorsProposal.encode(message).finish()
    };
  }
};