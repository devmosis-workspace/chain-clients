import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** proposal request structure for adding burn tax exemption address(es) */
export interface AddBurnTaxExemptionAddressProposal {
  title: string;
  description: string;
  addresses: string[];
}
export interface AddBurnTaxExemptionAddressProposalProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.AddBurnTaxExemptionAddressProposal";
  value: Uint8Array;
}
/** proposal request structure for adding burn tax exemption address(es) */
export interface AddBurnTaxExemptionAddressProposalAmino {
  title?: string;
  description?: string;
  addresses?: string[];
}
export interface AddBurnTaxExemptionAddressProposalAminoMsg {
  type: "/terra.treasury.v1beta1.AddBurnTaxExemptionAddressProposal";
  value: AddBurnTaxExemptionAddressProposalAmino;
}
/** proposal request structure for adding burn tax exemption address(es) */
export interface AddBurnTaxExemptionAddressProposalSDKType {
  title: string;
  description: string;
  addresses: string[];
}
/** proposal request structure for removing burn tax exemption address(es) */
export interface RemoveBurnTaxExemptionAddressProposal {
  title: string;
  description: string;
  addresses: string[];
}
export interface RemoveBurnTaxExemptionAddressProposalProtoMsg {
  typeUrl: "/terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposal";
  value: Uint8Array;
}
/** proposal request structure for removing burn tax exemption address(es) */
export interface RemoveBurnTaxExemptionAddressProposalAmino {
  title?: string;
  description?: string;
  addresses?: string[];
}
export interface RemoveBurnTaxExemptionAddressProposalAminoMsg {
  type: "/terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposal";
  value: RemoveBurnTaxExemptionAddressProposalAmino;
}
/** proposal request structure for removing burn tax exemption address(es) */
export interface RemoveBurnTaxExemptionAddressProposalSDKType {
  title: string;
  description: string;
  addresses: string[];
}
function createBaseAddBurnTaxExemptionAddressProposal(): AddBurnTaxExemptionAddressProposal {
  return {
    title: "",
    description: "",
    addresses: []
  };
}
export const AddBurnTaxExemptionAddressProposal = {
  typeUrl: "/terra.treasury.v1beta1.AddBurnTaxExemptionAddressProposal",
  encode(message: AddBurnTaxExemptionAddressProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): AddBurnTaxExemptionAddressProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<AddBurnTaxExemptionAddressProposal>): AddBurnTaxExemptionAddressProposal {
    const message = createBaseAddBurnTaxExemptionAddressProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AddBurnTaxExemptionAddressProposalAmino): AddBurnTaxExemptionAddressProposal {
    const message = createBaseAddBurnTaxExemptionAddressProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: AddBurnTaxExemptionAddressProposal): AddBurnTaxExemptionAddressProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: AddBurnTaxExemptionAddressProposalAminoMsg): AddBurnTaxExemptionAddressProposal {
    return AddBurnTaxExemptionAddressProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddBurnTaxExemptionAddressProposalProtoMsg): AddBurnTaxExemptionAddressProposal {
    return AddBurnTaxExemptionAddressProposal.decode(message.value);
  },
  toProto(message: AddBurnTaxExemptionAddressProposal): Uint8Array {
    return AddBurnTaxExemptionAddressProposal.encode(message).finish();
  },
  toProtoMsg(message: AddBurnTaxExemptionAddressProposal): AddBurnTaxExemptionAddressProposalProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.AddBurnTaxExemptionAddressProposal",
      value: AddBurnTaxExemptionAddressProposal.encode(message).finish()
    };
  }
};
function createBaseRemoveBurnTaxExemptionAddressProposal(): RemoveBurnTaxExemptionAddressProposal {
  return {
    title: "",
    description: "",
    addresses: []
  };
}
export const RemoveBurnTaxExemptionAddressProposal = {
  typeUrl: "/terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposal",
  encode(message: RemoveBurnTaxExemptionAddressProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RemoveBurnTaxExemptionAddressProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RemoveBurnTaxExemptionAddressProposal>): RemoveBurnTaxExemptionAddressProposal {
    const message = createBaseRemoveBurnTaxExemptionAddressProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RemoveBurnTaxExemptionAddressProposalAmino): RemoveBurnTaxExemptionAddressProposal {
    const message = createBaseRemoveBurnTaxExemptionAddressProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: RemoveBurnTaxExemptionAddressProposal): RemoveBurnTaxExemptionAddressProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: RemoveBurnTaxExemptionAddressProposalAminoMsg): RemoveBurnTaxExemptionAddressProposal {
    return RemoveBurnTaxExemptionAddressProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoveBurnTaxExemptionAddressProposalProtoMsg): RemoveBurnTaxExemptionAddressProposal {
    return RemoveBurnTaxExemptionAddressProposal.decode(message.value);
  },
  toProto(message: RemoveBurnTaxExemptionAddressProposal): Uint8Array {
    return RemoveBurnTaxExemptionAddressProposal.encode(message).finish();
  },
  toProtoMsg(message: RemoveBurnTaxExemptionAddressProposal): RemoveBurnTaxExemptionAddressProposalProtoMsg {
    return {
      typeUrl: "/terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposal",
      value: RemoveBurnTaxExemptionAddressProposal.encode(message).finish()
    };
  }
};