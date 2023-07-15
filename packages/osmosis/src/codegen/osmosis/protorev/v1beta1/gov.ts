import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposal {
  title: string;
  description: string;
  enabled: boolean;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalSDKType {
  title: string;
  description: string;
  enabled: boolean;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposal {
  title: string;
  description: string;
  account: string;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalSDKType {
  title: string;
  description: string;
  account: string;
}
function createBaseSetProtoRevEnabledProposal(): SetProtoRevEnabledProposal {
  return {
    title: "",
    description: "",
    enabled: false
  };
}
export const SetProtoRevEnabledProposal = {
  encode(message: SetProtoRevEnabledProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    return writer;
  },
  fromJSON(object: any): SetProtoRevEnabledProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },
  fromPartial(object: Partial<SetProtoRevEnabledProposal>): SetProtoRevEnabledProposal {
    const message = createBaseSetProtoRevEnabledProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }
};
function createBaseSetProtoRevAdminAccountProposal(): SetProtoRevAdminAccountProposal {
  return {
    title: "",
    description: "",
    account: ""
  };
}
export const SetProtoRevAdminAccountProposal = {
  encode(message: SetProtoRevAdminAccountProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    return writer;
  },
  fromJSON(object: any): SetProtoRevAdminAccountProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object: Partial<SetProtoRevAdminAccountProposal>): SetProtoRevAdminAccountProposal {
    const message = createBaseSetProtoRevAdminAccountProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.account = object.account ?? "";
    return message;
  }
};