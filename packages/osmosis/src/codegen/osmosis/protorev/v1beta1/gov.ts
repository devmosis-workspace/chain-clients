import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  enabled: boolean;
}
export interface SetProtoRevEnabledProposalProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal";
  value: Uint8Array;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalAmino {
  title: string;
  description: string;
  enabled: boolean;
}
export interface SetProtoRevEnabledProposalAminoMsg {
  type: "osmosis/SetProtoRevEnabledProposal";
  value: SetProtoRevEnabledProposalAmino;
}
/**
 * SetProtoRevEnabledProposal is a gov Content type to update whether the
 * protorev module is enabled
 */
export interface SetProtoRevEnabledProposalSDKType {
  $typeUrl?: string;
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
  $typeUrl?: string;
  title: string;
  description: string;
  account: string;
}
export interface SetProtoRevAdminAccountProposalProtoMsg {
  typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal";
  value: Uint8Array;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalAmino {
  title: string;
  description: string;
  account: string;
}
export interface SetProtoRevAdminAccountProposalAminoMsg {
  type: "osmosis/SetProtoRevAdminAccountProposal";
  value: SetProtoRevAdminAccountProposalAmino;
}
/**
 * SetProtoRevAdminAccountProposal is a gov Content type to set the admin
 * account that will receive permissions to alter hot routes and set the
 * developer address that will be receiving a share of profits from the module
 */
export interface SetProtoRevAdminAccountProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  account: string;
}
function createBaseSetProtoRevEnabledProposal(): SetProtoRevEnabledProposal {
  return {
    $typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
    title: "",
    description: "",
    enabled: false
  };
}
export const SetProtoRevEnabledProposal = {
  typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
  encode(message: SetProtoRevEnabledProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SetProtoRevEnabledProposalAmino): SetProtoRevEnabledProposal {
    return {
      title: object.title,
      description: object.description,
      enabled: object.enabled
    };
  },
  toAmino(message: SetProtoRevEnabledProposal): SetProtoRevEnabledProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.enabled = message.enabled;
    return obj;
  },
  fromAminoMsg(object: SetProtoRevEnabledProposalAminoMsg): SetProtoRevEnabledProposal {
    return SetProtoRevEnabledProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SetProtoRevEnabledProposal): SetProtoRevEnabledProposalAminoMsg {
    return {
      type: "osmosis/SetProtoRevEnabledProposal",
      value: SetProtoRevEnabledProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SetProtoRevEnabledProposalProtoMsg): SetProtoRevEnabledProposal {
    return SetProtoRevEnabledProposal.decode(message.value);
  },
  toProto(message: SetProtoRevEnabledProposal): Uint8Array {
    return SetProtoRevEnabledProposal.encode(message).finish();
  },
  toProtoMsg(message: SetProtoRevEnabledProposal): SetProtoRevEnabledProposalProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
      value: SetProtoRevEnabledProposal.encode(message).finish()
    };
  }
};
function createBaseSetProtoRevAdminAccountProposal(): SetProtoRevAdminAccountProposal {
  return {
    $typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
    title: "",
    description: "",
    account: ""
  };
}
export const SetProtoRevAdminAccountProposal = {
  typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
  encode(message: SetProtoRevAdminAccountProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: SetProtoRevAdminAccountProposalAmino): SetProtoRevAdminAccountProposal {
    return {
      title: object.title,
      description: object.description,
      account: object.account
    };
  },
  toAmino(message: SetProtoRevAdminAccountProposal): SetProtoRevAdminAccountProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: SetProtoRevAdminAccountProposalAminoMsg): SetProtoRevAdminAccountProposal {
    return SetProtoRevAdminAccountProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SetProtoRevAdminAccountProposal): SetProtoRevAdminAccountProposalAminoMsg {
    return {
      type: "osmosis/SetProtoRevAdminAccountProposal",
      value: SetProtoRevAdminAccountProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SetProtoRevAdminAccountProposalProtoMsg): SetProtoRevAdminAccountProposal {
    return SetProtoRevAdminAccountProposal.decode(message.value);
  },
  toProto(message: SetProtoRevAdminAccountProposal): Uint8Array {
    return SetProtoRevAdminAccountProposal.encode(message).finish();
  },
  toProtoMsg(message: SetProtoRevAdminAccountProposal): SetProtoRevAdminAccountProposalProtoMsg {
    return {
      typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
      value: SetProtoRevAdminAccountProposal.encode(message).finish()
    };
  }
};