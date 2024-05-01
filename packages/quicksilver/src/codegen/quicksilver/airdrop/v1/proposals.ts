import { ZoneDrop, ZoneDropAmino, ZoneDropSDKType } from "./airdrop";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface RegisterZoneDropProposal {
  title: string;
  description: string;
  zoneDrop?: ZoneDrop;
  claimRecords: Uint8Array;
}
export interface RegisterZoneDropProposalProtoMsg {
  typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
  value: Uint8Array;
}
export interface RegisterZoneDropProposalAmino {
  title?: string;
  description?: string;
  zone_drop?: ZoneDropAmino;
  claim_records?: string;
}
export interface RegisterZoneDropProposalAminoMsg {
  type: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
  value: RegisterZoneDropProposalAmino;
}
export interface RegisterZoneDropProposalSDKType {
  title: string;
  description: string;
  zone_drop?: ZoneDropSDKType;
  claim_records: Uint8Array;
}
function createBaseRegisterZoneDropProposal(): RegisterZoneDropProposal {
  return {
    title: "",
    description: "",
    zoneDrop: undefined,
    claimRecords: new Uint8Array()
  };
}
export const RegisterZoneDropProposal = {
  typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
  encode(message: RegisterZoneDropProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.zoneDrop !== undefined) {
      ZoneDrop.encode(message.zoneDrop, writer.uint32(26).fork()).ldelim();
    }
    if (message.claimRecords.length !== 0) {
      writer.uint32(34).bytes(message.claimRecords);
    }
    return writer;
  },
  fromJSON(object: any): RegisterZoneDropProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      zoneDrop: isSet(object.zoneDrop) ? ZoneDrop.fromJSON(object.zoneDrop) : undefined,
      claimRecords: isSet(object.claimRecords) ? bytesFromBase64(object.claimRecords) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RegisterZoneDropProposal>): RegisterZoneDropProposal {
    const message = createBaseRegisterZoneDropProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.zoneDrop = object.zoneDrop !== undefined && object.zoneDrop !== null ? ZoneDrop.fromPartial(object.zoneDrop) : undefined;
    message.claimRecords = object.claimRecords ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RegisterZoneDropProposalAmino): RegisterZoneDropProposal {
    const message = createBaseRegisterZoneDropProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.zone_drop !== undefined && object.zone_drop !== null) {
      message.zoneDrop = ZoneDrop.fromAmino(object.zone_drop);
    }
    if (object.claim_records !== undefined && object.claim_records !== null) {
      message.claimRecords = bytesFromBase64(object.claim_records);
    }
    return message;
  },
  toAmino(message: RegisterZoneDropProposal): RegisterZoneDropProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.zone_drop = message.zoneDrop ? ZoneDrop.toAmino(message.zoneDrop) : undefined;
    obj.claim_records = message.claimRecords ? base64FromBytes(message.claimRecords) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterZoneDropProposalAminoMsg): RegisterZoneDropProposal {
    return RegisterZoneDropProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterZoneDropProposalProtoMsg): RegisterZoneDropProposal {
    return RegisterZoneDropProposal.decode(message.value);
  },
  toProto(message: RegisterZoneDropProposal): Uint8Array {
    return RegisterZoneDropProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterZoneDropProposal): RegisterZoneDropProposalProtoMsg {
    return {
      typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal",
      value: RegisterZoneDropProposal.encode(message).finish()
    };
  }
};