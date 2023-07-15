import { Validator, ValidatorSDKType } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AddValidatorsProposal {
  title: string;
  description: string;
  hostZone: string;
  validators: Validator[];
  deposit: string;
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
  encode(message: AddValidatorsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};