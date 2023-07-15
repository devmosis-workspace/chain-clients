import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
  title: string;
  description: string;
  changes: ParamChange[];
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalSDKType {
  title: string;
  description: string;
  changes: ParamChangeSDKType[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
  subspace: string;
  key: string;
  value: string;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeSDKType {
  subspace: string;
  key: string;
  value: string;
}
function createBaseParameterChangeProposal(): ParameterChangeProposal {
  return {
    title: "",
    description: "",
    changes: []
  };
}
export const ParameterChangeProposal = {
  encode(message: ParameterChangeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ParameterChangeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ParameterChangeProposal>): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.changes = object.changes?.map(e => ParamChange.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParamChange(): ParamChange {
  return {
    subspace: "",
    key: "",
    value: ""
  };
}
export const ParamChange = {
  encode(message: ParamChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  fromJSON(object: any): ParamChange {
    return {
      subspace: isSet(object.subspace) ? String(object.subspace) : "",
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  fromPartial(object: Partial<ParamChange>): ParamChange {
    const message = createBaseParamChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};