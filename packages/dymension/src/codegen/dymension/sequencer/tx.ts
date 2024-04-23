import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Description, DescriptionAmino, DescriptionSDKType } from "./description";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { Pubkey } from "@cosmjs/amino";
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencer {
  /** creator is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  creator: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey?: (Any) | undefined;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappId: string;
  /** description defines the descriptive terms for the sequencer. */
  description: Description;
}
export interface MsgCreateSequencerProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer";
  value: Uint8Array;
}
export type MsgCreateSequencerEncoded = Omit<MsgCreateSequencer, "dymintPubKey"> & {
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */dymintPubKey?: AnyProtoMsg | undefined;
};
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencerAmino {
  /** creator is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  creator?: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey?: AnyAmino;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappId?: string;
  /** description defines the descriptive terms for the sequencer. */
  description?: DescriptionAmino;
}
export interface MsgCreateSequencerAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer";
  value: MsgCreateSequencerAmino;
}
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencerSDKType {
  creator: string;
  dymintPubKey?: AnySDKType | undefined;
  rollappId: string;
  description: DescriptionSDKType;
}
export interface MsgCreateSequencerResponse {}
export interface MsgCreateSequencerResponseProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse";
  value: Uint8Array;
}
export interface MsgCreateSequencerResponseAmino {}
export interface MsgCreateSequencerResponseAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse";
  value: MsgCreateSequencerResponseAmino;
}
export interface MsgCreateSequencerResponseSDKType {}
function createBaseMsgCreateSequencer(): MsgCreateSequencer {
  return {
    creator: "",
    dymintPubKey: undefined,
    rollappId: "",
    description: Description.fromPartial({})
  };
}
export const MsgCreateSequencer = {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer",
  encode(message: MsgCreateSequencer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.dymintPubKey !== undefined) {
      Any.encode((message.dymintPubKey as Any), writer.uint32(18).fork()).ldelim();
    }
    if (message.rollappId !== "") {
      writer.uint32(26).string(message.rollappId);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateSequencer {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      dymintPubKey: isSet(object.dymintPubKey) ? Any.fromJSON(object.dymintPubKey) : undefined,
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateSequencer>): MsgCreateSequencer {
    const message = createBaseMsgCreateSequencer();
    message.creator = object.creator ?? "";
    message.dymintPubKey = object.dymintPubKey !== undefined && object.dymintPubKey !== null ? Any.fromPartial(object.dymintPubKey) : undefined;
    message.rollappId = object.rollappId ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateSequencerAmino): MsgCreateSequencer {
    const message = createBaseMsgCreateSequencer();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.dymintPubKey !== undefined && object.dymintPubKey !== null) {
      message.dymintPubKey = encodePubkey(object.dymintPubKey);
    }
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    return message;
  },
  toAmino(message: MsgCreateSequencer): MsgCreateSequencerAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.dymintPubKey = message.dymintPubKey ? decodePubkey(message.dymintPubKey) : undefined;
    obj.rollappId = message.rollappId;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSequencerAminoMsg): MsgCreateSequencer {
    return MsgCreateSequencer.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSequencerProtoMsg): MsgCreateSequencer {
    return MsgCreateSequencer.decode(message.value);
  },
  toProto(message: MsgCreateSequencer): Uint8Array {
    return MsgCreateSequencer.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSequencer): MsgCreateSequencerProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer",
      value: MsgCreateSequencer.encode(message).finish()
    };
  }
};
function createBaseMsgCreateSequencerResponse(): MsgCreateSequencerResponse {
  return {};
}
export const MsgCreateSequencerResponse = {
  typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse",
  encode(_: MsgCreateSequencerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCreateSequencerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateSequencerResponse>): MsgCreateSequencerResponse {
    const message = createBaseMsgCreateSequencerResponse();
    return message;
  },
  fromAmino(_: MsgCreateSequencerResponseAmino): MsgCreateSequencerResponse {
    const message = createBaseMsgCreateSequencerResponse();
    return message;
  },
  toAmino(_: MsgCreateSequencerResponse): MsgCreateSequencerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateSequencerResponseAminoMsg): MsgCreateSequencerResponse {
    return MsgCreateSequencerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSequencerResponseProtoMsg): MsgCreateSequencerResponse {
    return MsgCreateSequencerResponse.decode(message.value);
  },
  toProto(message: MsgCreateSequencerResponse): Uint8Array {
    return MsgCreateSequencerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSequencerResponse): MsgCreateSequencerResponseProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse",
      value: MsgCreateSequencerResponse.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino) => {
  return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any): Pubkey | null => {
  return decodePubkey(content);
};